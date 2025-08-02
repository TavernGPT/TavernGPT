import React from 'react'
import { cn } from '@/utils/cn'

interface SpacerProps {
  size?: '0' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16'
  direction?: 'horizontal' | 'vertical'
  className?: string
}

export const Spacer: React.FC<SpacerProps> = ({
  size = '4',
  direction = 'vertical',
  className,
}) => {
  const sizeClasses = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '6': '6',
    '8': '8',
    '12': '12',
    '16': '16',
  }

  const directionClasses = {
    'horizontal': `w-${sizeClasses[size]}`,
    'vertical': `h-${sizeClasses[size]}`,
  }

  return (
    <div
      className={cn(
        directionClasses[direction],
        'flex-shrink-0',
        className
      )}
    />
  )
} 