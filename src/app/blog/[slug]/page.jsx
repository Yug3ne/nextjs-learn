import Image from "next/image";

const SingleBlogPage = () => {
  return (
    <div className="flex gap-[100px]">
      {/* image */}
      <div className="flex-1 relative h-[calc(100vh-200px)]">
        <Image
          src="https://images.pexels.com/photos/29668090/pexels-photo-29668090/free-photo-of-charming-outdoor-cafe-with-leafy-canopy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      {/* text */}
      <div className="flex-[2] flex flex-col gap-[50px]">
        <h1 className="font-bold text-[64px]">Title</h1>
        <div className="flex items-center gap-3">
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            objectFit="contain"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span>Tom Cruise</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Published At</span>
            <span>01.01.2025</span>
          </div>
        </div>
        <div className="text-[20xp]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo non unde laborum. Quidem sapiente amet at, doloremque voluptates illo cupiditate et dignissimos voluptatem dolores fugiat repellendus necessitatibus! In, excepturi!</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
