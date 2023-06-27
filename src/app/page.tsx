import GetYouTubeContent from "@mmccalldev/lib/YouTubeContent";
import GetGitHubContent from "@mmccalldev/lib/GitHubContent";
import GetUnsplashContent from "@mmccalldev/lib/UnsplashContent";
import GetTwitchContent from "@mmccalldev/lib/TwitchContent";

import ContentGrid from "../components/ContentGrid";
import VerticalCenter from "@mmccalldev/components/VerticalCenter";
import NavigationBar from "@mmccalldev/components/NavigationBar";
import Footer from "@mmccalldev/components/Footer";
import GetBlogContent from "@mmccalldev/lib/BlogContent";
import GitHubCalendarWrapper from "@mmccalldev/components/GitHubCalendar";
import DynamicBackground from "@mmccalldev/components/DynamicBackground";

async function getContent() {
    const [youtubeContent, githubContent, unsplashContent, twitchContent, blogContent] = await Promise.all([
        GetYouTubeContent(),
        GetGitHubContent(),
        GetUnsplashContent(),
        GetTwitchContent(),
        GetBlogContent()]);

    return (await Promise.all([...youtubeContent, ...githubContent, ...unsplashContent, ...twitchContent, ...blogContent]))
        .sort((a, b) => {
            return (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
        });
}

export default async function Page() {
    const content = await getContent();
    return (
        <>
            <NavigationBar position={"fixed"}/>
            <DynamicBackground>
            <div className={"svh-100"}>
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
            </DynamicBackground>
            <div className={"py-5 bg-body"}>
                <div className={"container"}>
                    <div className={"mb-5 row"}>
                        <div className={"col-auto mx-auto"}>
                            <GitHubCalendarWrapper/>
                        </div>
                    </div>
                </div>
                <ContentGrid content={content}/>
            </div>
            <Footer/>
        </>
    );
}