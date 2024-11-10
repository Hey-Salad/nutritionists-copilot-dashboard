import { useState } from 'react';
import { PlusCircle, Users, Clock } from 'lucide-react';

interface MealPlan {
  id: number;
  title: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  mealsPerDay: number;
  dietaryRestrictions: string[];
  assignedClients: number;
  lastUpdated: string;
}

const MealPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([
    {
      id: 1,
      title: "Weight Loss Plan",
      description: "A balanced meal plan focused on sustainable weight loss",
      calories: 1800,
      protein: 130,
      carbs: 180,
      fats: 60,
      mealsPerDay: 5,
      dietaryRestrictions: ["dairy-free"],
      assignedClients: 5,
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      title: "Muscle Gain Plan",
      description: "High protein meal plan for muscle building",
      calories: 3000,
      protein: 180,
      carbs: 300,
      fats: 80,
      mealsPerDay: 6,
      dietaryRestrictions: [],
      assignedClients: 3,
      lastUpdated: "5 days ago"
    }
  ]);

  const [newPlan, setNewPlan] = useState<Omit<MealPlan, 'id' | 'assignedClients' | 'lastUpdated'>>({
    title: '',
    description: '',
    calories: 2000,
    protein: 150,
    carbs: 200,
    fats: 70,
    mealsPerDay: 4,
    dietaryRestrictions: [],
  });

  const dietaryOptions = [
    "vegetarian",
    "vegan",
    "dairy-free",
    "gluten-free",
    "nut-free",
    "halal",
    "kosher",
    "pescatarian"
  ];

  // Mock function to simulate AI plan generation
  const generateAIPlan = () => {
    return {
      title: "AI Generated Plan",
      description: "This plan is created based on AI suggestions",
      calories: 2200,
      protein: 160,
      carbs: 210,
      fats: 75,
      mealsPerDay: 4,
      dietaryRestrictions: ["vegan"]
    };
  };

  const handleCreatePlan = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate AI plan data if desired, and use it to update newPlan
    const aiPlanData = generateAIPlan();
    const plan: MealPlan = {
      ...newPlan,
      ...aiPlanData,
      id: Date.now(),
      assignedClients: 0,
      lastUpdated: "Just now"
    };

    setMealPlans([...mealPlans, plan]);
    setIsModalOpen(false);
    setNewPlan({
      title: '',
      description: '',
      calories: 2000,
      protein: 150,
      carbs: 200,
      fats: 70,
      mealsPerDay: 4,
      dietaryRestrictions: [],
    });
  };

  const handleDietaryRestrictionChange = (restriction: string) => {
    setNewPlan(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(restriction)
        ? prev.dietaryRestrictions.filter(r => r !== restriction)
        : [...prev.dietaryRestrictions, restriction]
    }));
  };

  const MacroInput = ({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) => (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="number"
        className="input input-bordered"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
      />
    </div>
  );

  const DietaryRestrictionSelect = () => (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Dietary Restrictions</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {dietaryOptions.map(option => (
          <label key={option} className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
              checked={newPlan.dietaryRestrictions.includes(option)}
              onChange={() => handleDietaryRestrictionChange(option)}
            />
            <span className="label-text ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Meal Plans</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealPlans.map(plan => (
          <div key={plan.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{plan.title}</h2>
              <p className="text-base-content/70">{plan.description}</p>
              
              <div className="stats stats-vertical shadow mt-4">
                <div className="stat">
                  <div className="stat-title">Daily Calories</div>
                  <div className="stat-value text-primary">{plan.calories}</div>
                </div>
                
                <div className="stat">
                  <div className="stat-title">Macros (P/C/F)</div>
                  <div className="stat-value text-sm">
                    {plan.protein}g / {plan.carbs}g / {plan.fats}g
                  </div>
                </div>
              </div>

              {plan.dietaryRestrictions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {plan.dietaryRestrictions.map(restriction => (
                    <span key={restriction} className="badge badge-outline">
                      {restriction}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Assigned to: {plan.assignedClients} clients</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Last updated: {plan.lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Plan Modal */}
      <dialog id="create_plan_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg">Create New Meal Plan</h3>
          <form onSubmit={handleCreatePlan} className="space-y-6 mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newPlan.title}
                onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                placeholder="Enter plan title"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                value={newPlan.description}
                onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                placeholder="Enter plan description"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MacroInput
                label="Daily Calories"
                value={newPlan.calories}
                onChange={(calories) => setNewPlan({ ...newPlan, calories })}
              />
              <MacroInput
                label="Protein (g)"
                value={newPlan.protein}
                onChange={(protein) => setNewPlan({ ...newPlan, protein })}
              />
              <MacroInput
                label="Carbs (g)"
                value={newPlan.carbs}
                onChange={(carbs) => setNewPlan({ ...newPlan, carbs })}
              />
              <MacroInput
                label="Fats (g)"
                value={newPlan.fats}
                onChange={(fats) => setNewPlan({ ...newPlan, fats })}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Meals per Day</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={newPlan.mealsPerDay}
                onChange={(e) => setNewPlan({ ...newPlan, mealsPerDay: parseInt(e.target.value) || 0 })}
              />
            </div>

            <DietaryRestrictionSelect />

            <div className="modal-action">
              <button 
                type="button"
                className="btn btn-ghost"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Plan
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MealPlans;