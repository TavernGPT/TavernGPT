import React from 'react'
import { MessageContent } from './MessageContent'
import { cn } from '@/utils/cn'

interface UserMessageProps {
  id: string
  content: string
  className?: string
}

export const UserMessage: React.FC<UserMessageProps> = ({
  id,
  content,
  className
}) => {
  return (
    <div className={cn('flex flex-col items-end max-w-[80%]', className)}>
      <div
        className="rounded-2xl px-4 py-2 max-w-full"
        style={{
          backgroundColor: 'var(--custom-accent)',
          color: 'white'
        }}
      >
        <MessageContent content={content} role="user" />
      </div>
    </div>
  )
} 