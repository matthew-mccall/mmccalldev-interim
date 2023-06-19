export interface Content {
    title: string;
    date: string;
    link?: string;
    image?: string | null;
    overlay?: boolean;
    color?: string;
    description?: string | null;
}

export type ContentProvider = () => Promise<Promise<Content>[]>;