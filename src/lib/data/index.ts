import { mockAdapter } from "@/lib/data/mock-store";
import type { DataAdapter } from "@/lib/data/adapter";

// Single swap point. When Supabase is provisioned (Section 7 of the brief),
// this becomes: export const db: DataAdapter = supabaseAdapter;
export const db: DataAdapter = mockAdapter;
