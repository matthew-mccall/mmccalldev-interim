import {readdirSync, readFileSync} from "fs";
import {compileMDX} from "next-mdx-remote/rsc";
import {Content} from "@mmccalldev/lib/Content";
import ContentGrid from "@mmccalldev/components/ContentGrid";
import NavigationBar from "@mmccalldev/components/NavigationBar";

export default async function Page() {

    // get all .mdx files in the src/blog directory

    const frontMatterPromises: Promise<Frontmatter & {slug: string}>[] = readdirSync('src/blog')
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
            const data = readFileSync(`src/blog/${file}`, 'utf8');
            const { frontmatter } = await compileMDX<Frontmatter>({
                source: data,
                options: {
                    parseFrontmatter: true,
                }
            });

            return {...frontmatter, slug: file.replace('.mdx', '')};
        })

    const blogCards: Content[] = (await Promise.all(frontMatterPromises))
        .map((post) => {
            return {
                title: post.title,
                date: "",
                link: `/blog/${post.slug}`,
            }
        })

    return (
        <>
            <div className={"min-vh-100 d-flex flex-column"}>
                <NavigationBar position={"sticky"} />
                <div className={"py-5"}>
                    <div className={"container text-light"}>
                        <h1 className={"display-3 fw-semibold"}>Matthew's Blog</h1>
                        <p className={"lead"}>A collection of my thoughts, ideas, and announcements.</p>
                    </div>
                </div>
                <div className={"bg-body py-5 flex-grow-1"}>
                    <ContentGrid content={blogCards} />
                </div>
            </div>
        </>
    )
}