import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PanelState {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  
  // Actions
  toggleLeftPanel: () => void;
  toggleRightPanel: () => void;
  openLeftPanel: () => void;
  openRightPanel: () => void;
  closeLeftPanel: () => void;
  closeRightPanel: () => void;
  closeAllPanels: () => void;
}

export const usePanelStore = create<PanelState>()(
  persist(
    (set) => ({
      isLeftPanelOpen: false,
      isRightPanelOpen: false,
      
      toggleLeftPanel: () => set((state) => ({ 
        isLeftPanelOpen: !state.isLeftPanelOpen 
      })),
      
      toggleRightPanel: () => set((state) => ({ 
        isRightPanelOpen: !state.isRightPanelOpen 
      })),
      
      openLeftPanel: () => set({ isLeftPanelOpen: true }),
      openRightPanel: () => set({ isRightPanelOpen: true }),
      
      closeLeftPanel: () => set({ isLeftPanelOpen: false }),
      closeRightPanel: () => set({ isRightPanelOpen: false }),
      
      closeAllPanels: () => set({ 
        isLeftPanelOpen: false, 
        isRightPanelOpen: false 
      }),
    }),
    {
      name: 'sillytavern-panel-storage',
      partialize: (state) => ({
        isLeftPanelOpen: state.isLeftPanelOpen,
        isRightPanelOpen: state.isRightPanelOpen,
      }),
    }
  )
); 