import React, { useState, useEffect } from 'react';
import './css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    program: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const programs = [
    { value: '', label: 'Select Program' },
    { value: 'youth', label: 'Youth Member' },
    { value: 'adult', label: 'Adult Member' },
    { value: 'volunteer', label: 'Volunteer' }
  ];

  useEffect(() => {
    // Calculate password strength
    if (formData.password) {
      let strength = 0;
      if (formData.password.length >= 8) strength += 1;
      if (/[A-Z]/.test(formData.password)) strength += 1;
      if (/[0-9]/.test(formData.password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    validateField(field, formData[field]);
  };

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'program':
        if (!value) error = 'Please select a program';
        break;
      default:
        break;
    }
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
    return !error;
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formData).forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
      program: true
    });

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 1: return '#ff4d4f'; // Weak (red)
      case 2: return '#faad14'; // Moderate (orange)
      case 3: return '#52c41a'; // Good (green)
      case 4: return '#389e0d'; // Strong (dark green)
      default: return '#f0f0f0'; // Default (gray)
    }
  };

  if (isSuccess) {
    return (
      <div className="success-container">
        <div className="success-animation">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h2>Welcome to Our Community!</h2>
        <p className="success-message">
          Your registration is complete. We're thrilled to have you join us on this journey.
        </p>
        <button 
          className="continue-btn"
          onClick={() => setIsSuccess(false)}
        >
          Continue to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="register-container">
      <div className="register-header">
        <h2>Join Our Spiritual Family</h2>
        <p className="subtitle">
          Begin your journey with us. Create your account to access all our programs and resources.
        </p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <div className={`form-group ${touched.name && errors.name ? 'error' : ''}`}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            required
            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
          />
          {touched.name && errors.name && (
            <span id="name-error" className="error-message" aria-live="polite">
              {errors.name}
            </span>
          )}
        </div>

        <div className={`form-group ${touched.email && errors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            required
            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
          />
          {touched.email && errors.email && (
            <span id="email-error" className="error-message" aria-live="polite">
              {errors.email}
            </span>
          )}
        </div>

        <div className={`form-group ${touched.password && errors.password ? 'error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={() => handleBlur('password')}
            required
            aria-describedby={touched.password && errors.password ? "password-error" : undefined}
          />
          <div className="password-strength">
            <div 
              className="strength-meter"
              style={{
                width: `${passwordStrength * 25}%`,
                backgroundColor: getStrengthColor()
              }}
            ></div>
            <span className="strength-text">
              {passwordStrength === 0 ? '' : 
               passwordStrength === 1 ? 'Weak' :
               passwordStrength === 2 ? 'Moderate' :
               passwordStrength === 3 ? 'Good' : 'Strong'}
            </span>
          </div>
          {touched.password && errors.password && (
            <span id="password-error" className="error-message" aria-live="polite">
              {errors.password}
            </span>
          )}
        </div>

        <div className={`form-group ${touched.confirmPassword && errors.confirmPassword ? 'error' : ''}`}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={() => handleBlur('confirmPassword')}
            required
            aria-describedby={touched.confirmPassword && errors.confirmPassword ? "confirmPassword-error" : undefined}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span id="confirmPassword-error" className="error-message" aria-live="polite">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <div className={`form-group ${touched.program && errors.program ? 'error' : ''}`}>
          <label htmlFor="program">Program</label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            onBlur={() => handleBlur('program')}
            required
            aria-describedby={touched.program && errors.program ? "program-error" : undefined}
          >
            {programs.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {touched.program && errors.program && (
            <span id="program-error" className="error-message" aria-live="polite">
              {errors.program}
            </span>
          )}
        </div>

        <button 
          type="submit" 
          className="register-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="spinner"></span>
          ) : (
            'Create Account'
          )}
        </button>
      </form>

      <div className="login-link">
        Already have an account? <a href="/login">Sign in</a>
      </div>
    </div>
  );
};

export default Register;
// done