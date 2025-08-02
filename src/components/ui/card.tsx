import * as React from "react"
import { cn } from "@/utils/cn"

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
  actions?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  actions,
}) => {
  return (
    <div className={cn("border rounded-lg", className)} style={{ 
      backgroundColor: 'var(--custom-card)', 
      borderColor: 'var(--custom-border)' 
    }}>
      {(title || actions) && (
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--custom-border)' }}>
          {title && (
            <h3 className="text-sm font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
              {title}
            </h3>
          )}
          {actions}
        </div>
      )}
      <div className={title || actions ? "p-4" : ""}>
        {children}
      </div>
    </div>
  )
} 