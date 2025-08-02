import React from 'react'

export const TestPage: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#f0f0f0',
      padding: '2rem',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Test Page</h1>
      <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>If you can see this, routing is working.</p>
      <p style={{ fontSize: '1rem' }}>Background should be dark (#1a1a1a), text should be light (#f0f0f0).</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#202020', border: '1px solid #373737', borderRadius: '0.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Card Test</h2>
        <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>This should look like a card with dark styling.</p>
      </div>
    </div>
  )
} 