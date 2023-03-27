import {Content, ContentProvider} from "@mmccalldev/lib/Content";
import {google} from "googleapis";

const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY
});

const GetYouTubeContent: ContentProvider = async (): Promise<Content[]> => {

    // Get recent videos from my channel
    const response = await youtube.search.list({
        part: ["snippet", "id"],
        channelId: process.env.YOUTUBE_CHANNEL_ID,
        order: "date",
        maxResults: 10,
    });

    let content: Content[] = [];

    if (!response.data.items) {
        return content;
    }

    // For each video, get the video details
    for (const item of response.data.items!) {
        let snippet = item.snippet;

        if (!snippet) {
            continue;
        }

        let thumbnailUrl = "";

        if (!snippet.thumbnails) {
            continue;
        }

        if (snippet.thumbnails.high && snippet.thumbnails.high.url) {
            thumbnailUrl = snippet.thumbnails.high.url;
        } else if (snippet.thumbnails.medium && snippet.thumbnails.medium.url) {
            thumbnailUrl = snippet.thumbnails.medium.url;
        } else if (snippet.thumbnails.default && snippet.thumbnails.default.url) {
            thumbnailUrl = snippet.thumbnails.default.url;
        }

        if (!snippet.title || !snippet.publishedAt) {
            continue;
        }

        if (!item.id || !item.id.videoId) {
            continue;
        }

        content.push({
            image: thumbnailUrl,
            title: snippet.title,
            description: snippet.description,
            link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            date: snippet.publishedAt
        });
    }

    return content;
}

export default GetYouTubeContent;