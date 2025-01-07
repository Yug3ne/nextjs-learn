"use client";

import NavLink from "./navLink";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="hidden md:flex gap-[10px] items-center ">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-[10px] cursor-pointer font-bold bg-white text-bgColor">
              Log Out
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className="md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className="md:hidden absolute top-[100px] right-0 w-[50%] h-[calc(100vh-100px)] flex flex-col gap-[10px] items-center justify-center">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
