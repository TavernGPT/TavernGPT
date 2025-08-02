import React, { useState, useRef } from 'react'
import { Button } from '../ui/button'
import { Send, Paperclip, Mic, Smile, MoreHorizontal } from 'lucide-react'
import { cn } from '@/utils/cn'

interface PromptInputProps {
  onSend: (message: string) => void
  placeholder?: string
  disabled?: boolean
  isLoading?: boolean
  className?: string
}

interface Command {
  cmd: string
  desc: string
  icon?: string
}

export const PromptInput: React.FC<PromptInputProps> = ({
  onSend,
  placeholder = "Message...",
  disabled = false,
  isLoading = false,
  className,
}) => {
  const [message, setMessage] = useState('')
  const [showCommands, setShowCommands] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const commands: Command[] = [
    { cmd: '/send', desc: 'Send message' },
    { cmd: '/clear', desc: 'Clear chat' },
    { cmd: '/help', desc: 'Show help' },
    { cmd: '/settings', desc: 'Open settings' },
    { cmd: '/character', desc: 'Character info' },
    { cmd: '/bookmark', desc: 'Bookmark conversation' },
    { cmd: '/export', desc: 'Export chat' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled && !isLoading) {
      onSend(message.trim())
      setMessage('')
      setShowCommands(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
    
    // Show commands when typing '/'
    if (e.key === '/') {
      setShowCommands(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
    
    // Hide commands if not starting with '/'
    if (!e.target.value.startsWith('/')) {
      setShowCommands(false)
    }
  }

  const insertCommand = (command: string) => {
    setMessage(command + ' ')
    setShowCommands(false)
    textareaRef.current?.focus()
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Delay hiding commands to allow for clicks
    setTimeout(() => setShowCommands(false), 200)
  }

  return (
    <div className={cn("relative", className)}>
      {/* Command suggestions dropdown */}
      {showCommands && (
        <div 
          className="absolute bottom-full left-0 right-0 mb-2 p-3 rounded-lg border shadow-lg z-10"
          style={{ 
            backgroundColor: 'var(--custom-card)',
            borderColor: 'var(--custom-border)'
          }}
        >
          <div className="text-xs mb-2 font-medium" style={{ color: 'var(--custom-muted-foreground)' }}>
            Available commands:
          </div>
          <div className="space-y-1">
            {commands.map((command) => (
              <button
                key={command.cmd}
                className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-opacity-50 transition-colors"
                style={{ 
                  color: 'var(--custom-foreground)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--custom-muted)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={() => insertCommand(command.cmd)}
              >
                <span className="font-mono text-purple-400">{command.cmd}</span>
                <span className="ml-2 opacity-70">{command.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input container */}
      <div 
        className={cn(
          "flex items-end gap-2 p-3 rounded-lg border transition-all",
          isFocused && "ring-2 ring-purple-500 ring-opacity-50"
        )}
        style={{
          backgroundColor: 'var(--custom-card)',
          borderColor: isFocused ? 'var(--custom-accent)' : 'var(--custom-border)'
        }}
      >
        {/* Left side buttons */}
        <div className="flex items-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0"
            title="Attach file"
            disabled={disabled}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0"
            title="Voice input"
            disabled={disabled}
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>

        {/* Textarea */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isLoading ? "AI is thinking..." : placeholder}
            disabled={disabled || isLoading}
            className="w-full resize-none bg-transparent border-none outline-none text-sm leading-relaxed"
            style={{ 
              color: 'var(--custom-foreground)',
              minHeight: '20px',
              maxHeight: '120px'
            }}
            rows={1}
          />
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0"
            title="Emoji"
            disabled={disabled}
          >
            <Smile className="h-4 w-4" />
          </Button>
          
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0"
            title="More options"
            disabled={disabled}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          {/* Send button */}
          <Button
            size="sm"
            className="h-8 w-8 p-0"
            onClick={handleSubmit}
            disabled={!message.trim() || disabled || isLoading}
            title="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Status text */}
      {isLoading && (
        <div className="mt-2 text-xs text-center" style={{ color: 'var(--custom-muted-foreground)' }}>
          AI is generating a response...
        </div>
      )}
    </div>
  )
} 