import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "About Company",
      link: "/about/about-company",
    },
    {
      name: "Todo",
      link: "/todo",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <div className="bg-orange-300 flex justify-center gap-4 text-3xl">
        {links.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
