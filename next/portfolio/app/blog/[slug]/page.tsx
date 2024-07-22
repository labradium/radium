import { getPostBySlug } from "@/lib/providers/mdx";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

const getPageContent = async (slug: string) => {
  try {
    const { frontmatter, content } = await getPostBySlug(slug, "blog");
    return { frontmatter, content };
  } catch (_error) {
    return null;
  }
};

export async function generateMetadata({ params }: Params) {
  const pageContent = await getPageContent(params.slug);

  if (!pageContent) {
    return { title: "Page not found" };
  }

  return { title: pageContent.frontmatter.title };
}

const Page = async ({ params }: Params) => {
  const pageContent = await getPageContent(params.slug);

  if (!pageContent) {
    notFound();
  }

  return (
    <div className="prose prose-invert mx-auto my-12 max-w-6xl dark:prose-invert">
      {pageContent.content}
    </div>
  );
};

export default Page;
