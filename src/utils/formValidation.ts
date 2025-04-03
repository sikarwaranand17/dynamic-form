
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateForm = (data: FormData): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  // Name validation
  if (!data.name.trim()) {
    errors.push({
      field: 'name',
      message: 'Name is required'
    });
  } else if (data.name.trim().length < 2) {
    errors.push({
      field: 'name',
      message: 'Name must be at least 2 characters'
    });
  }
  
  // Email validation
  if (!data.email.trim()) {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push({
        field: 'email',
        message: 'Please enter a valid email address'
      });
    }
  }
  
  // Subject validation
  if (!data.subject.trim()) {
    errors.push({
      field: 'subject',
      message: 'Subject is required'
    });
  }
  
  // Message validation
  if (!data.message.trim()) {
    errors.push({
      field: 'message',
      message: 'Message is required'
    });
  } else if (data.message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters'
    });
  }
  
  return errors;
};
