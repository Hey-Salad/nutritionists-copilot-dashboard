// src/types/nutritionist.ts
export interface NutritionistProfile {
    firebase_uid: string;
    full_name: string;
    email: string;
    years_of_experience: number;
    number_of_clients: number;
    companies_served: number;
    specializations: string[];
  }
  
  export interface FormData {
    email: string;
    password: string;
    fullName: string;
    yearsOfExperience: string;
    numberOfClients: string;
    companiesServed: string;
    specializations: string[];
  }