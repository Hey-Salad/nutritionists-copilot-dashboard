// src/components/dashboard/WelcomeCard.tsx
interface WelcomeCardProps {
    name: string;
  }
  
  export const WelcomeCard = ({ name }: WelcomeCardProps) => {
    return (
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title text-2xl font-grandstander">
            Welcome, {name}
          </h2>
          <p className="font-figtree">Here's what's happening with your clients today.</p>
        </div>
      </div>
    );
  };