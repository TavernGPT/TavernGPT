import React from 'react'
import { cn } from '@/utils/cn'

interface InteractiveProps {
  children: React.ReactNode
  variant?: 'button' | 'link' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export const Interactive: React.FC<InteractiveProps> = ({
  children,
  variant = 'button',
  size = 'md',
  disabled = false,
  onClick,
  className,
}) => {
  const variantClasses = {
    'button': 'bg-primary text-primary-foreground hover:bg-primary/90',
    'link': 'text-primary hover:underline',
    'ghost': 'hover:bg-accent hover:text-accent-foreground',
    'outline': 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  }

  const sizeClasses = {
    'sm': 'px-2 py-1 text-xs',
    'md': 'px-3 py-2 text-sm',
    'lg': 'px-4 py-3 text-base',
  }

  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor: variant === 'button' ? 'var(--custom-accent)' :
                       variant === 'outline' ? 'var(--custom-background)' :
                       'transparent',
        color: variant === 'button' ? 'var(--custom-accent-foreground)' :
               variant === 'link' ? 'var(--custom-accent)' :
               'var(--custom-foreground)',
        borderColor: variant === 'outline' ? 'var(--custom-border)' : 'transparent',
      }}
    >
      {children}
    </button>
  )
} 