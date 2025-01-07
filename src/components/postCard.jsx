import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* top */}
      <div className="flex">
        <div className="relative w-[300px] h-[400px]">
          <Image src="https://images.pexels.com/photos/29668090/pexels-photo-29668090/free-photo-of-charming-outdoor-cafe-with-leafy-canopy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="object-cover" fill />
        </div>
        <span className="font-[12px] m-auto -rotate-90">01.01.2025</span>
      </div>
      {/* bottom */}
      <div className="">
        <h1 className="w-[90px] text-[24px] mb-[20px]">Title</h1>
        <p className="w-[90px] font-[300] mb-[20px] text-gray-500">description</p>
        <Link href="/blog/post" className="underline">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;