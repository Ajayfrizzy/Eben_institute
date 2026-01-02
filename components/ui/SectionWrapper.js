// components/ui/SectionWrapper.js
import React from 'react'
import { clsx } from 'clsx'

export function SectionWrapper({
  children,
  className = '',
  padding = 'default',
  background = 'white',
  container = true,
  ...props
}) {
  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12',
    default: 'py-12 md:py-20',
    lg: 'py-20 md:py-32',
    xl: 'py-32 md:py-48'
  }
  
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-linear-to-r from-[#5fa336] to-[#487d2c] text-white',
    'primary-light': 'bg-linear-to-br from-[#f4fce9] to-[#e5f8c9]',
    dark: 'bg-gray-900 text-white'
  }
  
  return (
    <section
      className={clsx(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-6 md:px-12 max-w-[80vw] w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  children
}) {
  return (
    <div className={clsx(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'left' && 'text-left',
      align === 'right' && 'text-right',
      className
    )}>
      {subtitle && (
        <p className="text-sm font-semibold tracking-wide uppercase text-[#5fa336] mb-2">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export default SectionWrapper