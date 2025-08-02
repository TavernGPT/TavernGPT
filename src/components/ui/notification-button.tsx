import React from 'react';
import { Button } from './button';
import { cn } from '@/utils/cn';

interface NotificationButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: 'success' | 'error' | 'warning' | 'info';
  size?: 'default' | 'sm' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const notificationStyles = {
  success: {
    text: 'text-green-600',
    border: 'border-green-600',
    hover: 'hover:bg-green-600/10'
  },
  error: {
    text: 'text-red-600',
    border: 'border-red-600',
    hover: 'hover:bg-red-600/10'
  },
  warning: {
    text: 'text-yellow-600',
    border: 'border-yellow-600',
    hover: 'hover:bg-yellow-600/10'
  },
  info: {
    text: 'text-blue-600',
    border: 'border-blue-600',
    hover: 'hover:bg-blue-600/10'
  }
};

export const NotificationButton = React.forwardRef<HTMLButtonElement, NotificationButtonProps>(
  ({ type, size = 'default', icon, children, className, ...props }, ref) => {
    const styles = notificationStyles[type];
    
    return (
      <Button
        ref={ref}
        variant="outline"
        size={size}
        className={cn(
          'w-full justify-start',
          styles.text,
          styles.border,
          styles.hover,
          className
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Button>
    );
  }
);

NotificationButton.displayName = 'NotificationButton'; 