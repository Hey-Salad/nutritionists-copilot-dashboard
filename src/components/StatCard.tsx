// src/components/StatCard.tsx
import { FC } from 'react';
import { Users, BarChart, LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number;
  iconType: 'users' | 'chart'; // Changed from icon to iconType
}

// Icon mapping object
const iconMap: Record<StatCardProps['iconType'], LucideIcon> = {
  users: Users,
  chart: BarChart
};

export const StatCard: FC<StatCardProps> = ({ label, value, iconType }) => {
  const Icon = iconMap[iconType];

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center">
        <div className="bg-light-peach p-3 rounded-lg">
          <Icon className="w-8 h-8 text-cherry-red" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 font-figtree">{label}</p>
          <p className="text-2xl font-semibold text-gray-900 font-figtree">{value}</p>
        </div>
      </div>
    </div>
  );
};