import React, { useState } from 'react'
import { Message } from './Message'
import { PromptInput } from './PromptInput'
import { Card } from '../ui/card'

interface MessageType {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  metadata?: {
    tokens?: number
    model?: string
  }
  isBookmarked?: boolean
  isHidden?: boolean
  attachments?: Array<{
    id: string
    name: string
    size: number
  }>
}

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      role: 'user',
      content: 'Hello! Can you help me with a coding problem?',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    },
    {
      id: '2',
      role: 'assistant',
      content: `Of course! I'd be happy to help you with your coding problem. What specific issue are you facing?

## Here's what I can help with:

- **Code debugging** - I can help identify and fix issues
- **Best practices** - I can suggest improvements and patterns
- **Architecture** - I can help with design decisions
- **Documentation** - I can explain concepts and provide examples

### Example Code Block:
\`\`\`javascript
function debugIssue(error) {
  console.log('Error details:', error);
  return 'Issue resolved!';
}
\`\`\`

> **Pro tip:** Please share the details of what you're working on, any error messages you're seeing, and what you've tried so far. This will help me provide the most relevant assistance.`,
      timestamp: new Date(Date.now() - 240000), // 4 minutes ago
      metadata: {
        tokens: 150,
        model: 'gpt-4'
      }
    },
    {
      id: '3',
      role: 'user',
      content: 'I\'m trying to build a React component library and I need help with the styling. I want to create reusable components that follow a consistent design system.',
      timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    },
    {
      id: '4',
      role: 'assistant',
      content: `Great project! Building a React component library with a consistent design system is an excellent approach.

## Key Principles to Consider:

1. **Design Tokens** - Use CSS custom properties for colors, spacing, typography
2. **Component Composition** - Build complex components from simpler, reusable ones
3. **Consistent API** - Maintain similar prop patterns across components
4. **Accessibility** - Ensure all components meet WCAG guidelines
5. **Documentation** - Provide clear examples and usage guidelines

### Example Component Structure:
\`\`\`typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children 
}) => {
  // Component implementation
}
\`\`\`

Would you like me to help you set up the foundation for your component library?`,
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      metadata: {
        tokens: 200,
        model: 'gpt-4'
      },
      isBookmarked: true
    },
    {
      id: '5',
      role: 'user',
      content: 'Yes, that would be great! I\'ve attached a file with my current setup.',
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
    }
  ])

  const handleEdit = (id: string, content: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, content } : msg
      )
    )
  }

  const handleDelete = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id))
  }

  const handleSendMessage = (content: string) => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, newMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: MessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I received your message: "${content}". This is a simulated response from the AI assistant.`,
        timestamp: new Date(),
        metadata: {
          tokens: Math.floor(Math.random() * 100) + 50,
          model: 'gpt-4'
        }
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <Card title="Chat Message System">
      <div className="flex flex-col">
        {/* Messages Container */}
        <div 
          className="p-4 space-y-2 rounded-lg border"
          style={{ 
            backgroundColor: 'rgb(26, 26, 26)',
            borderColor: 'var(--custom-border)'
          }}
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Prompt Input */}
        <div className="flex-shrink-0 p-4 border-t" style={{ borderColor: 'var(--custom-border)' }}>
          <PromptInput
            onSend={handleSendMessage}
            placeholder="Type your message... (try '/help' for commands)"
            disabled={false}
            isLoading={false}
          />
        </div>
      </div>
    </Card>
  )
} 