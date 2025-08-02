import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { RadioGroup } from '../ui/radio-group'
import { Slider } from '../ui/slider'
import { Toggle } from '../ui/toggle'

export interface FormFieldConfig {
  id: string
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'slider' | 'toggle'
  label?: string
  placeholder?: string
  helperText?: string
  required?: boolean
  disabled?: boolean
  options?: Array<{ value: string; label: string; disabled?: boolean }>
  min?: number
  max?: number
  step?: number
  rows?: number
  tooltip?: string
}

interface FormFieldProps {
  config: FormFieldConfig
  value: any
  onChange: (value: any) => void
  error?: string
}

export const FormField: React.FC<FormFieldProps> = ({
  config,
  value,
  onChange,
  error
}) => {
  const commonProps = {
    label: config.label,
    error: error,
    helperText: config.helperText,
    disabled: config.disabled
  }

  switch (config.type) {
    case 'text':
    case 'email':
    case 'password':
    case 'number':
      return (
        <Input
          {...commonProps}
          type={config.type}
          placeholder={config.placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          required={config.required}
        />
      )

    case 'textarea':
      return (
        <Textarea
          {...commonProps}
          placeholder={config.placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          rows={config.rows || 4}
          required={config.required}
        />
      )

    case 'select':
      return (
        <Select
          {...commonProps}
          options={config.options || []}
          value={value || ''}
          onChange={onChange}
        />
      )

    case 'checkbox':
      return (
        <Checkbox
          {...commonProps}
          checked={value || false}
          onChange={onChange}
        />
      )

    case 'radio':
      return (
        <RadioGroup
          {...commonProps}
          options={config.options || []}
          value={value || ''}
          onChange={onChange}
        />
      )

    case 'slider':
      return (
        <div className="space-y-2">
          {config.label && (
            <label className="text-sm font-medium block" style={{ color: 'var(--custom-card-foreground)' }}>
              {config.label}: {value}
            </label>
          )}
          <Slider
            value={value || config.min || 0}
            onChange={onChange}
            min={config.min || 0}
            max={config.max || 100}
            step={config.step || 1}
            tooltip={config.tooltip}
          />
          {config.helperText && (
            <p className="text-xs" style={{ color: 'var(--custom-muted-foreground)' }}>
              {config.helperText}
            </p>
          )}
        </div>
      )

    case 'toggle':
      return (
        <div className="flex items-center justify-between">
          {config.label && (
            <label className="text-sm font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
              {config.label}
            </label>
          )}
          <Toggle
            checked={value || false}
            onChange={onChange}
            tooltip={config.tooltip}
          />
          {config.helperText && (
            <p className="text-xs ml-2" style={{ color: 'var(--custom-muted-foreground)' }}>
              {config.helperText}
            </p>
          )}
        </div>
      )

    default:
      return null
  }
} 