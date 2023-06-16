import Head from 'next/head'
import ContentCard from "@mmccalldev/components/ContentCard";
import {GetStaticProps} from "next";
import GetYouTubeContent from "@mmccalldev/lib/YouTubeContent";
import GetTwitterContent from "@mmccalldev/lib/TwitterContent";
import GetGitHubContent from "@mmccalldev/lib/GitHubContent";
import GetUnsplashContent from "@mmccalldev/lib/UnsplashContent";
import {Content} from "@mmccalldev/lib/Content";
import {useEffect} from "react";
import VerticalCenter from "@mmccalldev/components/VerticalCenter";
import NavigationBar from "@mmccalldev/components/NavigationBar";
import {Fade} from "react-awesome-reveal";
import DynamicBackground from "@mmccalldev/components/DynamicBackground";

interface IndexProps {
    content: Content[]
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const youtubeContent = await GetYouTubeContent();
    const twitterContent = await GetTwitterContent();
    const githubContent = await GetGitHubContent();
    const unsplashContent = await GetUnsplashContent();

    const content = [...youtubeContent, ...twitterContent, ...githubContent, ...unsplashContent].sort((a, b) => {
        return (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
    })

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
                <DynamicBackground>
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
                                <Fade cascade damping={0.1} triggerOnce>
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
                </DynamicBackground>
            </main>
        </>
    )
}
