import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex items-center gap-[100px]">
      {/* image container */}
      <div className="relative flex-1 h-[600px]">
        <Image src="/contact.png" alt="" fill className="object-contain"/>
      </div>
      {/* form container */}
      <div className="flex-1">
        <form action="" className="flex flex-col gap-[20px]">
          <input    className="p-[20px] rounded-[5px]  border-none outline-none bg-bgSoft text-white" type="text" name="" placeholder="Full Name" />
          <input    className="p-[20px] rounded-[5px]  border-none outline-none bg-bgSoft text-white" type="email" name="" placeholder="Email" />
          <input    className="p-[20px] rounded-[5px]  border-none outline-none bg-bgSoft text-white" type="tel" name="" placeholder="Phone number" />
          <textarea className="p-[20px] rounded-[5px]  border-none outline-none bg-bgSoft text-white" name="" id="" cols="30" rows="10" placeholder="Message" />
          <button className="p-[20px] bg-blue-500 text-white font-bold border-none rounded-[5px] cursor-pointer">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
