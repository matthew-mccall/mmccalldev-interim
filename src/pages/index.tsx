import Head from 'next/head'
import ContentCard from "@mmccalldev/components/ContentCard";
import {GetStaticProps} from "next";
import GetYouTubeContent from "@mmccalldev/lib/YouTubeContent";
import GetTwitterContent from "@mmccalldev/lib/TwitterContent";
import {Content} from "@mmccalldev/lib/Content";
import {useEffect} from "react";
import VerticalCenter from "@mmccalldev/components/VerticalCenter";
import NavigationBar from "@mmccalldev/components/NavigationBar";
import {Fade} from "react-awesome-reveal";

interface IndexProps {
    content: Content[]
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const youtubeContent = await GetYouTubeContent();
    const twitterContent = await GetTwitterContent();

    const content = [...youtubeContent, ...twitterContent]

    return {
        props: { content }
    }
}

export default function Home({content}: IndexProps) {

    useEffect(() => {
        if (typeof document !== 'undefined') {
            require('jquery/dist/jquery.min.js')
            require('bootstrap/dist/js/bootstrap.bundle.min.js')
            require('masonry-layout/dist/masonry.pkgd.min.js')
        }
    })

    return (
        <>
            <Head>
                <title>Matthew McCall</title>
                <meta name="description" content="Matthew McCall's personal website, blog, and portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <div style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2)), url(https://bing.biturl.top/?format=image&index=0&mkt=en-US)",
                    backgroundPosition: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}>
                    <div className={"vh-100"}>
                        <VerticalCenter>
                            <div className={"container text-light"}>
                                <h1 className={"display-1"}>Matthew McCall</h1>
                            </div>
                        </VerticalCenter>
                    </div>
                    <div className={"py-5"}>
                        <div className={"container"}>
                            <div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"} data-masonry='{"percentPosition": true }'>
                                <Fade cascade damping={0.2}>
                                {
                                    content.map((content, index) => {
                                        return (
                                            <div className={"col mb-3"} key={index}>
                                                <ContentCard {...content}/>
                                            </div>
                                        )
                                    })
                                }
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
