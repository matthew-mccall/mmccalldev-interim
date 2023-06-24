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

    const {content} = await compileMDX<Frontmatter>({
        source: mdxData,
        options: {
            parseFrontmatter: true,
        }
    })

    return (
        <div className={"container text-light"}>
            <div className={"py-5 mt-5"}>
                {content}
            </div>
        </div>
    )

}