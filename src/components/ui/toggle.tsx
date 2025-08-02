import * as React from "react"
import { cn } from "@/utils/cn"

interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  tooltip?: string
  className?: string
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  tooltip,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
          {label}
        </label>
      )}
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? '' : 'bg-gray-600'
        }`}
        style={{
          backgroundColor: checked ? 'var(--custom-accent)' : undefined
        }}
        title={tooltip}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
} 