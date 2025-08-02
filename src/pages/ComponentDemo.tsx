import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Slider } from '../components/ui/slider'
import { Toggle } from '../components/ui/toggle'
import { Card } from '../components/ui/card'
import { Code } from '../components/ui/code'
import { SwitchCard } from '../components/ui/switch-card'
import { ChatDemo } from '../components/chat/ChatDemo'
import { FormDemo } from '../components/forms/FormDemo'
import { ActionButton } from '../components/ui/action-button'
import { NotificationButton } from '../components/ui/notification-button'
import { Trash2, Settings, HelpCircle, Download, Upload, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'

export const ComponentDemo: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0.7)
  const [toggleValue, setToggleValue] = useState(false)
  const [selectedAIProvider, setSelectedAIProvider] = useState('openai')
  const [selectedCharacter, setSelectedCharacter] = useState('char1')

  const handleResetAll = () => {
    setSliderValue(0.7)
    setToggleValue(false)
  }

  return (
    <div className="space-y-8">

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Controls Section */}
        <Card title="Form Controls" actions={
          <Button variant="outline" size="sm" onClick={handleResetAll}>Reset All</Button>
        }>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
                Slider Component
              </h4>
              <Slider
                min={0}
                max={2}
                step={0.1}
                value={sliderValue}
                onChange={setSliderValue}
                label="Temperature"
                tooltip="Controls randomness in responses. Lower values make responses more focused, higher values more creative."
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
                Toggle Component
              </h4>
              <Toggle
                checked={toggleValue}
                onChange={setToggleValue}
                label="Enable Streaming"
                tooltip="Show responses as they generate"
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
                Button Variants
              </h4>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
                Button Sizes
              </h4>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🔧</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Layout Components Section */}
        <Card title="Layout Components">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
                Card Component
              </h4>
              <Card title="Example Card" actions={
                <Button variant="outline" size="sm">Action</Button>
              }>
                <p className="text-sm" style={{ color: 'var(--custom-muted-foreground)' }}>
                  This is an example card component with a title, actions, and content.
                </p>
              </Card>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
                Section Layout
              </h4>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg" style={{ 
                  backgroundColor: 'var(--custom-card)', 
                  borderColor: 'var(--custom-border)' 
                }}>
                  <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--custom-card-foreground)' }}>
                    Section 1
                  </h5>
                  <p className="text-xs" style={{ color: 'var(--custom-muted-foreground)' }}>
                    Content for section 1
                  </p>
                </div>
                <div className="p-4 border rounded-lg" style={{ 
                  backgroundColor: 'var(--custom-card)', 
                  borderColor: 'var(--custom-border)' 
                }}>
                  <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--custom-card-foreground)' }}>
                    Section 2
                  </h5>
                  <p className="text-xs" style={{ color: 'var(--custom-muted-foreground)' }}>
                    Content for section 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Switch Card Components Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card title="AI Provider Selection">
          <SwitchCard
            title="AI Provider"
            options={[
              {
                id: 'openai',
                title: 'OpenAI',
                description: 'GPT-4, GPT-3.5 Turbo, and other OpenAI models',
                icon: '🤖',
                status: 'connected',
                actions: (
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    Test
                  </Button>
                ),
                metadata: (
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--custom-muted-foreground)' }}>
                      5 models available
                    </span>
                    <span className="text-green-500">
                      ✓ Selected
                    </span>
                  </div>
                )
              },
              {
                id: 'anthropic',
                title: 'Anthropic',
                description: 'Claude-3, Claude-2, and other Anthropic models',
                icon: '🧠',
                status: 'connecting',
                actions: (
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    Test
                  </Button>
                )
              },
              {
                id: 'google',
                title: 'Google AI',
                description: 'Gemini Pro, Gemini Flash, and other Google models',
                icon: '🔍',
                status: 'error',
                actions: (
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    Test
                  </Button>
                )
              },
              {
                id: 'local',
                title: 'Local Models',
                description: 'Run models locally with Ollama, LM Studio, etc.',
                icon: '🏠',
                status: 'default',
                actions: (
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    Setup
                  </Button>
                )
              }
            ]}
            selectedId={selectedAIProvider}
            onSelect={setSelectedAIProvider}
          />
        </Card>

        <Card title="Character Selection">
          <SwitchCard
            title="Characters"
            options={[
              {
                id: 'char1',
                title: 'Alice',
                description: 'A curious AI assistant who loves to explore and learn',
                icon: '👩‍💻',
                metadata: (
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--custom-muted-foreground)' }}>
                      Last active: 2 hours ago
                    </span>
                    <span className="text-green-500">
                      ✓ Selected
                    </span>
                  </div>
                )
              },
              {
                id: 'char2',
                title: 'Bob',
                description: 'A friendly coding mentor with years of experience',
                icon: '👨‍🏫',
                metadata: (
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--custom-muted-foreground)' }}>
                      Last active: 1 day ago
                    </span>
                  </div>
                )
              },
              {
                id: 'char3',
                title: 'Charlie',
                description: 'A creative writer who helps with storytelling',
                icon: '✍️',
                metadata: (
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--custom-muted-foreground)' }}>
                      Last active: 3 days ago
                    </span>
                  </div>
                )
              },
              {
                id: 'char4',
                title: 'Diana',
                description: 'A data scientist who loves analyzing patterns',
                icon: '📊',
                disabled: true,
                metadata: (
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--custom-muted-foreground)' }}>
                      Coming soon
                    </span>
                  </div>
                )
              }
            ]}
            selectedId={selectedCharacter}
            onSelect={setSelectedCharacter}
          />
        </Card>
      </div>

      {/* Form Components Section */}
      <div className="grid md:grid-cols-1 gap-8">
        <FormDemo />
      </div>

      {/* Chat Components Section */}
      <div className="grid md:grid-cols-1 gap-8">
        <ChatDemo />
      </div>

      {/* Button Components Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card title="Action Buttons">
          <div className="space-y-4">
            <p className="text-sm" style={{ color: 'var(--custom-muted-foreground)' }}>
              Reusable action buttons with icons and consistent hover styling.
            </p>
            <div className="space-y-3">
              <ActionButton icon={<Trash2 className="w-4 h-4" />}>
                Delete Item
              </ActionButton>
              <ActionButton icon={<Settings className="w-4 h-4" />}>
                Settings
              </ActionButton>
              <ActionButton icon={<HelpCircle className="w-4 h-4" />}>
                Help & Documentation
              </ActionButton>
              <ActionButton icon={<Download className="w-4 h-4" />}>
                Export Data
              </ActionButton>
              <ActionButton icon={<Upload className="w-4 h-4" />}>
                Import Data
              </ActionButton>
            </div>
          </div>
        </Card>

        <Card title="Notification Buttons">
          <div className="space-y-4">
            <p className="text-sm" style={{ color: 'var(--custom-muted-foreground)' }}>
              Colored notification buttons for different message types.
            </p>
            <div className="space-y-3">
              <NotificationButton type="success" icon={<CheckCircle className="w-4 h-4" />}>
                Success Message
              </NotificationButton>
              <NotificationButton type="error" icon={<XCircle className="w-4 h-4" />}>
                Error Message
              </NotificationButton>
              <NotificationButton type="warning" icon={<AlertTriangle className="w-4 h-4" />}>
                Warning Message
              </NotificationButton>
              <NotificationButton type="info" icon={<Info className="w-4 h-4" />}>
                Info Message
              </NotificationButton>
            </div>
          </div>
        </Card>
      </div>

    </div>
  )
} 