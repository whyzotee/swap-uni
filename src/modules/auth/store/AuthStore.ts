import { signInSchema } from "@/modules/auth/validation/AuthSchema";
import { supabase } from "@/utils/supabase";
import { AuthError, Session, User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthState {
    session: Session | null,
    setSession: (session: Session | null) => void;
    signIn: (email: string, password: string) => Promise<User | AuthError | null>;
    signUp: (email: string, password: string) => Promise<User | AuthError | null>;
    signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    session: null,
    setSession: (session) => set({ session }),
    signIn: async (email, password) => {
        const result = signInSchema.safeParse({ email, password });

        if (result.error) {
            return Promise.reject("Email is required");
        }

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) return Promise.reject(error);

        set({ session: data.session });

        console.log("User login!");

        return Promise.resolve(data.user)
    },
    signUp: async (email, password) => {
        if (!email) return Promise.reject("Email is required");
        if (!password) return Promise.reject("Password is required");

        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) return Promise.reject(error);

        set({ session: data.session });

        console.log("User register!");

        return Promise.resolve(data.user)
    },
    signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) return Promise.reject(error);

        set({ session: null });

        console.log("User logout!");

        return Promise.resolve();
    },
}))