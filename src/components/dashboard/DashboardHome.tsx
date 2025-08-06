import React from 'react';
import { useAuthStore } from '../../stores/authStore';

const DashboardHome: React.FC = () => {
  const { user } = useAuthStore();

  const stats = [
    { name: 'Karma Credits', value: '1,250', change: '+12%', changeType: 'positive' },
    { name: 'API Requests', value: '2,847', change: '+8%', changeType: 'positive' },
    { name: 'Active Models', value: '5', change: '+2', changeType: 'positive' },
    { name: 'Monthly Cost', value: '$45.20', change: '-5%', changeType: 'negative' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">
          Manage your TavernGPT account, karma credits, and API usage from your dashboard.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span className="text-2xl mr-3">💎</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">Buy Karma Credits</p>
              <p className="text-sm text-gray-600">Add credits to your account</p>
            </div>
          </button>
          
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span className="text-2xl mr-3">🔑</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">Create API Key</p>
              <p className="text-sm text-gray-600">Generate new API access</p>
            </div>
          </button>
          
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span className="text-2xl mr-3">📊</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-sm text-gray-600">Check usage statistics</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600">API request processed</span>
            </div>
            <span className="text-xs text-gray-500">2 minutes ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Karma credits purchased</span>
            </div>
            <span className="text-xs text-gray-500">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-600">New API key generated</span>
            </div>
            <span className="text-xs text-gray-500">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 