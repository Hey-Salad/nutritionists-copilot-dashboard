import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const Analytics = () => {
  const data = [
    { name: 'Jan', clients: 4, sessions: 12 },
    { name: 'Feb', clients: 6, sessions: 18 },
    { name: 'Mar', clients: 8, sessions: 24 },
    { name: 'Apr', clients: 10, sessions: 30 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Clients</div>
            <div className="stat-value">28</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Active Meal Plans</div>
            <div className="stat-value">15</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Sessions This Month</div>
            <div className="stat-value">42</div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Growth Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clients" fill="#8884d8" name="Clients" />
                <Bar dataKey="sessions" fill="#82ca9d" name="Sessions" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;