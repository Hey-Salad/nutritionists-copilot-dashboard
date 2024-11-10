// src/components/NavigationLink.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationLinkProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  icon: Icon,
  label,
  path,
  isActive,
  onClick
}) => (
  <Link
    to={path}
    onClick={onClick}
    className={`
      flex items-center px-4 py-2 rounded-lg transition-colors
      ${isActive 
        ? 'bg-light-peach text-cherry-red' 
        : 'text-gray-700 hover:bg-gray-100 hover:text-cherry-red'}
    `}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span>{label}</span>
  </Link>
);