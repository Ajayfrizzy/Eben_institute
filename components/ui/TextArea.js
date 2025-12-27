// components/ui/Textarea.js
import React from 'react'
import { clsx } from 'clsx'

const Textarea = React.forwardRef(function Textarea({
  className = '',
  label,
  error,
  helperText,
  rows = 4,
  fullWidth = true,
  ...props
}, ref) {
  const textareaId = props.id || props.name || `textarea-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={clsx(fullWidth && 'w-full')}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={clsx(
          'block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900',
          'placeholder:text-gray-500',
          'focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none',
          'transition-colors duration-200',
          'resize-y min-h-25',
          'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
          className
        )}
        {...props}
      />
      
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea