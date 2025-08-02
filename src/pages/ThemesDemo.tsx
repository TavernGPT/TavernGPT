import React from 'react'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { Spacer } from '@/components/primitives/Spacer'

export const ThemesDemo: React.FC = () => {
  return (
    <Container variant="default" padding="lg">
      <Text variant="h2" weight="semibold">Themes</Text>
      <Spacer size="4" />
      <Text variant="body" color="muted">
        Theme configuration and customization will be implemented here.
      </Text>
    </Container>
  )
} 