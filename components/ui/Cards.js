// components/ui/Card.js
import React from 'react'
import { clsx } from 'clsx'

export function Card({ className, children, hover = false, ...props }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl border border-gray-200 overflow-hidden',
        hover && 'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={clsx('px-6 py-4 border-b border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={clsx('text-lg font-semibold text-gray-900', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p
      className={clsx('text-sm text-gray-600', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div
      className={clsx('px-6 py-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={clsx('px-6 py-4 border-t border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  )
}