export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          id: number
          image_url: string
          page_name: string
          url: string
        }
        Insert: {
          id?: number
          image_url: string
          page_name: string
          url: string
        }
        Update: {
          id?: number
          image_url?: string
          page_name?: string
          url?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
