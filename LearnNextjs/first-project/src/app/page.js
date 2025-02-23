import Image from "next/image";
import Para from "../components/Para";
import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/pageSections/HeroSection";
import NewArrival from "@/components/pageSections/NewArrival";
export default function Home() {
  return (
    <div className="">
      {/* <h1>hello</h1>
      <Para title="Demo" />
      <Para />
      <Button title="Demo Button" /> */}
      <HeroSection/>
      <NewArrival/>
    </div>
  );
}
