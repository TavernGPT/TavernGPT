import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { FormField, FormFieldConfig } from './FormField'

export interface FormConfig {
  id: string
  title?: string
  fields: FormFieldConfig[]
  actions?: Array<{
    id: string
    label: string
    type: 'submit' | 'button' | 'reset'
    variant?: 'default' | 'outline' | 'destructive'
  }>
  layout?: 'single' | 'two-column' | 'grid'
  onSubmit?: (data: Record<string, any>) => void
  onReset?: () => void
}

interface FormProps {
  config: FormConfig
  initialData?: Record<string, any>
  className?: string
}

export const Form: React.FC<FormProps> = ({
  config,
  initialData = {},
  className
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[fieldId]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    const newErrors: Record<string, string> = {}
    config.fields.forEach(field => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label || field.id} is required`
      }
    })
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      config.onSubmit?.(formData)
    }
  }

  const handleReset = () => {
    setFormData(initialData)
    setErrors({})
    config.onReset?.()
  }

  const getLayoutClass = () => {
    switch (config.layout) {
      case 'two-column':
        return 'grid md:grid-cols-2 gap-6'
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      default:
        return 'space-y-6'
    }
  }

  return (
    <Card title={config.title} className={className}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className={getLayoutClass()}>
          {config.fields.map((field) => (
            <FormField
              key={field.id}
              config={field}
              value={formData[field.id]}
              onChange={(value) => handleFieldChange(field.id, value)}
              error={errors[field.id]}
            />
          ))}
        </div>

        {config.actions && config.actions.length > 0 && (
          <div className="flex gap-3">
            {config.actions.map((action) => {
              if (action.type === 'submit') {
                return (
                  <Button key={action.id} type="submit" variant={action.variant || 'default'}>
                    {action.label}
                  </Button>
                )
              } else if (action.type === 'reset') {
                return (
                  <Button key={action.id} type="button" variant={action.variant || 'outline'} onClick={handleReset}>
                    {action.label}
                  </Button>
                )
              } else {
                return (
                  <Button key={action.id} type="button" variant={action.variant || 'default'}>
                    {action.label}
                  </Button>
                )
              }
            })}
          </div>
        )}
      </form>
    </Card>
  )
} 