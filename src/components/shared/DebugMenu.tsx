import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Bug, 
  Trash2, 
  RotateCcw, 
  Plus, 
  MessageSquare, 
  Bookmark,
  Download
} from 'lucide-react';
import { useChatStore } from '@/stores/chatStore';
import { useSettingsStore } from '@/stores/settingsStore';
import { cn } from '@/utils/cn';

interface DebugMenuProps {
  className?: string;
}

export const DebugMenu: React.FC<DebugMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmAction, setConfirmAction] = useState<string>('');

  const {
    messages,
    addMessage,
    clearMessages,
    bookmarks,
    removeBookmark,
    addAlternative,
  } = useChatStore();

  const { resetSettings } = useSettingsStore();

  const handleResetAll = () => {
    clearMessages();
    bookmarks.forEach(bookmark => removeBookmark(bookmark.id));
    resetSettings();
    setShowConfirm(false);
    setConfirmAction('');
  };

  const handleClearMessages = () => {
    clearMessages();
    setShowConfirm(false);
    setConfirmAction('');
  };

  const handleClearBookmarks = () => {
    bookmarks.forEach(bookmark => removeBookmark(bookmark.id));
    setShowConfirm(false);
    setConfirmAction('');
  };

  const handleAddDemoData = () => {
    // Add some demo messages
    const demoMessages = [
      {
        content: "Hello! I'm here to help you test the advanced chat features.",
        role: 'assistant' as const,
      },
      {
        content: "Can you show me the file upload feature?",
        role: 'user' as const,
      },
      {
        content: "Of course! You can click the paperclip icon to upload files. I can handle images, documents, and many other formats. The drag & drop interface makes it easy to attach multiple files at once.",
        role: 'assistant' as const,
      },
      {
        content: "What about the swipe alternatives?",
        role: 'user' as const,
      },
      {
        content: "Great question! Each AI response can have multiple alternatives. You can swipe through them using the arrow buttons, or generate new ones. This gives you more options to choose from.",
        role: 'assistant' as const,
      },
    ];

    demoMessages.forEach((msg, index) => {
      setTimeout(() => {
        addMessage(msg);
      }, index * 500);
    });
  };

  const handleAddAlternatives = () => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === 'assistant') {
      const alternatives = [
        "Here's an alternative response with different content and style.",
        "Another perspective on the same topic with varied vocabulary.",
        "A third option that demonstrates the swipe functionality.",
        "Final alternative showing the complete feature set."
      ];

      alternatives.forEach((alt, index) => {
        setTimeout(() => {
          addAlternative(lastMessage.id, {
            content: alt,
            metadata: {
              tokens: Math.floor(Math.random() * 100) + 50,
              model: 'gpt-4',
              temperature: 0.7 + (index * 0.1),
            },
          });
        }, index * 300);
      });
    }
  };

  const handleExportDebug = () => {
    const debugData = {
      messages: messages.length,
      bookmarks: bookmarks.length,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };
    
    const blob = new Blob([JSON.stringify(debugData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `debug-data-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const confirmActionMap: Record<string, () => void> = {
    'reset-all': handleResetAll,
    'clear-messages': handleClearMessages,
    'clear-bookmarks': handleClearBookmarks,
  };

  const handleConfirm = () => {
    const action = confirmActionMap[confirmAction];
    if (action) {
      action();
    }
  };

  return (
    <>
      {/* Floating Debug Button */}
      <div className={cn("fixed bottom-4 right-4 z-50", className)}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 shadow-lg"
          style={{
            backgroundColor: 'var(--custom-accent)',
            color: 'white',
          }}
        >
          <Bug className="w-5 h-5" />
        </Button>
      </div>

      {/* Debug Menu */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80">
          <div 
            className="rounded-lg shadow-xl border p-4 space-y-3"
            style={{
              backgroundColor: 'var(--custom-accent)',
              borderColor: 'var(--custom-accent)',
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-white">
                Debug Menu
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                ×
              </Button>
            </div>

            <div className="space-y-2">
              {/* Stats */}
              <div className="text-xs space-y-1 text-white/80">
                <div>Messages: {messages.length}</div>
                <div>Bookmarks: {bookmarks.length}</div>
                <div>User Messages: {messages.filter(m => m.role === 'user').length}</div>
                <div>AI Messages: {messages.filter(m => m.role === 'assistant').length}</div>
              </div>

              <div className="border-t pt-3 space-y-2 border-white/20">
                {/* Add Demo Data */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddDemoData}
                  className="w-full justify-start text-white border-white/50 bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Demo Data
                </Button>

                {/* Add Alternatives */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddAlternatives}
                  className="w-full justify-start text-white border-white/50 bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Alternatives
                </Button>

                {/* Export Debug Data */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExportDebug}
                  className="w-full justify-start text-white border-white/50 bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Debug Data
                </Button>

                <div className="border-t pt-3 space-y-2 border-white/20">
                  {/* Clear Messages */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setConfirmAction('clear-messages');
                      setShowConfirm(true);
                    }}
                    className="w-full justify-start text-red-200 border-red-300 bg-red-500/20 hover:bg-red-500/25 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Messages
                  </Button>

                  {/* Clear Bookmarks */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setConfirmAction('clear-bookmarks');
                      setShowConfirm(true);
                    }}
                    className="w-full justify-start text-red-200 border-red-300 bg-red-500/20 hover:bg-red-500/25 transition-colors"
                  >
                    <Bookmark className="w-4 h-4 mr-2" />
                    Clear Bookmarks
                  </Button>

                  {/* Reset All */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setConfirmAction('reset-all');
                      setShowConfirm(true);
                    }}
                    className="w-full justify-start text-red-200 border-red-300 bg-red-500/20 hover:bg-red-500/25 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset All Data
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setShowConfirm(false)}
          />
          <div 
            className="relative rounded-lg p-6 max-w-sm w-full mx-4 border"
            style={{
              backgroundColor: 'var(--custom-accent)',
              borderColor: 'var(--custom-accent)',
            }}
          >
            <h3 className="font-medium mb-4 text-white">
              Confirm Action
            </h3>
            <p className="text-sm mb-6 text-white/80">
              {confirmAction === 'reset-all' && 'This will clear all messages, bookmarks, and reset settings. This action cannot be undone.'}
              {confirmAction === 'clear-messages' && 'This will clear all messages. This action cannot be undone.'}
              {confirmAction === 'clear-bookmarks' && 'This will clear all bookmarks. This action cannot be undone.'}
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirm(false)}
                className="flex-1 text-white border-white/50 bg-white/10 hover:bg-white/15 transition-colors"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1"
                style={{
                  backgroundColor: confirmAction === 'reset-all' ? 'var(--custom-destructive)' : 'var(--custom-accent)',
                  color: 'white',
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 