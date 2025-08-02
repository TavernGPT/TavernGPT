import * as React from "react"
import { cn } from "@/utils/cn"

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  helperText?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, onChange, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked)
    }
    
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              "w-4 h-4 rounded border focus:ring-2 focus:ring-offset-0 transition-colors",
              error && "border-red-500 focus:ring-red-500",
              !error && "focus:ring-accent",
              className
            )}
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: error ? 'rgb(239, 68, 68)' : 'var(--custom-border)',
              color: 'var(--custom-accent)'
            }}
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          {label && (
            <label 
              htmlFor={checkboxId} 
              className="text-sm font-medium cursor-pointer"
              style={{ color: 'var(--custom-card-foreground)' }}
            >
              {label}
            </label>
          )}
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
)

Checkbox.displayName = "Checkbox" 