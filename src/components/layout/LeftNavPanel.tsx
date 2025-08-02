import React from 'react';

export const LeftNavPanel: React.FC = () => {
  return (
    <aside 
      className="h-full w-full"
      style={{ 
        backgroundColor: 'var(--custom-card)'
      }}
    >
      <div className="flex h-full flex-col">
        {/* Panel Header */}
        <div 
          className="flex h-12 items-center justify-between px-4"
        >
          <h2 className="text-sm font-semibold" style={{ color: 'var(--custom-card-foreground)' }}>
            Left Panel
          </h2>
        </div>

        {/* Panel Content */}
        <div className="flex-1 overflow-y-auto flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Left Panel</h2>
            <p className="text-muted-foreground">This panel is currently empty.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}; 