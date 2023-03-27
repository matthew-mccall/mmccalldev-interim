export interface Content {
    image?: string | null;
    title: string;
    description?: string | null;
    link: string;
    date: string;
}

export type ContentProvider = () => Promise<Content[]>;