import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex  gap-[100px]">
      {/* text contianer */}
      <div className="flex-1 flex flex-col gap-[50px]">
        <h2 className="font-bold text-[25px] text-blue-500">About Agency</h2>
        <h1 className="text-[54px] font-bold leading-[60px]">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold text-[30px] text-blue-500">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold text-[30px] text-blue-500">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="flex flex-col gap-[10px] ">
            <h1 className="font-bold text-[30px] text-blue-500">10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>

      {/* image container */}
      <div className="relative flex-1">
        <Image src="/about.png" alt="" fill className="object-contain"/>
      </div>
    </div>
  );
};

export default AboutPage;
