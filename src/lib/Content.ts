export interface Content {
    image: string;
    title: string;
    description?: string | null;
    link: string;
    date: string;
}

export type ContentProvider = () => Promise<Content[]>;