import React from "react";
import { Boxes } from "./ui/background-boxes";
import LinkedIn from "@/assets/linkedin.png";
import Image from "next/image";
import Link from "next/link";

const BoxHero = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-indigo-100 flex flex-col items-center justify-center z-40 border-2 border-dashgray mb-[-2px]">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />
      <Link href="https://www.linkedin.com/in/baecal000" className="z-30">
        <Image src={LinkedIn} alt="LinkedIn" className=" w-72" />
      </Link>
      <Boxes />
    </div>
  );
};

export default BoxHero;
