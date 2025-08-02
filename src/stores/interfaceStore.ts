import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type InterfaceType = 
  | 'main'
  | 'chat' 
  | 'api-connections' 
  | 'ai-formatting' 
  | 'world-info' 
  | 'user-settings' 
  | 'background-image' 
  | 'extensions' 
  | 'persona-management';

interface InterfaceStore {
  // Current active interface
  activeInterface: InterfaceType;
  
  // Actions
  setActiveInterface: (interfaceType: InterfaceType) => void;
  resetToMain: () => void;
}

export const useInterfaceStore = create<InterfaceStore>()(
  persist(
    (set) => ({
      // Initial State
      activeInterface: 'main',

      // Actions
      setActiveInterface: (interfaceType: InterfaceType) =>
        set({ activeInterface: interfaceType }),

      resetToMain: () =>
        set({ activeInterface: 'main' }),
    }),
    {
      name: 'sillytavern-interface-storage',
      partialize: (state) => ({
        activeInterface: state.activeInterface,
      }),
    }
  )
); 