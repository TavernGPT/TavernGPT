import * as React from "react"
import { cn } from "@/utils/cn"

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  onChange?: (value: string) => void
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, onChange, id, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
    }
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={selectId} 
            className="text-sm font-medium block"
            style={{ color: 'var(--custom-card-foreground)' }}
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-colors",
            error && "border-red-500 focus:ring-red-500",
            !error && "focus:ring-accent",
            className
          )}
          style={{
            backgroundColor: 'var(--custom-card)',
            borderColor: error ? 'rgb(239, 68, 68)' : 'var(--custom-border)',
            color: 'var(--custom-foreground)'
          }}
          onChange={handleChange}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select" 