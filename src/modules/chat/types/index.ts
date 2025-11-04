export type Channel = {
    id: string;
    name: string;
    lastMessage?: Message;
    avatar: string;
}

export type Message = {
    id: string;
    content: string;
    sender?: User;
    createdAt: string;
}

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    avatarUrl?: string | null;
    created_at: string;
    updated_at: string;
}