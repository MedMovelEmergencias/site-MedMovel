import React, { useState, useEffect, useRef } from 'react';
import nurseAvatar from '../assets/video/main-avatar.webm';

interface AvatarMessage {
  id: number;
  texto: string;
  duracao: number;
}

const AVATAR_MESSAGES: AvatarMessage[] = [
  { id: 1, texto: "Olá! Bem-vindo à Med Móvel! 👋", duracao: 2300 },
  { id: 2, texto: "Somos especialistas em atendimento hospitalar há mais de 10 anos! 🚑", duracao: 5000 },
  { id: 3, texto: "Nossa equipe está disponível 24h para emergências e transporte médico.", duracao: 5400 },
  { id: 4, texto: "Precisa de ajuda? Fale conosco! Nossa prioridade é ajudar você. ❤️", duracao: 6000 }
];

const DESKTOP_BREAKPOINT = 1024;
const SESSION_STORAGE_KEY = 'avatarJaExecutado';
const ANIMATION_DURATION = 400;

const Avatar: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isSequenceCompleted, setIsSequenceCompleted] = useState(false);
  const [showClickPrompt, setShowClickPrompt] = useState(true);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [isSequencePaused, setIsSequencePaused] = useState(false);
  const [isFirstExecution, setIsFirstExecution] = useState(true);

  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const messageTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isDesktopView = () => window.innerWidth >= DESKTOP_BREAKPOINT;

  const getActiveVideo = () => {
    return isDesktopView() ? desktopVideoRef.current : mobileVideoRef.current;
  };

  const clearMessageTimer = () => {
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current);
      messageTimerRef.current = null;
    }
  };

  const isLastMessage = () => currentMessageIndex >= AVATAR_MESSAGES.length - 1;

  const resetVideoToStart = (video: HTMLVideoElement) => {
    video.currentTime = 0;
    video.pause();
  };

  const completeSequence = () => {
    setShowMessage(false);
    setIsSequenceCompleted(true);
    setIsVideoPlaying(false);
    setShowClickPrompt(true);

    const activeVideo = getActiveVideo();
    if (activeVideo) resetVideoToStart(activeVideo);
  };

  const advanceToNextMessage = () => {
    setCurrentMessageIndex(prev => prev + 1);
    setIsAnimatingOut(false);
  };

  const handleMessageTimeout = () => {
    setIsAnimatingOut(true);

    setTimeout(() => {
      if (isLastMessage()) {
        completeSequence();
      } else {
        advanceToNextMessage();
      }
    }, ANIMATION_DURATION);
  };

  const shouldRunMessageSequence = () => {
    return isVideoPlaying && !isSequenceCompleted && !isSequencePaused;
  };

  const startMessageSequence = () => {
    if (!shouldRunMessageSequence()) {
      clearMessageTimer();
      return;
    }

    const currentMessage = AVATAR_MESSAGES[currentMessageIndex];
    messageTimerRef.current = setTimeout(handleMessageTimeout, currentMessage.duracao);

    return clearMessageTimer;
  };

  const resetSequenceState = () => {
    setCurrentMessageIndex(0);
    setIsAnimatingOut(false);
    setShowMessage(true);
    setIsSequenceCompleted(false);
    setIsVideoPlaying(true);
    setShowClickPrompt(false);
    setIsVideoPaused(false);
    setIsSequencePaused(false);
  };

  const startVideoSequence = async (video: HTMLVideoElement) => {
    resetSequenceState();
    video.currentTime = 0;
    await video.play();
  };

  const toggleVideoPause = (video: HTMLVideoElement) => {
    if (isVideoPaused) {
      video.play();
      setIsVideoPaused(false);
      setIsSequencePaused(false);
    } else {
      video.pause();
      setIsVideoPaused(true);
      setIsSequencePaused(true);
    }
  };

  const handleVideoClick = async () => {
    const activeVideo = getActiveVideo();
    if (!activeVideo) return;

    // Se é a primeira execução, marca como executado
    if (isFirstExecution) {
      setIsFirstExecution(false);
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    }

    if (!isVideoPlaying || isSequenceCompleted) {
      await startVideoSequence(activeVideo);
    } else {
      toggleVideoPause(activeVideo);
    }
  };

  const handleVideoEnd = () => {
    const activeVideo = getActiveVideo();
    if (activeVideo) {
      resetVideoToStart(activeVideo);
    }
  };

  const setupVideoEventListeners = () => {
    const cleanup: (() => void)[] = [];

    [mobileVideoRef.current, desktopVideoRef.current].forEach(video => {
      if (video) {
        video.addEventListener('ended', handleVideoEnd);
        cleanup.push(() => video.removeEventListener('ended', handleVideoEnd));
      }
    });

    return () => cleanup.forEach(fn => fn());
  };

  const synchronizeVideosOnResize = () => {
    const mobileVideo = mobileVideoRef.current;
    const desktopVideo = desktopVideoRef.current;

    if (!isVideoPlaying || !mobileVideo || !desktopVideo) return;

    const isDesktop = isDesktopView();
    const sourceVideo = isDesktop ? mobileVideo : desktopVideo;
    const targetVideo = isDesktop ? desktopVideo : mobileVideo;

    targetVideo.currentTime = sourceVideo.currentTime;

    if (!isVideoPaused) {
      targetVideo.play().catch(console.log);
    }

    sourceVideo.pause();
  };

  const setupResizeHandler = () => {
    window.addEventListener('resize', synchronizeVideosOnResize);
    return () => window.removeEventListener('resize', synchronizeVideosOnResize);
  };

  const setupInitialState = () => {
    // Estado inicial sempre mostra "Clique em mim!" e espera interação do usuário
    setIsSequenceCompleted(false);
    setShowClickPrompt(true);
    setShowMessage(false);
  };

  useEffect(startMessageSequence, [currentMessageIndex, isVideoPlaying, isSequenceCompleted, isSequencePaused]);
  useEffect(setupInitialState, []);
  useEffect(setupVideoEventListeners, []);
  useEffect(setupResizeHandler, [isVideoPlaying, isVideoPaused]);

  return (
    <div className="absolute bottom-0 left-4 sm:left-6 md:left-8 lg:left-12 z-30">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden relative">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 transition-transform duration-300 hover:scale-105 cursor-pointer">
          <video
            ref={mobileVideoRef}
            className="w-full h-full"
            playsInline
            webkit-playsinline="true"
            loop
            controls={false}
            disablePictureInPicture
            onClick={handleVideoClick}
            style={{
              backgroundColor: 'transparent',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          >
            <source 
              src={nurseAvatar} 
              type="video/webm" 
              media="(min-width: 768px)"
            />
            <source 
              src={nurseAvatar} 
              type="video/webm" 
              media="(max-width: 767px)"
            />
            {/* Fallback para navegadores que não suportam WebM */}
            <p>Seu navegador não suporta vídeos HTML5.</p>
          </video>
        </div>

        {showMessage && (
          <div
            className={`absolute transition-all duration-500 ease-in-out ${isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            style={{
              left: 'calc(100% + 6px)',
              top: '25%',
              transform: 'translateY(-50%)',
            }}
          >
            <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 sm:p-4 rounded-xl shadow-lg max-w-[240px] sm:max-w-xs md:max-w-xs border border-gray-200 dark:border-gray-600 relative">
              <p className="text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-snug md:leading-relaxed font-medium text-center">
                {AVATAR_MESSAGES[currentMessageIndex]?.texto}
              </p>
              <div className="absolute -left-1.5 sm:-left-2 md:-left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[8px] sm:border-r-[12px] md:border-r-[16px] border-r-white dark:border-r-gray-700 border-t-[4px] sm:border-t-[6px] md:border-t-8 border-t-transparent border-b-[4px] sm:border-b-[6px] md:border-b-8 border-b-transparent"></div>
            </div>
          </div>
        )}

        {showClickPrompt && !showMessage && (
          <div
            className="absolute transition-all duration-500 ease-in-out opacity-100 scale-100"
            style={{
              left: 'calc(100% + 6px)',
              top: '25%',
              transform: 'translateY(-50%)',
            }}
          >
            <div className="bg-accent-red text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl max-w-[120px] sm:max-w-[140px] md:max-w-[160px] border border-red-300 relative animate-pulse">
              <p className="text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-snug md:leading-relaxed font-medium text-center">
                Clique em mim! 👆
              </p>
              <div className="absolute -left-1.5 sm:-left-2 md:-left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[8px] sm:border-r-[12px] md:border-r-[16px] border-r-accent-red border-t-[4px] sm:border-t-[6px] md:border-t-8 border-t-transparent border-b-[4px] sm:border-b-[6px] md:border-b-8 border-b-transparent"></div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-end -space-x-8">
        <div className="w-56 h-56 transition-transform duration-300 hover:scale-105 cursor-pointer">
          <video
            ref={desktopVideoRef}
            className="w-full h-full"
            playsInline
            muted={false}
            preload="auto"
            onClick={handleVideoClick}
            style={{
              background: 'transparent',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          >
            <source 
              src={nurseAvatar} 
              type="video/webm" 
              media="(min-width: 1024px)"
            />
            {/* Fallback para navegadores que não suportam WebM */}
            <p>Seu navegador não suporta vídeos HTML5.</p>
          </video>
        </div>

        {showMessage && (
          <div className={`transition-all duration-500 ease-in-out mb-20 ${isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-6 py-4 rounded-2xl shadow-xl max-w-xs border border-gray-200 dark:border-gray-600 relative">
              <p className="text-sm leading-relaxed font-medium text-center">
                {AVATAR_MESSAGES[currentMessageIndex]?.texto}
              </p>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[16px] border-r-white dark:border-r-gray-700 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
            </div>
          </div>
        )}

        {showClickPrompt && !showMessage && (
          <div className="transition-all duration-500 ease-in-out mb-20 opacity-100 scale-100">
            <div className="bg-accent-red text-white px-6 py-4 rounded-2xl shadow-xl max-w-xs border border-red-300 relative animate-pulse">
              <p className="text-sm leading-relaxed font-medium text-center">
                Clique em mim! 👆
              </p>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[16px] border-r-accent-red border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;