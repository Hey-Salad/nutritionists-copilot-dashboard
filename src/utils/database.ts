// src/utils/database.ts
import { supabase } from '../lib/supabase';

export const createDatabaseRef = async (path: string) => {
  return { path };
};

export const writeData = async (path: string, data: any): Promise<void> => {
  try {
    const { error } = await supabase
      .from(path)
      .insert([data]);
      
    if (error) throw error;
  } catch (error) {
    console.error('Error writing to database:', error);
    throw error;
  }
};

export const readData = async (path: string, userId: string): Promise<any> => {
  try {
    const { data, error } = await supabase
      .from(path)
      .select('*')
      .eq('firebase_uid', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error reading from database:', error);
    throw error;
  }
};