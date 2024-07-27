import { getAllPostsMeta } from "@/lib/providers/mdx";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/primitives/card";
import Link from "next/link";

export default async function Blog() {
	const posts = await getAllPostsMeta("blog");
	return (
		<div className="prose prose-invert mx-auto my-12 max-w-6xl dark:prose-invert">
			<h1 className="text-3xl font-bold">Blog</h1>
			<div className={"flex flex-wrap gap-4"}>
				{posts.map((post) => (
					<Link key={post.slug} href={`/blog/${post.slug}`}>
						<Card>
							<CardHeader>
								<CardTitle>{post.title}</CardTitle>
								<CardDescription>{post.date}</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
