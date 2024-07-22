import fs from "node:fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "node:path";

export interface Frontmatter {
	title: string;
	date: string;
	slug: string;
	type: "page" | "blog";
}

const rootDirectory = path.resolve(process.cwd(), "content");
const blogsDirectory = path.resolve(rootDirectory, "blogs");

// This function should be called at build time to generate a list of valid slugs
export const getValidSlugs = async () => {
	const rootFiles = await fs.readdir(rootDirectory);
	const blogFiles = await fs.readdir(blogsDirectory);

	const rootSlugs = rootFiles
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => ({
			slug: file.replace(/\.mdx$/, ""),
			type: "page" as const,
		}));

	const blogSlugs = blogFiles
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => ({
			slug: file.replace(/\.mdx$/, ""),
			type: "blog" as const,
		}));

	return [...rootSlugs, ...blogSlugs];
};

export const getPostBySlug = async (slug: string, type: "page" | "blog") => {
	const filePath =
		type === "blog" ? path.resolve(blogsDirectory, `${slug}.mdx`) : path.resolve(rootDirectory, `${slug}.mdx`);

	const fileContent = await fs.readFile(filePath, { encoding: "utf8" });

	const { frontmatter, content } = await compileMDX<Frontmatter>({
		source: fileContent,
		options: { parseFrontmatter: true },
	});

	return { frontmatter: { ...frontmatter, slug, type }, content };
};

export const getAllPostsMeta = async (type?: "page" | "blog" | "all") => {
	const validSlugs = await getValidSlugs();

	const filteredSlugs = type ? validSlugs.filter((item) => type === "all" || item.type === type) : validSlugs;

	const posts = await Promise.all(
		filteredSlugs.map(async ({ slug, type }) => {
			try {
				const { frontmatter } = await getPostBySlug(slug, type);
				return frontmatter;
			} catch (error) {
				console.error(`Error processing file: ${slug}`, error);
				return null;
			}
		})
	);

	return posts.filter((post): post is Frontmatter => post !== null);
};
