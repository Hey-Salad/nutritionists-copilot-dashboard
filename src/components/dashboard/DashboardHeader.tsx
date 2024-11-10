// src/components/dashboard/DashboardHeader.tsx
import { Menu } from 'lucide-react';
import BusinessLogo from '../../assets/Business.png';
import { NutritionistProfile } from '../../types/nutritionist';

interface DashboardHeaderProps {
  userData: NutritionistProfile | null;
  onLogout: () => void;
}

export const DashboardHeader = ({ userData, onLogout }: DashboardHeaderProps) => {
  return (
    <div className="navbar bg-base-100 lg:hidden">
      <div className="flex-none">
        <label htmlFor="drawer" className="btn btn-square btn-ghost drawer-button">
          <Menu className="w-6 h-6" />
        </label>
      </div>
      <div className="flex-1">
        <img src={BusinessLogo} alt="HeySalad Business" className="h-14" />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-10">
              <span>{userData?.full_name?.[0] || 'U'}</span>
            </div>
          </div>
          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li><a onClick={onLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};