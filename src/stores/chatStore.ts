import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MessageAlternative {
  id: string;
  content: string;
  timestamp: Date;
  metadata?: {
    tokens?: number;
    model?: string;
    temperature?: number;
  };
}

export interface MessageAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url?: string;
  preview?: string;
}

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isEditing?: boolean;
  isSelected?: boolean;
  isHidden?: boolean;
  isBookmarked?: boolean;
  alternatives?: MessageAlternative[];
  currentAlternativeIndex?: number;
  attachments?: MessageAttachment[];
  metadata?: {
    tokens?: number;
    model?: string;
    temperature?: number;
  };
}

export interface ConversationBookmark {
  id: string;
  messageId: string;
  title: string;
  description: string;
  timestamp: Date;
  tags: string[];
}

export interface ChatState {
  messages: Message[];
  currentCharacter: string;
  isLoading: boolean;
  selectedMessageIds: string[];
  bookmarks: ConversationBookmark[];
  streamingMessageId: string | null;
  
  // Actions
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  updateMessage: (id: string, updates: Partial<Message>) => void;
  deleteMessage: (id: string) => void;
  clearMessages: () => void;
  setCurrentCharacter: (character: string) => void;
  setIsLoading: (loading: boolean) => void;
  toggleMessageSelection: (id: string) => void;
  selectAllMessages: () => void;
  deselectAllMessages: () => void;
  deleteSelectedMessages: () => void;
  
  // Swipe alternatives
  addAlternative: (messageId: string, alternative: Omit<MessageAlternative, 'id' | 'timestamp'>) => void;
  setCurrentAlternative: (messageId: string, index: number) => void;
  removeAlternative: (messageId: string, alternativeId: string) => void;
  
  // Message actions
  toggleMessageBookmark: (messageId: string) => void;
  toggleMessageHidden: (messageId: string) => void;
  copyMessage: (content: string) => void;
  translateMessage: (messageId: string) => void;
  generateImageFromMessage: (messageId: string) => void;
  narrateMessage: (messageId: string) => void;
  shareMessage: (messageId: string) => void;
  exportMessage: (messageId: string) => void;
  reportMessage: (messageId: string) => void;
  likeMessage: (messageId: string) => void;
  replyToMessage: (messageId: string) => void;
  regenerateMessage: (messageId: string) => void;
  continueMessage: (messageId: string) => void;
  styleMessage: (messageId: string) => void;
  screenshotMessage: (messageId: string) => void;
  
  // File attachments
  addAttachment: (messageId: string, attachment: Omit<MessageAttachment, 'id'>) => void;
  removeAttachment: (messageId: string, attachmentId: string) => void;
  
  // Conversation management
  addBookmark: (bookmark: Omit<ConversationBookmark, 'id' | 'timestamp'>) => void;
  removeBookmark: (bookmarkId: string) => void;
  exportConversation: (format: 'txt' | 'json' | 'jsonl') => void;
  importConversation: (data: any) => void;
  
  setStreamingMessageId: (id: string | null) => void;
}

// Helper function to convert date strings back to Date objects
const parseMessageDates = (messages: any[]): Message[] => {
  return messages.map(msg => ({
    ...msg,
    timestamp: new Date(msg.timestamp),
    alternatives: msg.alternatives?.map((alt: any) => ({
      ...alt,
      timestamp: new Date(alt.timestamp),
    })) || [],
  }));
};

const parseBookmarkDates = (bookmarks: any[]): ConversationBookmark[] => {
  return bookmarks.map(bookmark => ({
    ...bookmark,
    timestamp: new Date(bookmark.timestamp),
  }));
};

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messages: [],
      currentCharacter: 'Seraphina',
      isLoading: false,
      selectedMessageIds: [],
      bookmarks: [],
      streamingMessageId: null,

      addMessage: (message) => {
        const newMessage: Message = {
          ...message,
          id: Date.now().toString(),
          timestamp: new Date(),
          alternatives: [],
          currentAlternativeIndex: 0,
          attachments: [],
        };
        set((state) => ({
          messages: [...state.messages, newMessage],
        }));
      },

      updateMessage: (id, updates) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, ...updates } : msg
          ),
        }));
      },

      deleteMessage: (id) => {
        set((state) => ({
          messages: state.messages.filter((msg) => msg.id !== id),
          selectedMessageIds: state.selectedMessageIds.filter((msgId) => msgId !== id),
        }));
      },

      clearMessages: () => {
        set({ messages: [], selectedMessageIds: [] });
      },

      setCurrentCharacter: (character) => {
        set({ currentCharacter: character });
      },

      setIsLoading: (isLoading) => {
        set({ isLoading });
      },

      toggleMessageSelection: (id) => {
        set((state) => ({
          selectedMessageIds: state.selectedMessageIds.includes(id)
            ? state.selectedMessageIds.filter((msgId) => msgId !== id)
            : [...state.selectedMessageIds, id],
        }));
      },

      selectAllMessages: () => {
        set((state) => ({
          selectedMessageIds: state.messages.map((msg) => msg.id),
        }));
      },

      deselectAllMessages: () => {
        set({ selectedMessageIds: [] });
      },

      deleteSelectedMessages: () => {
        set((state) => ({
          messages: state.messages.filter(
            (msg) => !state.selectedMessageIds.includes(msg.id)
          ),
          selectedMessageIds: [],
        }));
      },

      // Swipe alternatives
      addAlternative: (messageId, alternative) => {
        const newAlternative: MessageAlternative = {
          ...alternative,
          id: Date.now().toString(),
          timestamp: new Date(),
        };
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  alternatives: [...(msg.alternatives || []), newAlternative],
                }
              : msg
          ),
        }));
      },

      setCurrentAlternative: (messageId, index) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? { ...msg, currentAlternativeIndex: index }
              : msg
          ),
        }));
      },

      removeAlternative: (messageId, alternativeId) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  alternatives: (msg.alternatives || []).filter(
                    (alt) => alt.id !== alternativeId
                  ),
                }
              : msg
          ),
        }));
      },

      // Message actions
      toggleMessageBookmark: (messageId) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? { ...msg, isBookmarked: !msg.isBookmarked }
              : msg
          ),
        }));
      },

      toggleMessageHidden: (messageId) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? { ...msg, isHidden: !msg.isHidden }
              : msg
          ),
        }));
      },

      copyMessage: (content) => {
        navigator.clipboard.writeText(content);
      },

      translateMessage: (messageId) => {
        // Mock translation functionality
        console.log('Translating message:', messageId);
      },

      generateImageFromMessage: (messageId) => {
        // Mock image generation functionality
        console.log('Generating image from message:', messageId);
      },

      narrateMessage: (messageId) => {
        // Mock TTS functionality
        console.log('Narrating message:', messageId);
      },

      shareMessage: (messageId) => {
        // Mock share functionality
        console.log('Sharing message:', messageId);
      },

      exportMessage: (messageId) => {
        // Mock export functionality
        console.log('Exporting message:', messageId);
      },

      reportMessage: (messageId) => {
        // Mock report functionality
        console.log('Reporting message:', messageId);
      },

      likeMessage: (messageId) => {
        // Mock like functionality
        console.log('Liking message:', messageId);
      },

      replyToMessage: (messageId) => {
        // Mock reply functionality
        console.log('Replying to message:', messageId);
      },

      regenerateMessage: (messageId) => {
        // Mock regenerate functionality
        console.log('Regenerating message:', messageId);
      },

      continueMessage: (messageId) => {
        // Mock continue functionality
        console.log('Continuing message:', messageId);
      },

      styleMessage: (messageId) => {
        // Mock style functionality
        console.log('Styling message:', messageId);
      },

      screenshotMessage: (messageId) => {
        // Mock screenshot functionality
        console.log('Taking screenshot of message:', messageId);
      },

      // File attachments
      addAttachment: (messageId, attachment) => {
        const newAttachment: MessageAttachment = {
          ...attachment,
          id: Date.now().toString(),
        };
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  attachments: [...(msg.attachments || []), newAttachment],
                }
              : msg
          ),
        }));
      },

      removeAttachment: (messageId, attachmentId) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  attachments: (msg.attachments || []).filter(
                    (att) => att.id !== attachmentId
                  ),
                }
              : msg
          ),
        }));
      },

      // Conversation management
      addBookmark: (bookmark) => {
        const newBookmark: ConversationBookmark = {
          ...bookmark,
          id: Date.now().toString(),
          timestamp: new Date(),
        };
        set((state) => ({
          bookmarks: [...state.bookmarks, newBookmark],
        }));
      },

      removeBookmark: (bookmarkId) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== bookmarkId),
        }));
      },

      exportConversation: (format) => {
        const state = get();
        const data = {
          messages: state.messages,
          character: state.currentCharacter,
          timestamp: new Date(),
        };

        let content: string;
        let filename: string;

        switch (format) {
          case 'txt':
            content = state.messages
              .map((msg) => `${msg.role}: ${msg.content}`)
              .join('\n\n');
            filename = `conversation-${Date.now()}.txt`;
            break;
          case 'json':
            content = JSON.stringify(data, null, 2);
            filename = `conversation-${Date.now()}.json`;
            break;
          case 'jsonl':
            content = state.messages.map((msg) => JSON.stringify(msg)).join('\n');
            filename = `conversation-${Date.now()}.jsonl`;
            break;
        }

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      },

      importConversation: (data) => {
        // Mock import functionality
        console.log('Importing conversation:', data);
      },

      setStreamingMessageId: (id: string | null) => set({ streamingMessageId: id }),
    }),
    {
      name: 'sillytavern-chat-storage',
      partialize: (state) => ({
        messages: state.messages,
        currentCharacter: state.currentCharacter,
        bookmarks: state.bookmarks,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Convert date strings back to Date objects when rehydrating
          state.messages = parseMessageDates(state.messages);
          state.bookmarks = parseBookmarkDates(state.bookmarks);
        }
      },
    }
  )
); 