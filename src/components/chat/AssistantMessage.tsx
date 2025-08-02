import React from 'react'
import { Avatar } from './Avatar'
import { MessageActionBar } from './MessageActionBar'
import { MessageContent } from './MessageContent'
import { cn } from '@/utils/cn'

interface AssistantMessageProps {
  id: string
  content: string
  timestamp?: string
  metadata?: {
    tokens?: number
    model?: string
  }
  isBookmarked?: boolean
  onCopy?: (content: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  onRegenerate?: (id: string) => void
  onContinue?: (id: string) => void
  className?: string
}

export const AssistantMessage: React.FC<AssistantMessageProps> = ({
  id,
  content,
  timestamp,
  metadata,
  isBookmarked,
  onCopy,
  onEdit,
  onDelete,
  onRegenerate,
  onContinue,
  className
}) => {
  return (
    <div className={cn('flex gap-3 max-w-[80%]', className)}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Avatar role="assistant" />
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        {/* Message Header - Name, Time and Metadata */}
        <div className="flex items-center gap-2 mb-1">
          <span 
            className="font-bold text-sm"
            style={{ color: 'var(--custom-foreground)' }}
          >
            Assistant
          </span>
          {timestamp && (
            <span 
              className="text-xs"
              style={{ color: 'var(--custom-muted-foreground)' }}
            >
              {timestamp}
            </span>
          )}
          {metadata?.tokens && (
            <span 
              className="text-xs"
              style={{ color: 'var(--custom-muted-foreground)' }}
            >
              {metadata.tokens} tokens
            </span>
          )}
          {metadata?.model && (
            <span 
              className="text-xs"
              style={{ color: 'var(--custom-muted-foreground)' }}
            >
              {metadata.model}
            </span>
          )}
          {isBookmarked && (
            <span 
              className="text-xs text-yellow-500"
              title="Bookmarked"
            >
              ⭐
            </span>
          )}
        </div>

        {/* Message Content */}
        <div className="w-full">
          <div
            className="rounded-2xl px-4 py-2 max-w-full"
            style={{
              backgroundColor: 'var(--custom-card)',
              color: 'var(--custom-card-foreground)'
            }}
          >
            <MessageContent content={content} role="assistant" />
          </div>
        </div>

        {/* Message Action Bar - Always visible below message */}
        <div className="mt-2">
          <MessageActionBar
            messageId={id}
            content={content}
            isUser={false}
            onCopy={onCopy || (() => {})}
            onEdit={onEdit || (() => {})}
            onDelete={onDelete}
            onRegenerate={onRegenerate}
            onContinue={onContinue}
          />
        </div>
      </div>
    </div>
  )
} 