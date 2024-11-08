"use client";
import React from "react";
import BoxHero from "@/components/BoxHero";
import NameHero from "@/components/NameHero";
import Boxes from "@/components/Boxes";

export default function BackgroundBoxesDemo() {
  return (
    <div className="">
      <div className="">
        <NameHero />
      </div>
      <BoxHero />
      <div className="grid grid-cols-4">
        <Boxes topic="LinkedIn" />
        <Boxes topic="GitHub" />
        <Boxes topic="Resume" />
        <Boxes topic="Projects" />
      </div>
    </div>
  );
}
