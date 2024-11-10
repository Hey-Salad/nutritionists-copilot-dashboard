// src/utils/supabaseTest.ts
import { supabase } from '../lib/supabase';

export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('nutritionists')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase connection error:', error);
      return false;
    }

    console.log('Supabase connection successful:', data);
    return true;
  } catch (error) {
    console.error('Supabase test failed:', error);
    return false;
  }
};