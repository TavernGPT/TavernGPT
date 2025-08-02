import * as React from "react"
import { cn } from "@/utils/cn"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={textareaId} 
            className="text-sm font-medium block"
            style={{ color: 'var(--custom-card-foreground)' }}
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-colors resize-none",
            error && "border-red-500 focus:ring-red-500",
            !error && "focus:ring-accent",
            className
          )}
          style={{
            backgroundColor: 'var(--custom-card)',
            borderColor: error ? 'rgb(239, 68, 68)' : 'var(--custom-border)',
            color: 'var(--custom-foreground)'
          }}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-xs" style={{ color: 'var(--custom-muted-foreground)' }}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea" 