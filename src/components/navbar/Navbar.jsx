import Link from "next/link"
import Links from "./Links"

const Navbar = () => {
  return (
    <div className='flex h-[100px] justify-between items-center'>
      <div className="font-bold text-[30px]">Logo</div>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar