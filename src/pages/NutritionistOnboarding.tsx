// src/pages/NutritionistOnboarding.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { supabase } from '../lib/supabase';
import BusinessLogo from '../assets/Business.png'; // Adjust the path to your logo
import loginImage from '../assets/login-image.png'; // Adjust the path as needed

interface FormData {
  email: string;
  password: string;
  fullName: string;
  yearsOfExperience: string;
  numberOfClients: string;
  companiesServed: string;
  specializations: string[];
}

const NutritionistOnboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    fullName: '',
    yearsOfExperience: '',
    numberOfClients: '',
    companiesServed: '',
    specializations: []
  });

  const specializationOptions = [
    'Weight Management',
    'Sports Nutrition',
    'Plant-based Diet',
    'Corporate Wellness',
    'Eating Disorders',
    'Clinical Nutrition'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecializationChange = (specialization: string) => {
    setFormData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter(s => s !== specialization)
        : [...prev.specializations, specialization]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (formData.specializations.length === 0) {
      setError('Please select at least one specialization');
      setLoading(false);
      return;
    }

    try {
      // 1. Create Firebase auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log('Firebase user created:', userCredential.user.uid);

      // 2. Create Supabase profile
      const { error: supabaseError } = await supabase
        .from('nutritionists')
        .insert([
          {
            firebase_uid: userCredential.user.uid,
            full_name: formData.fullName,
            email: formData.email,
            years_of_experience: parseInt(formData.yearsOfExperience) || 0,
            number_of_clients: parseInt(formData.numberOfClients) || 0,
            companies_served: parseInt(formData.companiesServed) || 0,
            specializations: formData.specializations
          }
        ]);

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        // If Supabase insert fails, delete the Firebase user
        if (auth.currentUser) {
          await auth.currentUser.delete();
        }
        throw new Error('Failed to create nutritionist profile. Please try again.');
      }

      // Success - navigate to dashboard
      navigate('/dashboard');

    } catch (err) {
      console.error('Signup error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to create account');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/">
            <img src={BusinessLogo} alt="HeySalad Business" className="h-14 cursor-pointer" />
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-ghost mr-2">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>

      {/* Flex container for form and image */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start sm:mx-auto sm:w-full sm:max-w-5xl py-12">
        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img src={loginImage} alt="Healthy Food" className="w-full h-auto max-w-lg rounded-lg shadow-lg" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Create your account
          </h2>

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hs-primary focus:border-hs-primary"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hs-primary focus:border-hs-primary"
                />
                <p className="mt-1 text-sm text-gray-500">Must be at least 6 characters</p>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hs-primary focus:border-hs-primary"
                />
              </div>

              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  type="number"
                  min="0"
                  required
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hs-primary focus:border-hs-primary"
                />
              </div>

              <div>
                <label htmlFor="numberOfClients" className="block text-sm font-medium text-gray-700">
                  Number of Clients
                </label>
                <input
                  id="numberOfClients"
                  name="numberOfClients"
                  type="number"
                  min="0"
                  required
                  value={formData.numberOfClients}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hs-primary focus:border-hs-primary"
                />
              </div>

              <div>
                <label htmlFor="companiesServed" className="block text-sm font-medium text-gray-700">
                  Companies Served
                </label>
                <input
                  id="companiesServed"
                  name="companiesServed"
                  type="number"
                  min="0"
                  required
                  value={formData.companiesServed}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hs-primary focus:border-hs-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Specializations
                </label>
                <div className="mt-2">
                  {specializationOptions.map(specialization => (
                    <div key={specialization} className="flex items-center">
                      <input
                        type="checkbox"
                        id={specialization}
                        name="specializations"
                        value={specialization}
                        checked={formData.specializations.includes(specialization)}
                        onChange={() => handleSpecializationChange(specialization)}
                        className="mr-2"
                      />
                      <label htmlFor={specialization} className="text-sm text-gray-600">
                        {specialization}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ed4c4c] hover:text-[#faa09a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed4c4c] disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistOnboarding;
