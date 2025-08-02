import React from 'react';
import { LeftNavPanel } from './LeftNavPanel';
import { RightNavPanel } from './RightNavPanel';
import { CentralArea } from './CentralArea';
import { usePanelStore } from '../../stores/panelStore';

export const MainLayout: React.FC = () => {
  const { isLeftPanelOpen, isRightPanelOpen } = usePanelStore();

  return (
    <div className="overflow-hidden border border-border" style={{ backgroundColor: 'var(--custom-background)', height: '800px' }}>
      {/* Flexbox Layout */}
      <div className="flex h-full w-full">
        {/* Left Navigation Panel - Always rendered, invisible when closed */}
        <aside 
          className="flex-shrink-0 z-40"
          style={{ 
            width: 'clamp(280px, 25vw, 400px)',
            minWidth: '280px',
            maxWidth: '400px',
            backgroundColor: isLeftPanelOpen ? 'transparent' : 'rgb(15, 15, 15)'
          }}
        >
          {isLeftPanelOpen && <LeftNavPanel />}
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Central Area */}
          <main className="flex-1 z-30">
            <CentralArea />
          </main>
        </div>

        {/* Right Navigation Panel - Always rendered, invisible when closed */}
        <aside 
          className="flex-shrink-0 z-40"
          style={{ 
            width: 'clamp(280px, 25vw, 400px)',
            minWidth: '280px',
            maxWidth: '400px',
            backgroundColor: isRightPanelOpen ? 'transparent' : 'rgb(15, 15, 15)'
          }}
        >
          {isRightPanelOpen && <RightNavPanel />}
        </aside>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="md:hidden">
        {/* Mobile drawer will be implemented here */}
      </div>
    </div>
  );
}; 