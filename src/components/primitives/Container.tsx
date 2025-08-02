import React from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  variant?: 'default' | 'card' | 'panel' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  rounded = 'md',
  shadow = 'none',
  className,
}) => {
  const variantClasses = {
    'default': 'bg-background',
    'card': 'bg-card border border-border',
    'panel': 'bg-card/50 backdrop-blur-sm',
    'bordered': 'border border-border',
  }

  const paddingClasses = {
    'none': 'p-0',
    'sm': 'p-2',
    'md': 'p-4',
    'lg': 'p-6',
    'xl': 'p-8',
  }

  const roundedClasses = {
    'none': 'rounded-none',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'full': 'rounded-full',
  }

  const shadowClasses = {
    'none': '',
    'sm': 'shadow-sm',
    'md': 'shadow-md',
    'lg': 'shadow-lg',
  }

  return (
    <div
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        roundedClasses[rounded],
        shadowClasses[shadow],
        className
      )}
      style={{
        backgroundColor: variant === 'default' ? 'var(--custom-background)' :
                       variant === 'card' ? 'var(--custom-card)' :
                       variant === 'panel' ? 'rgba(32, 32, 32, 0.5)' :
                       'transparent',
        borderColor: 'var(--custom-border)',
      }}
    >
      {children}
    </div>
  )
} 