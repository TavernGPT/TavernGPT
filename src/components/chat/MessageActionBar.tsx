import React, { useState } from 'react'
import { Button } from '../ui/button'
import { 
  Copy, 
  Edit, 
  Trash2, 
  Bookmark, 
  Languages, 
  Image, 
  Volume2, 
  EyeOff,
  Share2,
  Download,
  Flag,
  Heart,
  MessageSquare,
  MoreHorizontal,
  RefreshCw,
  Zap,
  Palette,
  Camera
} from 'lucide-react'
import { cn } from '@/utils/cn'

interface MessageAction {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  description: string
  handler: () => void
  disabled?: boolean
  danger?: boolean
  primary?: boolean
}

interface MessageActionBarProps {
  messageId: string
  content: string
  isUser: boolean
  onCopy: (content: string) => void
  onEdit: (id: string) => void
  onDelete?: (id: string) => void
  onBookmark?: (id: string) => void
  onTranslate?: (id: string) => void
  onGenerateImage?: (id: string) => void
  onNarrate?: (id: string) => void
  onHide?: (id: string) => void
  onShare?: (id: string) => void
  onExport?: (id: string) => void
  onReport?: (id: string) => void
  onLike?: (id: string) => void
  onReply?: (id: string) => void
  onRegenerate?: (id: string) => void
  onContinue?: (id: string) => void
  onStyle?: (id: string) => void
  onScreenshot?: (id: string) => void
  className?: string
}

export const MessageActionBar: React.FC<MessageActionBarProps> = ({
  messageId,
  content,
  isUser,
  onCopy,
  onEdit,
  onDelete,
  onBookmark,
  onTranslate,
  onGenerateImage,
  onNarrate,
  onHide,
  onShare,
  onExport,
  onReport,
  onLike,
  onReply,
  onRegenerate,
  onContinue,
  onStyle,
  onScreenshot,
  className,
}) => {
  const [showMore, setShowMore] = useState(false)

  const primaryActions: MessageAction[] = [
    {
      id: 'copy',
      icon: Copy,
      label: 'Copy',
      description: 'Copy message to clipboard',
      handler: () => onCopy(content),
    },
    {
      id: 'edit',
      icon: Edit,
      label: 'Edit',
      description: 'Edit this message',
      handler: () => onEdit(messageId),
      disabled: !isUser, // Only users can edit their own messages
    },
    {
      id: 'delete',
      icon: Trash2,
      label: 'Delete',
      description: 'Delete this message',
      handler: () => onDelete?.(messageId),
      disabled: !onDelete,
      danger: true,
    },
  ]

  const secondaryActions: MessageAction[] = [
    {
      id: 'bookmark',
      icon: Bookmark,
      label: 'Bookmark',
      description: 'Bookmark this message',
      handler: () => onBookmark?.(messageId),
      disabled: !onBookmark,
    },
    {
      id: 'translate',
      icon: Languages,
      label: 'Translate',
      description: 'Translate this message',
      handler: () => onTranslate?.(messageId),
      disabled: !onTranslate,
    },
    {
      id: 'generate-image',
      icon: Image,
      label: 'Generate Image',
      description: 'Generate image from this message',
      handler: () => onGenerateImage?.(messageId),
      disabled: !onGenerateImage,
    },
    {
      id: 'narrate',
      icon: Volume2,
      label: 'Narrate',
      description: 'Narrate this message',
      handler: () => onNarrate?.(messageId),
      disabled: !onNarrate,
    },
    {
      id: 'hide',
      icon: EyeOff,
      label: 'Hide',
      description: 'Hide this message',
      handler: () => onHide?.(messageId),
      disabled: !onHide,
    },
    {
      id: 'share',
      icon: Share2,
      label: 'Share',
      description: 'Share this message',
      handler: () => onShare?.(messageId),
      disabled: !onShare,
    },
    {
      id: 'export',
      icon: Download,
      label: 'Export',
      description: 'Export this message',
      handler: () => onExport?.(messageId),
      disabled: !onExport,
    },
    {
      id: 'report',
      icon: Flag,
      label: 'Report',
      description: 'Report this message',
      handler: () => onReport?.(messageId),
      disabled: !onReport,
      danger: true,
    },
    {
      id: 'like',
      icon: Heart,
      label: 'Like',
      description: 'Like this message',
      handler: () => onLike?.(messageId),
      disabled: !onLike,
    },
    {
      id: 'reply',
      icon: MessageSquare,
      label: 'Reply',
      description: 'Reply to this message',
      handler: () => onReply?.(messageId),
      disabled: !onReply,
    },
    {
      id: 'regenerate',
      icon: RefreshCw,
      label: 'Regenerate',
      description: 'Regenerate this response',
      handler: () => onRegenerate?.(messageId),
      disabled: !onRegenerate || isUser, // Only for AI messages
    },
    {
      id: 'continue',
      icon: Zap,
      label: 'Continue',
      description: 'Continue this response',
      handler: () => onContinue?.(messageId),
      disabled: !onContinue || isUser, // Only for AI messages
    },
    {
      id: 'style',
      icon: Palette,
      label: 'Style',
      description: 'Change message style',
      handler: () => onStyle?.(messageId),
      disabled: !onStyle,
    },
    {
      id: 'screenshot',
      icon: Camera,
      label: 'Screenshot',
      description: 'Take screenshot of message',
      handler: () => onScreenshot?.(messageId),
      disabled: !onScreenshot,
    },
  ]

  const visibleActions = showMore ? [...primaryActions, ...secondaryActions] : primaryActions

  return (
    <div className={cn("flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", className)}>
      {visibleActions.map((action) => (
        <Button
          key={action.id}
          size="sm"
          variant="ghost"
          onClick={action.handler}
          disabled={action.disabled}
          className={cn(
            "h-8 w-8 p-0",
            action.danger && "hover:text-red-500",
            action.primary && "hover:text-blue-500"
          )}
          title={action.description}
        >
          <action.icon className="h-4 w-4" />
        </Button>
      ))}
      
      {secondaryActions.length > 0 && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setShowMore(!showMore)}
          className="h-8 w-8 p-0"
          title={showMore ? "Show fewer actions" : "Show more actions"}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
} 