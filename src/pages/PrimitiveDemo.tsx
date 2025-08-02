import React, { useState } from 'react'
import { Flex, Spacer, Text, Container, Interactive } from '../components/primitives'

export const PrimitiveDemo: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-8">

      {/* Flex Demo */}
      <Container variant="card" padding="lg">
        <Text variant="h3" weight="semibold">Flex - Layout Primitive</Text>
        <Spacer size="4" />
        
        <Text variant="label" color="muted">Row with space-between:</Text>
        <Flex direction="row" justify="between" align="center" className="p-4 border rounded" style={{ borderColor: 'var(--custom-border)' }}>
          <Text variant="body">Left Item</Text>
          <Text variant="body">Right Item</Text>
        </Flex>
        
        <Spacer size="4" />
        <Text variant="label" color="muted">Column with center alignment:</Text>
        <Flex direction="col" align="center" className="p-4 border rounded" style={{ borderColor: 'var(--custom-border)' }}>
          <Text variant="body">Top Item</Text>
          <Text variant="body">Middle Item</Text>
          <Text variant="body">Bottom Item</Text>
        </Flex>
      </Container>

      {/* Text Demo */}
      <Container variant="card" padding="lg">
        <Text variant="h3" weight="semibold">Text - Typography Primitive</Text>
        <Spacer size="4" />

        <Flex direction="col" gap="4" className="mb-8">
          <Text variant="h1">Heading 1 - Main Page Title</Text>
          <Text variant="h2">Heading 2 - Section Header</Text>
          <Text variant="h3">Heading 3 - Subsection Title</Text>
          <Text variant="h4">Heading 4 - Card Title</Text>
        </Flex>

        <Flex direction="col" gap="4" className="mb-8">
          <Text variant="body" size="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <Text variant="body" size="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Text variant="body" size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
          <Text variant="body" size="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </Text>
        </Flex>

        <Flex direction="col" gap="3" className="mb-8">
          <Text variant="body" weight="normal">Normal weight text</Text>
          <Text variant="body" weight="medium">Medium weight text</Text>
          <Text variant="body" weight="semibold">Semibold weight text</Text>
          <Text variant="body" weight="bold">Bold weight text</Text>
        </Flex>

        <Flex direction="col" gap="3" className="mb-8">
          <Text variant="body" color="default">Default text color</Text>
          <Text variant="body" color="muted">Muted text color</Text>
          <Text variant="body" color="accent">Accent text color</Text>
          <Text variant="body" color="success">Success text color</Text>
          <Text variant="body" color="destructive">Destructive text color</Text>
        </Flex>

        <Flex direction="col" gap="3" className="mb-8">
          <Text variant="label">Label text</Text>
          <Text variant="caption" color="muted">Caption text for additional information</Text>
          <Text variant="mono" color="accent">const code = "monospace text";</Text>
        </Flex>

        <Flex direction="col" gap="3" className="mb-8">
          <Text variant="body" align="left">Left aligned text</Text>
          <Text variant="body" align="center">Center aligned text</Text>
          <Text variant="body" align="right">Right aligned text</Text>
        </Flex>

        <Flex direction="col" gap="3" className="mb-8">
          <Text variant="body" size="lg" weight="semibold" color="accent">Large semibold accent text</Text>
          <Text variant="body" size="sm" weight="medium" color="muted">Small medium muted text</Text>
          <Text variant="body" size="base" weight="bold" color="success">Base bold success text</Text>
          <Text variant="body" size="lg" weight="normal" color="destructive">Large normal destructive text</Text>
        </Flex>

        <Flex direction="col" gap="3">
          <Text variant="body" color="accent" className="cursor-pointer hover:opacity-80">
            Interactive text with opacity hover effect
          </Text>
          <Text variant="body" className="cursor-pointer hover:text-accent transition-colors">
            Interactive text with color hover effect
          </Text>
          <Text variant="mono" color="accent" className="cursor-pointer hover:bg-accent/10 px-1 rounded">
            const interactive = true; // hover for background highlight
          </Text>
        </Flex>
      </Container>

      {/* Container Demo */}
      <Container variant="card" padding="lg">
        <Text variant="h3" weight="semibold">Container - Container Primitive</Text>
        <Spacer size="4" />
        
        <Flex direction="row" gap="4" wrap="wrap">
          <Container variant="default" padding="md" rounded="md">
            <Text variant="body">Default Container</Text>
          </Container>
          <Container variant="card" padding="md" rounded="md">
            <Text variant="body">Card Container</Text>
          </Container>
          <Container variant="bordered" padding="md" rounded="md">
            <Text variant="body">Bordered Container</Text>
          </Container>
        </Flex>
      </Container>

      {/* Interactive Demo */}
      <Container variant="card" padding="lg">
        <Text variant="h3" weight="semibold">Interactive - Interactive Primitive</Text>
        <Spacer size="4" />
        
        <Flex direction="row" gap="4" wrap="wrap">
          <Interactive variant="button" onClick={() => setCount(c => c + 1)}>
            Count: {count}
          </Interactive>
          <Interactive variant="outline" onClick={() => setCount(0)}>
            Reset
          </Interactive>
          <Interactive variant="ghost" onClick={() => alert('Ghost clicked!')}>
            Ghost
          </Interactive>
          <Interactive variant="link" onClick={() => alert('Link clicked!')}>
            Link Style
          </Interactive>
        </Flex>
      </Container>

      {/* Composition Demo */}
      <Container variant="card" padding="lg">
        <Text variant="h3" weight="semibold">Composition Example</Text>
        <Text variant="body" color="muted">A complex UI built from atomic primitives:</Text>
        <Spacer size="4" />
        
        <Container variant="card" padding="md">
          <Flex direction="row" justify="between" align="center">
            <Text variant="h4">Settings Panel</Text>
            <Interactive variant="ghost" size="sm">
              ×
            </Interactive>
          </Flex>
          <Spacer size="4" />
          <Flex direction="col" gap="3">
            <Flex direction="row" justify="between" align="center">
              <Text variant="label">Dark Mode</Text>
              <Interactive variant="outline" size="sm">
                Toggle
              </Interactive>
            </Flex>
            <Flex direction="row" justify="between" align="center">
              <Text variant="label">Notifications</Text>
              <Interactive variant="outline" size="sm">
                Toggle
              </Interactive>
            </Flex>
          </Flex>
          <Spacer size="4" />
          <Flex direction="row" gap="2" justify="end">
            <Interactive variant="ghost" size="sm">
              Cancel
            </Interactive>
            <Interactive variant="button" size="sm">
              Save
            </Interactive>
          </Flex>
        </Container>
      </Container>
    </div>
  )
} 