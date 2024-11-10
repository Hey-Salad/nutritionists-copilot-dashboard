// src/components/dashboard/DashboardStats.tsx
import { Users, BarChart } from 'lucide-react';
import { NutritionistProfile } from '../../types/nutritionist';

interface DashboardStatsProps {
  userData: NutritionistProfile | null;
}

export const DashboardStats = ({ userData }: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <Users className="w-8 h-8" />
          </div>
          <div className="stat-title">Total Clients</div>
          <div className="stat-value">{userData?.number_of_clients || 0}</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <BarChart className="w-8 h-8" />
          </div>
          <div className="stat-title">Companies</div>
          <div className="stat-value">{userData?.companies_served || 0}</div>
        </div>
      </div>
    </div>
  );
};