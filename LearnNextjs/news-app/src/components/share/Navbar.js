"use client";
import { useProviderContext } from "@/context/Provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const {favNews}=useProviderContext()
  const [search, setSearch] = useState("");
  const router = useRouter();
  // [
  //   "Home",
  //   "General",
  //   "Business",
  //   "Sports",
  //   "Science",
  //   "Health",
  //   "Entertainment",
  //   "Technology",
  // ]
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "General",
      link: "/general",
    },
    {
      name: "Business",
      link: "/business",
    },
    {
      name: "Sports",
      link: "/sports",
    },
    {
      name: "Science",
      link: "/science",
    },
    {
      name: "Entertainment",
      link: "/entertainment",
    },
    {
      name: "Health",
      link: "/health",
    },
    {
      name: "Technology",
      link: "/technology",
    },
  ];

  const handleSearch = () => {
    // router.push(`/search/${search}`);
    router.push(`/search/${search}`);
    // window.location.href=`/search/${search}`
  };
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md flex items-center justify-between fixed w-[100%]">
      {/* Left - Logo and Menu */}
      <div className="flex items-center space-x-3">
        {/* <FiMenu className="text-2xl cursor-pointer" /> */}
        <h1 className="text-xl font-bold">
          <span className="text-blue-500">Your</span> News
        </h1>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((item) => (
          <Link
            key={item}
            href={item.link}
            className="hover:text-blue-400 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href={"/favourites"} className="hover:text-blue-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          ({favNews.length})
        </Link>
      </div>

      {/* Right - Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-lg px-2">
        <input
          type="text"
          placeholder="Explore news..."
          className="bg-transparent text-white px-3 py-1 outline-none w-40 md:w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-600 px-4 py-1 rounded-lg text-white font-semibold hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
}
