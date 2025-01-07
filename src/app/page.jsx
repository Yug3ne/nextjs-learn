import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-[100px]">
      {/* text container */}
      <div className="flex-1 flex flex-col gap-[30px]">
        <h1 className="text-[96px] font-bold leading-[100px] ">
          Creative Thoughts Agency.
        </h1>
        <p className="text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-[20px]">
          <button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px] bg-blue-500 text-white ">
            Learn More
          </button>
          <button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px] bg-white text-bgColor">
            Contact
          </button>
        </div>
        <div className="relative w-[500px] h-[50px] grayscale-[1] ">
          <Image src="/brands.png" alt="" fill className="" />
        </div>
      </div>
      {/* image contianer */}
      <div className="relative flex-1">
        <Image src="/hero.gif" alt="" fill className="" />
      </div>
    </div>
  );
};

export default Home;
