import * as React from "react"
import { cn } from "@/utils/cn"

interface SliderProps {
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
  label?: string
  tooltip?: string
  className?: string
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 0.1,
  value,
  onChange,
  label,
  tooltip,
  className,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        {label && (
          <label className="text-sm font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
            {label}
          </label>
        )}
        <span className="text-xs font-mono" style={{ color: 'var(--custom-muted-foreground)' }}>
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, var(--custom-accent) 0%, var(--custom-accent) ${((value - min) / (max - min)) * 100}%, #ffffff ${((value - min) / (max - min)) * 100}%, #ffffff 100%)`,
          border: '1px solid var(--custom-border)'
        }}
        title={tooltip}
      />
      <div className="flex justify-between text-xs" style={{ color: 'var(--custom-muted-foreground)' }}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
} 