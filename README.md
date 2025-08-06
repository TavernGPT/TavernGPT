# TavernGPT Dashboard

A modern React TypeScript dashboard for managing TavernGPT accounts, karma credits, and API usage.

## Features

- **Authentication Flow**: OAuth provider selection (Google, GitHub, Discord, Email)
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dashboard Layout**: Modern sidebar navigation with header
- **State Management**: Zustand for global state management
- **Routing**: React Router for navigation between pages
- **Mock Authentication**: Simulated authentication flow for development

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Zustand for state management
- React Router for navigation
- Create React App for build tooling

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── LoginPage.tsx          # Authentication page
│   ├── dashboard/
│   │   ├── DashboardHome.tsx      # Main dashboard content
│   │   └── DashboardLayout.tsx    # Dashboard layout wrapper
│   └── layout/
│       ├── Header.tsx             # Top navigation header
│       └── Sidebar.tsx            # Side navigation
├── stores/
│   └── authStore.ts               # Authentication state management
├── App.tsx                        # Main app component with routing
├── index.tsx                      # App entry point
└── index.css                      # Global styles with Tailwind
```

## User Flow

1. **Landing Page**: Users see authentication options (Google, GitHub, Discord, Email)
2. **Authentication**: Mock authentication with loading states and error handling
3. **Dashboard**: Protected route with sidebar navigation and user info
4. **Logout**: Users can sign out and return to landing page

## Development Notes

- Uses mock authentication responses during development
- Responsive design for mobile and desktop
- Clean, modern UI following TavernGPT branding
- TypeScript for type safety
- Tailwind CSS for consistent styling

## Future Enhancements

- Real Privy OAuth integration
- Karma credit management interface
- API key generation and management
- Usage analytics and reporting
- Payment processing integration
- 0G network integration

## Contributing

This is part of the TavernGPT platform development. See the main project documentation for contribution guidelines.
