import {ContentProvider} from "@mmccalldev/lib/Content";
import {readdirSync, readFileSync} from "fs";
import {compileMDX} from "next-mdx-remote/rsc";

const GetBlogContent: ContentProvider = async () => {
    // get all .mdx files in the src/blog directory

    return readdirSync(`${process.cwd()}/src/blog`)
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
            const data = readFileSync(`${process.cwd()}/src/blog/${file}`, 'utf8');
            const {frontmatter} = await compileMDX<Frontmatter>({
                source: data,
                options: {
                    parseFrontmatter: true,
                }
            });

            return {...frontmatter, slug: file.replace('.mdx', '')};
        })
        .map(async (frontMatterPromise) => {
            return frontMatterPromise
                .then((frontMatter) => {
                    return {
                        ...frontMatter,
                        icon: "chat-left",
                        link: `/blog/${frontMatter.slug}`};
                })
        })
}

export default GetBlogContent;