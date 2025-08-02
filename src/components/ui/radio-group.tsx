import * as React from "react"
import { cn } from "@/utils/cn"

interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

interface RadioGroupProps {
  label?: string
  error?: string
  helperText?: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  name?: string
  className?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  error,
  helperText,
  options,
  value,
  onChange,
  name,
  className,
}) => {
  const groupName = name || `radio-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium block" style={{ color: 'var(--custom-card-foreground)' }}>
          {label}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`${groupName}-${option.value}`}
              name={groupName}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={option.disabled}
              className={cn(
                "w-4 h-4 border focus:ring-2 focus:ring-offset-0 transition-colors",
                error && "border-red-500 focus:ring-red-500",
                !error && "focus:ring-accent",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
              style={{
                borderColor: error ? 'rgb(239, 68, 68)' : 'var(--custom-border)',
                color: 'var(--custom-accent)'
              }}
            />
            <label 
              htmlFor={`${groupName}-${option.value}`}
              className={cn(
                "text-sm cursor-pointer",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
              style={{ color: 'var(--custom-card-foreground)' }}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
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