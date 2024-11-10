// src/types/database.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      nutritionists: {
        Row: {
          id: number
          user_id: string
          full_name: string
          email: string
          years_of_experience: number
          number_of_clients: number
          companies_served: number
          specializations: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          full_name: string
          email: string
          years_of_experience: number
          number_of_clients: number
          companies_served: number
          specializations: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          full_name?: string
          email?: string
          years_of_experience?: number
          number_of_clients?: number
          companies_served?: number
          specializations?: string[]
          updated_at?: string
        }
      }
    }
  }
}