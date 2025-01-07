import UserCard from "@/components/userCard";
import { getPost } from "@/lib/data";
import Image from "next/image";

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;

  let post = await getPost(slug);
  console.log(post);

  return (
    <div className="flex gap-[100px]">
      {/* image */}
      <div className="flex-1 relative h-[calc(100vh-200px)]">
        {post.img && (
          <Image src={post.img} alt="" fill className="object-cover" />
        )}
      </div>
      {/* text */}
      <div className="flex-[2] flex flex-col gap-[50px]">
        <h1 className="font-bold text-[64px]">{post.title}</h1>
        <div className="flex items-center gap-3">
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            objectFit="contain"
            className="rounded-full object-cover"
          />
          <UserCard userId={post.userId} />
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Published At</span>
            <span>01.01.2025</span>
          </div>
        </div>
        <div className="text-[20xp]">{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
