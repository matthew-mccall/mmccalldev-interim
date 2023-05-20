import {Content, ContentProvider} from "@mmccalldev/lib/Content";
import {createApi} from "unsplash-js";

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const UnsplashContent: ContentProvider = async (): Promise<Content[]> => {

    const photos = (await unsplash.users.getPhotos({
        username: '__mmccall',
    })).response?.results;

    let content: Content[] = [];

    for (const photo of photos!) {
        content.push({
            image: photo.urls.regular,
            title: photo.alt_description ?? "Uploaded a photo",
            link: photo.links.html,
            date: photo.created_at,
        });
    }

    return content;
}

export default UnsplashContent;