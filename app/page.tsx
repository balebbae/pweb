"use client";
import React from "react";
import BoxHero from "@/components/BoxHero";
import NameHero from "@/components/NameHero";
import BoxCollection from "@/components/BoxCollection";

export default function BackgroundBoxesDemo() {
  return (
    <div className="">
      <div className="">
        <NameHero />
      </div>
      <BoxHero />

      <div>
        <BoxCollection />
      </div>
    </div>
  );
}
