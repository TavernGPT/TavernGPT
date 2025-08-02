import React from 'react';
import { useIconBarStore } from '../../stores/iconBarStore';
import { usePanelStore } from '../../stores/panelStore';
import { useInterfaceStore } from '../../stores/interfaceStore';
import { Icon } from '../Icon';

// Placeholder components for the interfaces
const PlaceholderInterface: React.FC<{ title: string; onClose: () => void }> = ({ title, onClose }) => (
  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--custom-foreground)' }}>{title}</h2>
    <p className="text-lg mb-6" style={{ color: 'var(--custom-muted-foreground)' }}>
      This is a placeholder for the {title} interface.
    </p>
    <button 
      onClick={onClose}
      className="px-4 py-2 rounded-md transition-colors"
      style={{ 
        backgroundColor: 'var(--custom-accent)', 
        color: 'var(--custom-accent-foreground)' 
      }}
    >
      Back to Main
    </button>
  </div>
);

export const CentralArea: React.FC = () => {
  const { activeIcons, toggleIcon, setIconActive } = useIconBarStore();
  const { toggleLeftPanel, toggleRightPanel, isLeftPanelOpen, isRightPanelOpen } = usePanelStore();
  const { activeInterface, setActiveInterface } = useInterfaceStore();

  const handleIconClick = (iconName: string) => {
    toggleIcon(iconName);
    
    // Handle panel control icons (bookend items - sliders and address-card)
    if (iconName === 'sliders') {
      toggleLeftPanel();
    } else if (iconName === 'address-card') {
      toggleRightPanel();
    } 
    // Handle middle icons (2-8) - these switch between interfaces
    else if (iconName === 'plug') {
      setActiveInterface('api-connections');
    } else if (iconName === 'font') {
      setActiveInterface('ai-formatting');
    } else if (iconName === 'book-atlas') {
      setActiveInterface('world-info');
    } else if (iconName === 'user-gear') {
      setActiveInterface('user-settings');
    } else if (iconName === 'panorama') {
      setActiveInterface('background-image');
    } else if (iconName === 'cubes') {
      setActiveInterface('extensions');
    } else if (iconName === 'face-smile') {
      setActiveInterface('persona-management');
    }
    
    console.log(`${iconName} icon clicked`);
  };

  // Sync icon states with panel states
  React.useEffect(() => {
    setIconActive('sliders', isLeftPanelOpen);
    setIconActive('address-card', isRightPanelOpen);
  }, [isLeftPanelOpen, isRightPanelOpen, setIconActive]);

  // Sync icon states with active interface
  React.useEffect(() => {
    // Reset all middle icons
    setIconActive('plug', activeInterface === 'api-connections');
    setIconActive('font', activeInterface === 'ai-formatting');
    setIconActive('book-atlas', activeInterface === 'world-info');
    setIconActive('user-gear', activeInterface === 'user-settings');
    setIconActive('panorama', activeInterface === 'background-image');
    setIconActive('cubes', activeInterface === 'extensions');
    setIconActive('face-smile', activeInterface === 'persona-management');
  }, [activeInterface, setIconActive]);

  // Auto-reset to main when no middle icons are active
  React.useEffect(() => {
    const middleIcons = ['plug', 'font', 'book-atlas', 'user-gear', 'panorama', 'cubes', 'face-smile'];
    const hasActiveMiddleIcon = middleIcons.some(icon => activeIcons[icon]);
    
    if (!hasActiveMiddleIcon && activeInterface !== 'main') {
      setActiveInterface('main');
    }
  }, [activeIcons, activeInterface, setActiveInterface]);

  return (
    <main 
      className="h-full flex flex-col" 
      style={{ backgroundColor: 'var(--custom-background)' }}
    >
      {/* Top Navigation Bar - inspired by landing page */}
      <div 
        className="flex-shrink-0 flex items-center h-12 py-2 px-8 shadow-sm"
      >
        {/* Menu Container with max-width */}
        <div className="flex justify-center w-full">
          <div 
            className="flex justify-between items-center" 
            style={{ 
              maxWidth: '535px', 
              width: '100%'
            }}
          >
            {/* 1. AI Response Configuration (was Advanced Settings) */}
          <button 
            className={`transition-all duration-200 ${activeIcons.sliders ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons.sliders ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="AI Response Configuration"
            onClick={() => handleIconClick('sliders')}
          >
            <Icon name="sliders" size={30} />
          </button>
          
          {/* 2. API Connections (NEW - plug icon) */}
          <button 
            className={`transition-all duration-200 ${activeIcons.plug ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons.plug ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="API Connections"
            onClick={() => handleIconClick('plug')}
          >
            <Icon name="plug" size={30} />
          </button>
          
          {/* 3. AI Response Formatting (NEW - font icon) */}
          <button 
            className={`transition-all duration-200 ${activeIcons.font ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons.font ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="AI Response Formatting"
            onClick={() => handleIconClick('font')}
          >
            <Icon name="font" size={30} />
          </button>
          
          {/* 4. World Info (was Character Management) */}
          <button 
            className={`transition-all duration-200 ${activeIcons['book-atlas'] ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons['book-atlas'] ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="World Info"
            onClick={() => handleIconClick('book-atlas')}
          >
            <Icon name="book-atlas" size={30} />
          </button>
          
          {/* 5. User Settings (NEW - user-gear icon) */}
          <button 
            className={`transition-all duration-200 ${activeIcons['user-gear'] ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons['user-gear'] ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="User Settings"
            onClick={() => handleIconClick('user-gear')}
          >
            <Icon name="user-gear" size={30} />
          </button>
          
          {/* 6. Change Background Image (was World Info) */}
          <button 
            className={`transition-all duration-200 ${activeIcons.panorama ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons.panorama ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="Change Background Image"
            onClick={() => handleIconClick('panorama')}
          >
            <Icon name="panorama" size={30} />
          </button>
          
          {/* 7. Extensions (NO CHANGE) */}
          <button 
            className={`transition-all duration-200 ${activeIcons.cubes ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons.cubes ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="Extensions"
            onClick={() => handleIconClick('cubes')}
          >
            <Icon name="cubes" size={30} />
          </button>
          
          {/* 8. Persona Management (was Character Emotions) */}
          <button 
            className={`transition-all duration-200 ${activeIcons['face-smile'] ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons['face-smile'] ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="Persona Management"
            onClick={() => handleIconClick('face-smile')}
          >
            <Icon name="face-smile" size={30} />
          </button>
          
          {/* 9. Character Management (was User Settings) */}
          <button 
            className={`transition-all duration-200 ${activeIcons['address-card'] ? 'opacity-100 scale-110' : 'opacity-30 hover:opacity-100 hover:scale-105'}`}
            style={{ 
              color: activeIcons['address-card'] ? 'var(--custom-accent)' : 'var(--custom-muted-foreground)'
            }}
            title="Character Management"
            onClick={() => handleIconClick('address-card')}
          >
            <Icon name="address-card" size={30} />
          </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Interface Switching with Placeholders */}
      <div className="flex-1 overflow-hidden">
        {activeInterface === 'main' && (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--custom-foreground)' }}>
              Main Interface
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--custom-muted-foreground)' }}>
              This is the main interface area. Use the icons above to navigate to different sections.
            </p>
          </div>
        )}
        {activeInterface === 'api-connections' && <PlaceholderInterface title="API Connections" onClose={() => setActiveInterface('main')} />}
        {activeInterface === 'ai-formatting' && <PlaceholderInterface title="AI Response Formatting" onClose={() => setActiveInterface('main')} />}
        {activeInterface === 'world-info' && <PlaceholderInterface title="World Info" onClose={() => setActiveInterface('main')} />}
        {activeInterface === 'user-settings' && <PlaceholderInterface title="User Settings" onClose={() => setActiveInterface('main')} />}
        {activeInterface === 'background-image' && <PlaceholderInterface title="Background Image" onClose={() => setActiveInterface('main')} />}
        {activeInterface === 'extensions' && <PlaceholderInterface title="Extensions" onClose={() => setActiveInterface('main')} />}
        {activeInterface === 'persona-management' && <PlaceholderInterface title="Persona Management" onClose={() => setActiveInterface('main')} />}
      </div>
    </main>
  );
}; 