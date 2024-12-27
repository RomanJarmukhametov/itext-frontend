import { getAllBlogPostsData } from '@/data/loaders';
import BlogPostRenderer from './BlogPostRenderer';

export default async function BlogPageContent() {
  const strapiData = await getAllBlogPostsData();
  const blogPosts = strapiData?.data || [];

  return <BlogPostRenderer blogPosts={blogPosts} />;
}
