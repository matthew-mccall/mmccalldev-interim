import {Content, ContentProvider} from "@mmccalldev/lib/Content";
import {createApi} from "unsplash-js";

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const UnsplashContent: ContentProvider = async (): Promise<Content[]> => {

    const photos = (await unsplash.users.getPhotos({
        username: '__mmccall',
    })).response?.results;

    if (!photos) {
        return [];
    }

    return photos.map(({urls, alt_description, links, created_at}) => {
        return {
            image: urls.regular,
            title: alt_description ?? "Uploaded a photo",
            link: links.html,
            date: created_at,
        }
    })
}

export default UnsplashContent;