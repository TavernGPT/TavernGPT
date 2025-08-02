

import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ComponentDemo } from './pages/ComponentDemo'
import { PrimitiveDemo } from './pages/PrimitiveDemo'
import { LayoutDemo } from './pages/LayoutDemo'
import { OverlaysDemo } from './pages/OverlaysDemo'
import { ThemesDemo } from './pages/ThemesDemo'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <nav className="border-b border-border p-4">
          <div className="flex justify-center space-x-6">
            <NavLink 
              to="/components" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`
              }
            >
              Components
            </NavLink>
            <NavLink 
              to="/primitives" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`
              }
            >
              Primitives
            </NavLink>
            <NavLink 
              to="/layout" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`
              }
            >
              Layout
            </NavLink>
            <NavLink 
              to="/overlays" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`
              }
            >
              Overlays
            </NavLink>
            <NavLink 
              to="/themes" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`
              }
            >
              Themes
            </NavLink>
            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`
              }
            >
              About
            </NavLink>
          </div>
        </nav>

        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<ComponentDemo />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/components" element={<ComponentDemo />} />
            <Route path="/primitives" element={<PrimitiveDemo />} />
            <Route path="/layout" element={<LayoutDemo />} />
            <Route path="/overlays" element={<OverlaysDemo />} />
            <Route path="/themes" element={<ThemesDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 