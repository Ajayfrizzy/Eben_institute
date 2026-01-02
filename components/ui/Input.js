// components/ui/Input.js
import React from 'react'
import { clsx } from 'clsx'

const Input = React.forwardRef(function Input({
  className = '',
  type = 'text',
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  ...props
}, ref) {
  const inputId = props.id || props.name || `input-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={clsx(fullWidth && 'w-full')}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={clsx(
            'block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900',
            'placeholder:text-gray-500',
            'focus:border-[#5fa336] focus:ring-2 focus:ring-[#94de61]/30 focus:outline-none',
            'transition-colors duration-200',
            'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
            className
          )}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input