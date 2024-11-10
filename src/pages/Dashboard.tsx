// src/pages/Dashboard.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { NutritionistProfile } from '../types/nutritionist';
import {
  DashboardHeader,
  DashboardSidebar,
  DashboardStats,
  SpecializationsList,
  WelcomeCard
} from '../components/dashboard';

// Import new page components
import Analytics from './Analytics';
import Calendar from './Calendar';
import Clients from './Clients';
import MealPlans from './MealPlans';
import Notes from './Notes';
import Settings from './Settings';

// Create a DashboardHome component for the main dashboard view
const DashboardHome = ({ nutritionistData }: { nutritionistData: NutritionistProfile | null }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <WelcomeCard name={nutritionistData?.full_name || ''} />
      <DashboardStats userData={nutritionistData} />
      {nutritionistData?.specializations && (
        <SpecializationsList specializations={nutritionistData.specializations} />
      )}
    </div>
  );
};

const Dashboard = () => {
  const { getUserData, signOut } = useAuth();
  const [nutritionistData, setNutritionistData] = useState<NutritionistProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setNutritionistData(userData);
      setLoading(false);
    };

    fetchData();
  }, [getUserData]);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cherry-red" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        <DashboardHeader userData={nutritionistData} onLogout={handleLogout} />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<DashboardHome nutritionistData={nutritionistData} />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="clients" element={<Clients />} />
            <Route path="meal-plans" element={<MealPlans />} />
            <Route path="notes" element={<Notes />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>

      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <DashboardSidebar onLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Dashboard;