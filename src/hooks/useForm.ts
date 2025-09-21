// Caminho: src/hooks/useForm.ts
// Hook personalizado para gerenciamento de formulários com validação otimizada
// Implementa debounce, validação em tempo real e tratamento de erros
import { useState, useCallback } from 'react';
import { isValidEmail, isValidPhone, debounce } from '../utils';
import type { ContactFormData } from '../types';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface UseFormOptions<T> {
  initialValues: T;
  validationRules?: ValidationRules;
  onSubmit: (values: T) => Promise<void> | void;
  validateOnChange?: boolean;
  debounceMs?: number;
}

interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (name: keyof T) => (value: string) => void;
  handleBlur: (name: keyof T) => () => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  setFieldValue: (name: keyof T, value: string) => void;
  setFieldError: (name: keyof T, error: string) => void;
  validateField: (name: keyof T, value: string) => string | undefined;
}

export function useForm<T extends Record<string, string>>({
  initialValues,
  validationRules = {},
  onSubmit,
  validateOnChange = true,
  debounceMs = 300,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função de validação de campo individual
  const validateField = useCallback((name: keyof T, value: string): string | undefined => {
    const rule = validationRules[name as string];
    if (!rule) return undefined;

    // Validação de campo obrigatório
    if (rule.required && !value.trim()) {
      return 'Este campo é obrigatório';
    }

    // Validação de comprimento mínimo
    if (rule.minLength && value.length < rule.minLength) {
      return `Deve ter pelo menos ${rule.minLength} caracteres`;
    }

    // Validação de comprimento máximo
    if (rule.maxLength && value.length > rule.maxLength) {
      return `Deve ter no máximo ${rule.maxLength} caracteres`;
    }

    // Validação por padrão regex
    if (rule.pattern && !rule.pattern.test(value)) {
      return 'Formato inválido';
    }

    // Validação customizada
    if (rule.custom) {
      return rule.custom(value);
    }

    return undefined;
  }, [validationRules]);

  // Função debounced para validação
  const debouncedValidation = useCallback(
    debounce((...args: unknown[]) => {
      const [name, value] = args as [string, string];
      const error = validateField(name as keyof T, value);
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }, debounceMs),
    [validateField, debounceMs]
  );

  // Handler para mudança de valores
  const handleChange = useCallback((name: keyof T) => (value: string) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));

    // Validação em tempo real se habilitada
    if (validateOnChange && touched[name]) {
      debouncedValidation(name as string, value);
    }
  }, [validateOnChange, touched, debouncedValidation]);

  // Handler para blur (saída do campo)
  const handleBlur = useCallback((name: keyof T) => () => {
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    // Valida imediatamente ao sair do campo
    const error = validateField(name, values[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  }, [validateField, values]);

  // Validação de todo o formulário
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isFormValid = true;

    Object.keys(values).forEach(key => {
      const error = validateField(key as keyof T, values[key as keyof T]);
      if (error) {
        newErrors[key as keyof T] = error;
        isFormValid = false;
      }
    });

    setErrors(newErrors);
    return isFormValid;
  }, [values, validateField]);

  // Handler para submit do formulário
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Marca todos os campos como tocados
    const allTouched = Object.keys(values).reduce((acc, key) => ({
      ...acc,
      [key]: true,
    }), {});
    setTouched(allTouched);

    // Valida formulário
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validateForm, onSubmit]);

  // Função para resetar formulário
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Função para definir valor de campo específico
  const setFieldValue = useCallback((name: keyof T, value: string) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Função para definir erro de campo específico
  const setFieldError = useCallback((name: keyof T, error: string) => {
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  }, []);

  // Calcula se o formulário é válido
  const isValid = Object.keys(errors).length === 0 && 
    Object.keys(values).every(key => {
      const rule = validationRules[key];
      return !rule?.required || values[key as keyof T].trim();
    });

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldError,
    validateField,
  };
}

// Hook especializado para formulário de contato
export function useContactForm(onSubmit: (data: ContactFormData) => Promise<void>) {
  return useForm({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    } as Record<string, string>,
    validationRules: {
      nome: {
        required: true,
        minLength: 2,
        maxLength: 100,
      },
      email: {
        required: true,
        custom: (value: string) => {
          if (!isValidEmail(value)) {
            return 'Email inválido';
          }
          return undefined;
        },
      },
      telefone: {
        required: true,
        custom: (value: string) => {
          if (!isValidPhone(value)) {
            return 'Telefone inválido';
          }
          return undefined;
        },
      },
      assunto: {
        required: true,
        minLength: 5,
        maxLength: 100,
      },
      mensagem: {
        required: true,
        minLength: 10,
        maxLength: 1000,
      },
    },
    onSubmit: (values) => onSubmit(values as unknown as ContactFormData),
    validateOnChange: true,
    debounceMs: 500,
  });
}