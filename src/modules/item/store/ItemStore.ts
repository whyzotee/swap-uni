import { Tables } from "@/utils/supabase/database.types";
import { create } from "zustand";

interface ItemState {
    items: Tables<"item">[]; // | null;
    // setItems: () => void;
    // isLoading: boolean;
};

export const useItemStore = create<ItemState>((set) => ({
    items: []
}));