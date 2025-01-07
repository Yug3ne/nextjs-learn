import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* top */}
      <div className="flex">
        <div className="relative w-[300px] h-[400px]">
          <Image src={post.img} alt="" className="object-cover" fill />
        </div>
        <span className="font-[12px] m-auto -rotate-90">01.01.2025</span>
      </div>
      {/* bottom */}
      <div className="">
        <h1 className="w-[90px] text-[24px] mb-[20px]">{post.title}</h1>
        <p className="w-[90px] font-[300] mb-[20px] text-white">{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className="underline">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
