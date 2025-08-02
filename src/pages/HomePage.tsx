import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg" style={{ 
          backgroundColor: 'var(--custom-card)', 
          borderColor: 'var(--custom-border)' 
        }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--custom-card-foreground)' }}>
            Atomic Primitives
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--custom-muted-foreground)' }}>
            Flex, Text, Container, Interactive, and Spacer - the 5 core building blocks
          </p>
          <Link 
            to="/primitives" 
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Primitives
          </Link>
        </div>

        <div className="p-6 border rounded-lg" style={{ 
          backgroundColor: 'var(--custom-card)', 
          borderColor: 'var(--custom-border)' 
        }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--custom-card-foreground)' }}>
            Traditional Components
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--custom-muted-foreground)' }}>
            Buttons, sliders, toggles, cards, and other reusable components
          </p>
          <Link 
            to="/" 
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Components
          </Link>
        </div>

        <div className="p-6 border rounded-lg" style={{ 
          backgroundColor: 'var(--custom-card)', 
          borderColor: 'var(--custom-border)' 
        }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--custom-card-foreground)' }}>
            Data-Driven Architecture
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--custom-muted-foreground)' }}>
            All components accept JSON configuration for dynamic, scalable interfaces
          </p>
          <Link 
            to="/primitives" 
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Primitives
          </Link>
        </div>
      </div>

      <div className="p-6 border rounded-lg" style={{ 
        backgroundColor: 'var(--custom-card)', 
        borderColor: 'var(--custom-border)' 
      }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--custom-card-foreground)' }}>
          About This Library
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--custom-muted-foreground)' }}>
          This component library is designed to provide reusable, atomic components that can be composed 
          to build complex interfaces. Each component is designed to accept JSON configuration, making 
          it easy to customize and reuse across different contexts. The styling is inspired by the 
          SillyTavern UI prototype, using a dark theme with purple accents.
        </p>
      </div>
    </div>
  )
} 