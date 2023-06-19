import GetYouTubeContent from "@mmccalldev/lib/YouTubeContent";
import GetGitHubContent from "@mmccalldev/lib/GitHubContent";
import GetUnsplashContent from "@mmccalldev/lib/UnsplashContent";

import ContentGrid from "../components/ContentGrid";
import VerticalCenter from "@mmccalldev/components/VerticalCenter";

async function getContent() {
    const [youtubeContent, githubContent, unsplashContent] = await Promise.all([GetYouTubeContent(), GetGitHubContent(), GetUnsplashContent()])

    return [...youtubeContent, ...githubContent, ...unsplashContent]
        .sort((a, b) => {
            return (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
        });
}

export default async function Page() {
    const content = await getContent();
    return (
        <>
            <div className={"vh-100"}>
                <VerticalCenter>
                    <div className={"container text-light"}>
                        <h1 className={"display-1 fw-medium"}>Matthew McCall</h1>
                        <p className={"lead"}>Computer Science Major at Rensselaer Polytechnic Institute</p>
                        <div className={"row g-1"}>
                            <div className={"col-auto"}>
                                <span className="badge rounded-pill text-bg-light bg-opacity-75">C++</span>
                            </div>
                            <div className={"col-auto"}>
                                <span className="badge rounded-pill text-bg-light bg-opacity-75">Java</span>
                            </div>
                        </div>
                    </div>
                </VerticalCenter>
            </div>
            <div className={"py-5"}>
                <ContentGrid content={content}/>
            </div>
        </>
    );
}