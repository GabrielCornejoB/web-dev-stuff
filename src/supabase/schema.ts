export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          category: string;
          created_at: string | null;
          id: number;
        };
        Insert: {
          category: string;
          created_at?: string | null;
          id?: number;
        };
        Update: {
          category?: string;
          created_at?: string | null;
          id?: number;
        };
      };
      links: {
        Row: {
          category_id: number;
          description: string | null;
          id: number;
          image_url: string;
          isFreemium: boolean | null;
          page_name: string;
          requiresLogin: boolean | null;
          url: string;
        };
        Insert: {
          category_id: number;
          description?: string | null;
          id?: number;
          image_url: string;
          isFreemium?: boolean | null;
          page_name: string;
          requiresLogin?: boolean | null;
          url: string;
        };
        Update: {
          category_id?: number;
          description?: string | null;
          id?: number;
          image_url?: string;
          isFreemium?: boolean | null;
          page_name?: string;
          requiresLogin?: boolean | null;
          url?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Link = Database["public"]["Tables"]["links"]["Row"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];
