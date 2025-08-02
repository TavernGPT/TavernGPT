import * as React from "react"
import { cn } from "@/utils/cn"

interface CodeProps {
  children: React.ReactNode
  className?: string
  variant?: 'inline' | 'block'
  language?: string
}

export const Code: React.FC<CodeProps> = ({
  children,
  className,
  variant = 'inline',
  language,
}) => {
  if (variant === 'inline') {
    return (
              <code 
          className={cn("px-1 py-0.5 rounded text-xs", className)}
          style={{ backgroundColor: 'rgb(43, 43, 43)' }}
        >
          {children}
        </code>
    )
  }

  return (
          <pre 
        className={cn("p-2 rounded text-xs overflow-x-auto mb-2", className)}
        style={{ backgroundColor: 'rgb(43, 43, 43)' }}
      >
      {language && (
        <div className="text-xs text-gray-400 mb-1 font-mono">
          {language}
        </div>
      )}
      <code>{children}</code>
    </pre>
  )
} 