import * as React from "react"
import { cn } from "@/utils/cn"

interface SwitchCardOption {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  status?: 'connected' | 'connecting' | 'error' | 'default'
  statusText?: string
  actions?: React.ReactNode
  metadata?: React.ReactNode
  disabled?: boolean
}

interface SwitchCardProps {
  options: SwitchCardOption[]
  selectedId?: string
  onSelect: (id: string) => void
  title?: string
  className?: string
}

export const SwitchCard: React.FC<SwitchCardProps> = ({
  options,
  selectedId,
  onSelect,
  title,
  className,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'connected':
        return 'text-green-500'
      case 'connecting':
        return 'text-yellow-500'
      case 'error':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'connected':
        return '🟢'
      case 'connecting':
        return '🟡'
      case 'error':
        return '🔴'
      default:
        return '⚪'
    }
  }

  return (
    <div className={cn("space-y-3", className)}>
      {title && (
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
            {title}
          </h3>
        </div>
      )}
      
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = selectedId === option.id
          
          return (
            <div
              key={option.id}
              className={cn(
                "relative p-3 rounded-lg cursor-pointer transition-all duration-200",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
              style={{ 
                backgroundColor: isSelected 
                  ? 'var(--custom-accent)' 
                  : 'rgb(38, 38, 38)'
              }}
              onClick={() => !option.disabled && onSelect(option.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {option.icon && (
                    <div className="text-2xl flex-shrink-0">
                      {option.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
                        {option.title}
                      </h4>
                      {option.status && (
                        <span className={`text-xs ${getStatusColor(option.status)}`}>
                          {getStatusIcon(option.status)}
                        </span>
                      )}
                    </div>
                    {option.description && (
                      <p className="text-xs" style={{ color: 'var(--custom-muted-foreground)' }}>
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>
                
                {option.actions && (
                  <div className="flex items-center space-x-2">
                    {option.actions}
                  </div>
                )}
              </div>
              
              {isSelected && option.metadata && (
                <div className="mt-2 pt-2 border-t" style={{ borderColor: '#ffffff29' }}>
                  {option.metadata}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 