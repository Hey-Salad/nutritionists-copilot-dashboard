// src/components/dashboard/SpecializationsList.tsx
interface SpecializationsListProps {
    specializations: string[];
  }
  
  export const SpecializationsList = ({ specializations }: SpecializationsListProps) => {
    return (
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h3 className="card-title font-grandstander">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <span key={spec} className="badge badge-primary badge-lg">{spec}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };