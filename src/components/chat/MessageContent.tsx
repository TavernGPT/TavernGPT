import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/utils/cn'

interface MessageContentProps {
  content: string
  role: 'user' | 'assistant'
  className?: string
}

export const MessageContent: React.FC<MessageContentProps> = ({
  content,
  role,
  className
}) => {
  const roleStyles = {
    user: {
      color: 'var(--custom-card-foreground)'
    },
    assistant: {
      color: 'var(--custom-card-foreground)'
    }
  }

  const markdownComponents = {
    code: ({ node, inline, className, children, ...props }: any) => {
      return (
        <code
          className={cn(
            inline ? 'px-1 py-0.5 rounded text-xs' : 'block p-2 rounded text-xs overflow-x-auto mb-2',
            className
          )}
          style={{ backgroundColor: 'rgb(43, 43, 43)' }}
          {...props}
        >
          {children}
        </code>
      )
    },
    blockquote: ({ children, ...props }: any) => (
      <blockquote
        className="border-l-4 pl-4 italic my-2"
        style={{ borderColor: 'rgb(43, 43, 43)' }}
        {...props}
      >
        {children}
      </blockquote>
    ),
    p: ({ children, ...props }: any) => (
      <p className="mb-2 last:mb-0" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc list-inside mb-2 space-y-1" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal list-inside mb-2 space-y-1" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="ml-2" {...props}>
        {children}
      </li>
    ),
    h1: ({ children, ...props }: any) => (
      <h1 className="text-xl font-bold mb-2" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-lg font-bold mb-2" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-base font-bold mb-2" {...props}>
        {children}
      </h3>
    ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-bold" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: any) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
    a: ({ children, href, ...props }: any) => (
      <a
        href={href}
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <div
      className={cn('text-sm leading-relaxed', className)}
      style={roleStyles[role]}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 