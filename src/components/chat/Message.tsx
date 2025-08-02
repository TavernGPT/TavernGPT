import React, { useState } from 'react'
import { Button } from '../ui/button'
import { UserMessage } from './UserMessage'
import { AssistantMessage } from './AssistantMessage'
import { cn } from '@/utils/cn'

interface MessageType {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  metadata?: {
    tokens?: number
    model?: string
  }
  isBookmarked?: boolean
  isHidden?: boolean
  attachments?: Array<{
    id: string
    name: string
    size: number
  }>
}

interface MessageProps {
  message: MessageType
  onEdit?: (id: string, content: string) => void
  onDelete?: (id: string) => void
  isStreaming?: boolean
}

export const Message: React.FC<MessageProps> = ({
  message,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(message.content)

  const isUser = message.role === 'user'

  const handleEdit = () => {
    if (onEdit) {
      onEdit(message.id, editContent)
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditContent(message.content)
    setIsEditing(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
  }

  const formatTime = (date: Date) => {
    if (!date || isNaN(date.getTime())) {
      return 'Invalid date'
    }

    try {
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(date)
    } catch (error) {
      console.error('Error formatting date:', error)
      return 'Invalid date'
    }
  }

  // Don't render hidden messages
  if (message.isHidden) {
    return null
  }

  // If editing, show edit form
  if (isEditing) {
    return (
      <div className={cn("group relative p-2", isUser ? "flex justify-end" : "flex justify-start")}>
        <div className="w-full space-y-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full min-h-[60px] resize-none rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--custom-background)',
              borderColor: 'var(--custom-border)',
              color: 'var(--custom-foreground)',
            }}
            autoFocus
          />
          <div className="flex gap-2 justify-end">
            <Button size="sm" onClick={handleEdit}>
              Save
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Render using atomic components
  return (
    <div className={cn("group relative p-2", isUser ? "flex justify-end" : "flex justify-start")}>
      {isUser ? (
        <UserMessage
          id={message.id}
          content={message.content}
        />
      ) : (
        <AssistantMessage
          id={message.id}
          content={message.content}
          timestamp={formatTime(message.timestamp)}
          metadata={message.metadata}
          isBookmarked={message.isBookmarked}
          onCopy={handleCopy}
          onEdit={() => setIsEditing(true)}
          onDelete={onDelete}
        />
      )}
      
      {/* File Attachments */}
      {message.attachments && message.attachments.length > 0 && (
        <div className="mt-2 space-y-2">
          {message.attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center space-x-2 p-2 rounded border"
              style={{
                borderColor: 'var(--custom-border)',
                backgroundColor: 'var(--custom-muted)',
              }}
            >
              <span className="text-xs">📎</span>
              <span 
                className="text-sm truncate"
                style={{ color: 'var(--custom-foreground)' }}
              >
                {attachment.name}
              </span>
              <span 
                className="text-xs"
                style={{ color: 'var(--custom-muted-foreground)' }}
              >
                ({(attachment.size / 1024).toFixed(1)} KB)
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 