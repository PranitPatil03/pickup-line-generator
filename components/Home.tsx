"use client";

import Image from "next/image";
import backgroundImage from "../app/images/bg.png";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <main className="relative flex items-center justify-center w-full h-screen">
      <Image
        src={backgroundImage}
        alt="backgroundImage"
        layout="fill"
        objectFit="cover"
        className="z-0 relative"
      />
      <div className=" z-10 flex flex-col items-center justify-center text-center">
        <div className="p-3 flex items-center justify-center bg-[#FF2157] rounded-full absolute top-[56%] ">
          <Heart className="text-white fill-white mr-2" />
          <Button
            className="text-white font-grand text-2xl md:text-3xl"
            variant="ghost"
          >
            <Link href="login">Generate one for me</Link>
          </Button>
          <Heart className="text-white fill-white ml-2" />
        </div>
      </div>
    </main>
  );
};

export default Home;
