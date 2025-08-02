import React from 'react'
import { cn } from '@/utils/cn'

interface AvatarProps {
  role: 'user' | 'assistant'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  role,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }

  const roleStyles = {
    user: {
      backgroundColor: 'var(--custom-accent)',
      color: 'white'
    },
    assistant: {
      backgroundColor: 'rgb(61, 55, 81)',
      color: 'white'
    }
  }

  const initials = role === 'user' ? 'U' : 'A'

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full font-medium text-sm',
        sizeClasses[size],
        className
      )}
      style={roleStyles[role]}
    >
      {initials}
    </div>
  )
} 