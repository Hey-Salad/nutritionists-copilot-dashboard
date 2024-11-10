import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart, Settings, LogOut, Book, Calendar, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import BusinessLogo from '../../assets/Business.png';
import HeySaladLogo from '../../assets/vite.svg';

interface DashboardSidebarProps {
  onLogout: () => void;
}

export const DashboardSidebar = ({ onLogout }: DashboardSidebarProps) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BarChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Calendar, label: 'Calendar', path: '/dashboard/calendar' },
    { icon: Users, label: 'Clients', path: '/dashboard/clients' },
    { icon: Utensils, label: 'Meal Plans', path: '/dashboard/meal-plans' },
    { icon: Book, label: 'Notes', path: '/dashboard/notes' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div 
      className={`flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img
            src={isExpanded ? BusinessLogo : HeySaladLogo}
            alt="Logo"
            className={`transition-all duration-300 ${
              isExpanded ? 'w-40' : 'w-10'  // Changed from w-32 to w-40 and w-8 to w-10
            }`}
          />
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {navigationItems.map(({ icon: Icon, label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {isExpanded && (
                  <span className="ml-3 transition-opacity duration-300">
                    {label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className={`flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors w-full ${
            isExpanded ? 'justify-start' : 'justify-center'
          }`}
        >
          <LogOut className="w-5 h-5" />
          {isExpanded && <span className="ml-3">Sign Out</span>}
        </button>
      </div>
    </div>
  );
};