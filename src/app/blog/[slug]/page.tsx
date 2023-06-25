import {notFound} from 'next/navigation'
import {readFileSync} from "fs";
import {compileMDX} from "next-mdx-remote/rsc";

export default async function Page({params}: { params: { slug: string } }) {

    const {slug} = params;
    let mdxData: string;

    try {
        mdxData = readFileSync(`src/blog/${slug}.mdx`, 'utf8');
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
            <div className={"py-5"}>
                <div className={"container text-light"}>
                    <h1 className={"display-3 fw-semibold"}>{frontmatter.title}</h1>
                </div>
            </div>
            <div className={"py-5 bg-body flex-grow-1"}>
                <div className={"container"}>
                    {content}
                </div>
            </div>
        </>
    )

}