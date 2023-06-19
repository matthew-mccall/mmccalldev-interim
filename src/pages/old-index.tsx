import ContentCard from "@mmccalldev/components/ContentCard";
import {GetStaticProps} from "next";
import GetYouTubeContent from "@mmccalldev/lib/YouTubeContent";
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
            <main>
                <NavigationBar />
                <DynamicBackground>
                    <div className={"vh-100"}>
                        <VerticalCenter>
                            <div className={"container text-light"}>
                                <h1 className={"display-1"}>Matthew McCall</h1>
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
