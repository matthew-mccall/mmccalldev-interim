import Head from 'next/head'
import ContentCard from "@mmccalldev/components/ContentCard";
import {GetStaticProps} from "next";
import GetYouTubeContent from "@mmccalldev/lib/YouTubeContent";
import GetTwitterContent from "@mmccalldev/lib/TwitterContent";
import {Content} from "@mmccalldev/lib/Content";
import {useEffect} from "react";

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
                <div className={"container"}>
                    <h1>Matthew McCall</h1>
                    <div className={"row row-cols-md-3"} data-masonry='{"percentPosition": true }'>
                    {
                        content.map((content, index) => {
                            return (
                                <div className={"col mb-3"} key={index}>
                                    <ContentCard {...content}/>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </main>
        </>
    )
}
