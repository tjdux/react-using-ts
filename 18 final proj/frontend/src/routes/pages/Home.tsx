import { useLoaderData } from "react-router";
import AdBanner from "../../components/common/AdBanner";
import FeaturedPost from "../../components/post/FeaturedPost";
import PostGrid from "../../components/post/PostGrid";

export default function Home() {
  const {
    randomPost,
    popularPosts,
    latestPost,
  }: { randomPost: Post; popularPosts: Post[]; latestPost: Post[] } =
    useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {randomPost && <FeaturedPost post={randomPost} />}

      <div className="mt-8">
        <AdBanner />
      </div>

      <PostGrid title="Latest Post" posts={latestPost} />

      <div className="mt-8">
        <AdBanner />
      </div>

      <PostGrid title="Popular Post" posts={popularPosts} />
    </div>
  );
}
