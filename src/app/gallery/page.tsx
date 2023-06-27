import {Content} from "@mmccalldev/lib/Content";
import GetUnsplashContent from "@mmccalldev/lib/UnsplashContent";
import ContentGrid from "@mmccalldev/components/ContentGrid";
import DynamicBackground from "@mmccalldev/components/DynamicBackground";

export default async function Page() {

    const unsplashContent: Content[] =
        (await Promise.all(await GetUnsplashContent()))
        .sort((a, b) => {
            return (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
        });

    return (
        <>
            <DynamicBackground>
                <div className={"py-5"}>
                    <div className={"container text-light"}>
                        <h1 className={"display-3 fw-semibold"}>Gallery</h1>
                    </div>
                </div>
            </DynamicBackground>
            <div className={"bg-body py-5 flex-grow-1"}>
                <ContentGrid content={unsplashContent} maxColumns={3} />
            </div>
        </>
    )
}