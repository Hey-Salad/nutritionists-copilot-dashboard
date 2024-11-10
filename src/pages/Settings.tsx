// src/pages/Settings.tsx

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Profile Settings</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">First Name</label>
                  <input type="text" placeholder="John" className="input input-bordered w-full" />
                </div>
                <div>
                  <label className="label">Last Name</label>
                  <input type="text" placeholder="Doe" className="input input-bordered w-full" />
                </div>
              </div>
              <div>
                <label className="label">Email</label>
                <input type="email" placeholder="john@example.com" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">Time Zone</label>
                <select className="select select-bordered w-full">
                  <option disabled selected>Select timezone</option>
                  <option value="utc">UTC</option>
                  <option value="est">EST</option>
                  <option value="pst">PST</option>
                </select>
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <button className="btn btn-outline">Configure</button>
              </div>
              <div className="flex items-center justify-between">
                <span>Calendar Reminders</span>
                <button className="btn btn-outline">Configure</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;