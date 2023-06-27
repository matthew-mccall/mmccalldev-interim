import {Content} from "@mmccalldev/lib/Content";
import ContentGrid from "@mmccalldev/components/ContentGrid";
import GetBlogContent from "@mmccalldev/lib/BlogContent";
import DynamicBackground from "@mmccalldev/components/DynamicBackground";

export default async function Page() {

    const blogContent: Content[] = await Promise.all(await GetBlogContent())

    return (
        <>
            <DynamicBackground>
                <div className={"py-5"}>
                    <div className={"container text-light"}>
                        <h1 className={"display-3 fw-semibold"}>Matthew's Blog</h1>
                        <p className={"lead"}>A collection of my thoughts, ideas, and announcements.</p>
                    </div>
                </div>
            </DynamicBackground>
            <div className={"bg-body py-5 flex-grow-1"}>
                <ContentGrid content={blogContent} />
            </div>
        </>
    )
}