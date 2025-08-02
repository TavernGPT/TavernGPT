import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ActionButton } from '@/components/ui/action-button';
import { NotificationButton } from '@/components/ui/notification-button';
import { 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  XCircle, 
  HelpCircle,
  Trash2,
  Settings,
  Download,
  Upload,
  Save
} from 'lucide-react';

export const OverlaysDemo: React.FC = () => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Confirmation Dialogs */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Confirmation Dialogs</h3>
          <div className="space-y-3">
            <ActionButton
              onClick={() => setShowConfirmDelete(true)}
              icon={<Trash2 className="w-4 h-4" />}
            >
              Confirm Delete
            </ActionButton>
            <ActionButton
              onClick={() => setShowSettings(true)}
              icon={<Settings className="w-4 h-4" />}
            >
              Settings Modal
            </ActionButton>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-3">
            <NotificationButton
              type="success"
              onClick={() => setShowSuccess(true)}
              icon={<CheckCircle className="w-4 h-4" />}
            >
              Success Message
            </NotificationButton>
            <NotificationButton
              type="error"
              onClick={() => setShowError(true)}
              icon={<XCircle className="w-4 h-4" />}
            >
              Error Message
            </NotificationButton>
            <NotificationButton
              type="warning"
              onClick={() => setShowWarning(true)}
              icon={<AlertTriangle className="w-4 h-4" />}
            >
              Warning Message
            </NotificationButton>
            <NotificationButton
              type="info"
              onClick={() => setShowInfo(true)}
              icon={<Info className="w-4 h-4" />}
            >
              Info Message
            </NotificationButton>
          </div>
        </Card>

        {/* Help & Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Help & Actions</h3>
          <div className="space-y-3">
            <ActionButton
              onClick={() => setShowHelp(true)}
              icon={<HelpCircle className="w-4 h-4" />}
            >
              Help Dialog
            </ActionButton>
            <ActionButton
              onClick={() => setShowExport(true)}
              icon={<Download className="w-4 h-4" />}
            >
              Export Options
            </ActionButton>
            <ActionButton
              onClick={() => setShowImport(true)}
              icon={<Upload className="w-4 h-4" />}
            >
              Import Dialog
            </ActionButton>
          </div>
        </Card>
      </div>

      {/* Confirmation Delete Modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setShowConfirmDelete(false)}
          />
          <div 
            className="relative rounded-lg p-6 max-w-sm w-full mx-4 border"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center mb-4">
              <Trash2 className="w-5 h-5 text-red-500 mr-3" />
              <h3 className="font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
                Confirm Delete
              </h3>
            </div>
            <p className="text-sm mb-6" style={{ color: 'var(--custom-muted-foreground)' }}>
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmDelete(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowConfirmDelete(false)}
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setShowSettings(false)}
          />
          <div 
            className="relative rounded-lg p-6 max-w-md w-full mx-4 border"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Settings className="w-5 h-5 mr-3" style={{ color: 'var(--custom-accent)' }} />
                <h3 className="font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
                  Settings
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span style={{ color: 'var(--custom-card-foreground)' }}>Dark Mode</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: 'var(--custom-card-foreground)' }}>Notifications</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: 'var(--custom-card-foreground)' }}>Auto Save</span>
                <input type="checkbox" className="toggle" />
              </div>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowSettings(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                className="flex-1"
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50">
          <div 
            className="rounded-lg p-4 border shadow-lg max-w-sm"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <h4 className="font-medium text-green-600">Success!</h4>
                <p className="text-sm text-green-600">Your changes have been saved successfully.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSuccess(false)}
                className="ml-4 h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {showError && (
        <div className="fixed top-4 right-4 z-50">
          <div 
            className="rounded-lg p-4 border shadow-lg max-w-sm"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center">
              <XCircle className="w-5 h-5 text-red-500 mr-3" />
              <div>
                <h4 className="font-medium text-red-600">Error!</h4>
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowError(false)}
                className="ml-4 h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Warning Notification */}
      {showWarning && (
        <div className="fixed top-4 right-4 z-50">
          <div 
            className="rounded-lg p-4 border shadow-lg max-w-sm"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <h4 className="font-medium text-yellow-600">Warning!</h4>
                <p className="text-sm text-yellow-600">This action may have consequences.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowWarning(false)}
                className="ml-4 h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Info Notification */}
      {showInfo && (
        <div className="fixed top-4 right-4 z-50">
          <div 
            className="rounded-lg p-4 border shadow-lg max-w-sm"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center">
              <Info className="w-5 h-5 text-blue-500 mr-3" />
              <div>
                <h4 className="font-medium text-blue-600">Information</h4>
                <p className="text-sm text-blue-600">Here's some helpful information for you.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowInfo(false)}
                className="ml-4 h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Help Dialog */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setShowHelp(false)}
          />
          <div 
            className="relative rounded-lg p-6 max-w-lg w-full mx-4 border"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-3" style={{ color: 'var(--custom-accent)' }} />
                <h3 className="font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
                  Help & Documentation
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHelp(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            <div className="space-y-3 mb-6" style={{ color: 'var(--custom-muted-foreground)' }}>
              <p>This is a comprehensive help dialog that can contain:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Step-by-step instructions</li>
                <li>FAQ sections</li>
                <li>Video tutorials</li>
                <li>Contact information</li>
              </ul>
            </div>
            <Button
              onClick={() => setShowHelp(false)}
              className="w-full"
            >
              Got it!
            </Button>
          </div>
        </div>
      )}

      {/* Export Dialog */}
      {showExport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setShowExport(false)}
          />
          <div 
            className="relative rounded-lg p-6 max-w-md w-full mx-4 border"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-3" style={{ color: 'var(--custom-accent)' }} />
                <h3 className="font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
                  Export Options
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowExport(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            <div className="space-y-3 mb-6">
              <Button variant="outline" className="w-full justify-start">
                Export as JSON
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Export as CSV
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Export as PDF
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Export as ZIP
              </Button>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowExport(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowExport(false)}
                className="flex-1"
              >
                Export
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Import Dialog */}
      {showImport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setShowImport(false)}
          />
          <div 
            className="relative rounded-lg p-6 max-w-md w-full mx-4 border"
            style={{
              backgroundColor: 'var(--custom-card)',
              borderColor: 'var(--custom-border)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Upload className="w-5 h-5 mr-3" style={{ color: 'var(--custom-accent)' }} />
                <h3 className="font-medium" style={{ color: 'var(--custom-card-foreground)' }}>
                  Import Data
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowImport(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            <div className="space-y-4 mb-6">
              <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: 'var(--custom-border)' }}>
                <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--custom-muted-foreground)' }} />
                <p style={{ color: 'var(--custom-muted-foreground)' }}>Drag and drop files here, or click to browse</p>
                <Button variant="outline" className="mt-2">
                  Choose Files
                </Button>
              </div>
              <p className="text-sm" style={{ color: 'var(--custom-muted-foreground)' }}>
                Supported formats: JSON, CSV, ZIP (max 10MB)
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowImport(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowImport(false)}
                className="flex-1"
              >
                Import
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 