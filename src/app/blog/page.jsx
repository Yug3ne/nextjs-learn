import PostCard from "@/components/postCard";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  let posts = await getPosts();

  return (
    <div className="flex gap-[20px] flex-wrap">
      {posts.map((post) => (
        <PostCard post={post} key={post.id}/>
      ))}
      {/* <PostCard />
      <PostCard />
      <PostCard /> */}
    </div>
  );
};

export default BlogPage;
