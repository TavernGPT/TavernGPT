import React from 'react'
import { Form, FormConfig } from './Form'
import { Card } from '../ui/card'
import { Code } from '../ui/code'

export const FormDemo: React.FC = () => {
  // Example form configurations
  const userProfileConfig: FormConfig = {
    id: 'user-profile',
    title: 'User Profile Form',
    layout: 'two-column',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email',
        helperText: 'We\'ll never share your email with anyone else',
        required: true
      },
      {
        id: 'role',
        type: 'select',
        label: 'Role',
        required: true,
        options: [
          { value: '', label: 'Select a role' },
          { value: 'developer', label: 'Software Developer' },
          { value: 'designer', label: 'UI/UX Designer' },
          { value: 'manager', label: 'Product Manager' },
          { value: 'analyst', label: 'Data Analyst' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        id: 'experience',
        type: 'radio',
        label: 'Experience Level',
        options: [
          { value: 'beginner', label: 'Beginner (0-2 years)' },
          { value: 'intermediate', label: 'Intermediate (3-5 years)' },
          { value: 'advanced', label: 'Advanced (6+ years)' }
        ]
      },
      {
        id: 'bio',
        type: 'textarea',
        label: 'Bio',
        placeholder: 'Tell us about yourself...',
        helperText: 'Optional: A brief description about yourself',
        rows: 4
      },
      {
        id: 'notifications',
        type: 'checkbox',
        label: 'Enable email notifications',
        helperText: 'Receive updates about new features'
      },
      {
        id: 'streaming',
        type: 'toggle',
        label: 'Enable streaming responses',
        tooltip: 'Show AI responses as they generate'
      },
      {
        id: 'temperature',
        type: 'slider',
        label: 'Temperature',
        min: 0,
        max: 2,
        step: 0.1,
        helperText: 'Controls randomness in AI responses'
      }
    ],
    actions: [
      { id: 'submit', label: 'Save Profile', type: 'submit' },
      { id: 'reset', label: 'Reset', type: 'reset', variant: 'outline' }
    ],
    onSubmit: (data) => {
      console.log('Form submitted:', data)
      alert('Form submitted successfully!')
    }
  }

  const settingsConfig: FormConfig = {
    id: 'settings',
    title: 'Application Settings',
    layout: 'grid',
    fields: [
      {
        id: 'theme',
        type: 'select',
        label: 'Theme',
        helperText: 'Choose your preferred interface theme',
        options: [
          { value: 'light', label: 'Light Theme' },
          { value: 'dark', label: 'Dark Theme' },
          { value: 'auto', label: 'Auto (System)' }
        ]
      },
      {
        id: 'apiKey',
        type: 'password',
        label: 'API Key',
        placeholder: 'Enter your API key',
        helperText: 'Your API key is encrypted and stored securely'
      },
      {
        id: 'notifications',
        type: 'checkbox',
        label: 'Enable notifications'
      },
      {
        id: 'autoSave',
        type: 'toggle',
        label: 'Auto-save drafts'
      },
      {
        id: 'timeout',
        type: 'slider',
        label: 'Request Timeout',
        min: 5,
        max: 60,
        step: 5,
        helperText: 'Timeout in seconds for API requests'
      }
    ],
    actions: [
      { id: 'save', label: 'Save Settings', type: 'submit' },
      { id: 'export', label: 'Export Config', type: 'button', variant: 'outline' }
    ],
    onSubmit: (data) => {
      console.log('Settings saved:', data)
      alert('Settings saved!')
    }
  }

  const validationConfig: FormConfig = {
    id: 'validation-demo',
    title: 'Form Validation Demo',
    fields: [
             {
         id: 'validInput',
         type: 'text',
         label: 'Valid Input',
         placeholder: 'This input is valid',
         helperText: 'This is a helper text'
       },
      {
        id: 'errorInput',
        type: 'text',
        label: 'Error Input',
        placeholder: 'This input has an error',
        required: true
      },
      {
        id: 'disabledInput',
        type: 'text',
        label: 'Disabled Input',
        placeholder: 'This input is disabled',
        disabled: true,
        helperText: 'This input cannot be modified'
      },
      {
        id: 'selectWithError',
        type: 'select',
        label: 'Select with Error',
        required: true,
        options: [
          { value: '', label: 'Please select an option' },
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ]
      }
    ],
    actions: [
      { id: 'submit', label: 'Submit', type: 'submit' }
    ],
    onSubmit: (data) => {
      console.log('Validation demo submitted:', data)
    }
  }

  return (
    <div className="space-y-8">
      {/* User Profile Form */}
      <Form 
        config={userProfileConfig}
        initialData={{
          experience: 'intermediate',
          notifications: true,
          streaming: false,
          temperature: 0.7
        }}
      />

      {/* Settings Form */}
      <Form 
        config={settingsConfig}
        initialData={{
          theme: 'dark',
          notifications: true,
          autoSave: true,
          timeout: 30
        }}
      />

      {/* Validation Demo */}
      <Form 
        config={validationConfig}
        initialData={{
          validInput: 'Valid value'
        }}
      />

      {/* JSON Configuration Example */}
      <Card title="JSON Configuration Example">
        <div className="space-y-4">
          <p className="text-sm" style={{ color: 'var(--custom-muted-foreground)' }}>
            Forms are configured using JSON data for easy customization:
          </p>
          <Code variant="block" language="json">
{`{
  "id": "user-profile",
  "title": "User Profile Form",
  "layout": "two-column",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "placeholder": "Enter your full name",
      "required": true
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "placeholder": "Enter your email",
      "helperText": "We'll never share your email",
      "required": true
    },
    {
      "id": "role",
      "type": "select",
      "label": "Role",
      "required": true,
      "options": [
        { "value": "", "label": "Select a role" },
        { "value": "developer", "label": "Software Developer" },
        { "value": "designer", "label": "UI/UX Designer" }
      ]
    },
    {
      "id": "notifications",
      "type": "checkbox",
      "label": "Enable notifications",
      "helperText": "Receive updates"
    },
    {
      "id": "temperature",
      "type": "slider",
      "label": "Temperature",
      "min": 0,
      "max": 2,
      "step": 0.1,
      "helperText": "Controls randomness"
    }
  ],
  "actions": [
    { "id": "submit", "label": "Save Profile", "type": "submit" },
    { "id": "reset", "label": "Reset", "type": "reset", "variant": "outline" }
  ]
}`}
          </Code>
        </div>
      </Card>
    </div>
  )
} 