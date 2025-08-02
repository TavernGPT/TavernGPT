import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AppSettings {
  theme: {
    preset: string;
    colors: Record<string, string>;
    customCSS: string;
  };
  display: {
    chatWidth: number;
    fontSize: number;
    avatarStyle: 'circle' | 'square' | 'rounded';
    chatStyle: 'flat' | 'bubbles' | 'document';
    notificationPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  };
  behavior: {
    autoScroll: boolean;
    autoScrollSensitivity: number;
    confirmDeletes: boolean;
    confirmCharacterDeletes: boolean;
    confirmSettingsReset: boolean;
    autoSave: boolean;
    autoSaveInterval: number;
    showTimestamps: boolean;
    showCounters: boolean;
    showMessageActions: boolean;
  };
  shortcuts: Record<string, string>;
  performance: {
    virtualScrolling: boolean;
    messageBufferSize: number;
    smoothAnimations: boolean;
    animationDuration: number;
    memoryOptimized: boolean;
    memoryCleanupInterval: number;
    lazyLoadImages: boolean;
    compressImages: boolean;
    monitoring: boolean;
    monitoringLevel: 'basic' | 'detailed' | 'debug';
  };
  powerUser: {
    enableStreaming: boolean;
    showTokenCounts: boolean;
    enableMessageHistory: boolean;
    autoSaveEdits: boolean;
    enableCharacterExtensions: boolean;
    showCharacterMetadata: boolean;
    enableCharacterLorebooks: boolean;
    enableZenMode: boolean;
    showDebugInfo: boolean;
    enableLabMode: boolean;
    messageCacheSize: number;
    autoCleanupInterval: number;
    enableCharacterImport: boolean;
    enableChatExport: boolean;
    autoBackupConversations: boolean;
  };
}

interface SettingsState {
  settings: AppSettings;
  isSettingsOpen: boolean;
  searchQuery: string;
  
  // Actions
  updateSettings: (path: string, value: any) => void;
  resetSettings: () => void;
  toggleSettings: () => void;
  setSearchQuery: (query: string) => void;
  exportSettings: () => string;
  importSettings: (settingsJson: string) => boolean;
}

const defaultSettings: AppSettings = {
  theme: {
    preset: 'dark',
    colors: {
      '--custom-background': '#0f172a',
      '--custom-card': '#1e293b',
      '--custom-border': '#334155',
      '--custom-muted': '#475569',
      '--custom-muted-foreground': '#94a3b8',
      '--custom-accent': '#2563eb',
      '--custom-accent-foreground': '#ffffff',
      '--custom-primary': '#2563eb',
      '--custom-primary-foreground': '#ffffff',
      '--custom-secondary': '#64748b',
      '--custom-secondary-foreground': '#ffffff',
    },
    customCSS: '',
  },
  display: {
    chatWidth: 70,
    fontSize: 1.0,
    avatarStyle: 'circle',
    chatStyle: 'bubbles',
    notificationPosition: 'bottom-right',
  },
  behavior: {
    autoScroll: true,
    autoScrollSensitivity: 50,
    confirmDeletes: true,
    confirmCharacterDeletes: true,
    confirmSettingsReset: true,
    autoSave: true,
    autoSaveInterval: 30,
    showTimestamps: true,
    showCounters: true,
    showMessageActions: true,
  },
  shortcuts: {
    'send-message': 'Ctrl+Enter',
    'regenerate': 'Ctrl+R',
    'cancel': 'Escape',
    'edit-last': 'ArrowUp',
    'bold': 'Ctrl+B',
    'italic': 'Ctrl+I',
    'shortcuts-help': 'Ctrl+/',
  },
  performance: {
    virtualScrolling: true,
    messageBufferSize: 50,
    smoothAnimations: true,
    animationDuration: 200,
    memoryOptimized: true,
    memoryCleanupInterval: 300,
    lazyLoadImages: true,
    compressImages: true,
    monitoring: false,
    monitoringLevel: 'basic',
  },
  powerUser: {
    enableStreaming: false,
    showTokenCounts: false,
    enableMessageHistory: false,
    autoSaveEdits: false,
    enableCharacterExtensions: false,
    showCharacterMetadata: false,
    enableCharacterLorebooks: false,
    enableZenMode: false,
    showDebugInfo: false,
    enableLabMode: false,
    messageCacheSize: 100,
    autoCleanupInterval: 300,
    enableCharacterImport: false,
    enableChatExport: false,
    autoBackupConversations: false,
  },
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      settings: defaultSettings,
      isSettingsOpen: false,
      searchQuery: '',
      
      updateSettings: (path: string, value: any) => {
        set((state) => {
          const newSettings = { ...state.settings };
          const pathParts = path.split('.');
          let current: any = newSettings;
          
          for (let i = 0; i < pathParts.length - 1; i++) {
            current = current[pathParts[i]];
          }
          
          current[pathParts[pathParts.length - 1]] = value;
          
          // Apply theme changes immediately
          if (path.startsWith('theme.colors')) {
            Object.entries(newSettings.theme.colors).forEach(([key, value]) => {
              document.documentElement.style.setProperty(key, value);
            });
          }
          
          return { settings: newSettings };
        });
      },
      
      resetSettings: () => {
        set({ settings: defaultSettings });
        // Reset theme colors
        Object.entries(defaultSettings.theme.colors).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
      },
      
      toggleSettings: () => {
        set((state) => ({ isSettingsOpen: !state.isSettingsOpen }));
      },
      
      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },
      
      exportSettings: () => {
        const { settings } = get();
        return JSON.stringify(settings, null, 2);
      },
      
      importSettings: (settingsJson: string) => {
        try {
          const importedSettings = JSON.parse(settingsJson);
          set({ settings: importedSettings });
          
          // Apply theme colors
          Object.entries(importedSettings.theme.colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value as string);
          });
          
          return true;
        } catch (error) {
          console.error('Failed to import settings:', error);
          return false;
        }
      },
    }),
    {
      name: 'sillytavern-settings-storage',
      partialize: (state) => ({
        settings: state.settings,
      }),
    }
  )
); 