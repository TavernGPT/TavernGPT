import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IconBarState {
  activeIcons: Record<string, boolean>;
  toggleIcon: (iconName: string) => void;
  setIconActive: (iconName: string, active: boolean) => void;
  resetAllIcons: () => void;
}

export const useIconBarStore = create<IconBarState>()(
  persist(
    (set) => ({
      activeIcons: {
        sliders: false,        // 1. AI Response Configuration (was Advanced Settings) - LEFT PANEL CONTROL
        plug: false,           // 2. API Connections (NEW)
        font: false,           // 3. AI Response Formatting (NEW)
        'book-atlas': false,   // 4. World Info (was Character Management)
        'user-gear': false,    // 5. User Settings (NEW)
        panorama: false,       // 6. Change Background Image (was World Info)
        cubes: false,          // 7. Extensions (NO CHANGE)
        'face-smile': false,   // 8. Persona Management (was Character Emotions)
        'address-card': false, // 9. Character Management (was User Settings) - RIGHT PANEL CONTROL
      },
      
      toggleIcon: (iconName: string) =>
        set((state) => {
          const middleIcons = ['plug', 'font', 'book-atlas', 'user-gear', 'panorama', 'cubes', 'face-smile'];
          const isMiddleIcon = middleIcons.includes(iconName);
          
          if (isMiddleIcon) {
            // For middle icons, implement exclusive toggle behavior
            const newActiveIcons = { ...state.activeIcons };
            
            // First, turn off all middle icons
            middleIcons.forEach(icon => {
              newActiveIcons[icon] = false;
            });
            
            // Then, toggle the clicked icon
            newActiveIcons[iconName] = !state.activeIcons[iconName];
            
            return { activeIcons: newActiveIcons };
          } else {
            // For panel control icons (sliders, address-card), use normal toggle
            return {
              activeIcons: {
                ...state.activeIcons,
                [iconName]: !state.activeIcons[iconName],
              },
            };
          }
        }),
        
      setIconActive: (iconName: string, active: boolean) =>
        set((state) => ({
          activeIcons: {
            ...state.activeIcons,
            [iconName]: active,
          },
        })),
        
      resetAllIcons: () =>
        set((state) => ({
          activeIcons: Object.keys(state.activeIcons).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {} as Record<string, boolean>),
        })),
        

    }),
    {
      name: 'sillytavern-iconbar-storage',
      partialize: (state) => ({
        activeIcons: state.activeIcons,
      }),
    }
  )
); 