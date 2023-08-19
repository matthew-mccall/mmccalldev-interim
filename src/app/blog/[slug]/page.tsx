import {notFound} from 'next/navigation'
import {readFileSync} from "fs";
import {compileMDX} from "next-mdx-remote/rsc";
import DynamicBackground from "@mmccalldev/components/DynamicBackground";
import Link from "next/link";

export default async function Page({params}: { params: { slug: string } }) {

    const {slug} = params;
    let mdxData: string;

    try {
        mdxData = readFileSync(`${process.cwd()}/src/blog/${slug}.mdx`, 'utf8');
    } catch (e) {
        notFound()
    }

    const {content, frontmatter} = await compileMDX<Frontmatter>({
        source: mdxData,
        options: {
            parseFrontmatter: true,
        }
    })

    return (
        <>
            <DynamicBackground>
                <div className={"py-5"}>
                    <div className={"container text-light"}>
                        <h1 className={"display-3 fw-semibold"}>{frontmatter.title}</h1>
                    </div>
                </div>
            </DynamicBackground>
            <div className={"py-5 bg-body flex-grow-1"}>
                <div className={"container"}>
                    <Link href={"/blog"}>Back to Blog</Link>
                    <p className={"fw-semibold text-secondary"}>{new Date(frontmatter.date).toDateString()}</p>
                    {content}
                </div>
            </div>
        </>
    )

}