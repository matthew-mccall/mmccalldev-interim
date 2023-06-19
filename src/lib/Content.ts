export interface Content {
    title: string;
    date: string;
    link?: string;
    image?: string | null;
    overlay?: boolean;
    description?: string | null;
}

export type ContentProvider = () => Promise<Content[]>;