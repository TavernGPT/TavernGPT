import React from 'react'
import { cn } from '@/utils/cn'

interface TextProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'mono' | 'label'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'muted' | 'accent' | 'destructive' | 'success'
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  size = 'base',
  weight = 'normal',
  color = 'default',
  align = 'left',
  className,
}) => {
  const variantClasses = {
    'h1': 'text-4xl font-bold',
    'h2': 'text-3xl font-semibold',
    'h3': 'text-2xl font-semibold',
    'h4': 'text-xl font-medium',
    'body': 'text-base',
    'caption': 'text-sm',
    'mono': 'font-mono text-sm',
    'label': 'text-sm font-medium',
  }

  const sizeClasses = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'base': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  }

  const weightClasses = {
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
    'bold': 'font-bold',
  }

  const colorClasses = {
    'default': 'text-foreground',
    'muted': 'text-muted-foreground',
    'accent': 'text-accent-foreground',
    'destructive': 'text-destructive',
    'success': 'text-green-500',
  }

  const alignClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
  }

  // For heading variants, ignore the size prop to prevent conflicts
  const isHeading = variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4'
  
  return (
    <div
      className={cn(
        variantClasses[variant],
        // Only apply size classes if not a heading variant
        !isHeading && sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        className
      )}
      style={{
        color: color === 'default' ? 'var(--custom-foreground)' :
               color === 'muted' ? 'var(--custom-muted-foreground)' :
               color === 'accent' ? 'var(--custom-accent-foreground)' :
               color === 'destructive' ? 'var(--custom-destructive)' :
               color === 'success' ? '#10b981' : 'var(--custom-foreground)'
      }}
    >
      {children}
    </div>
  )
} 