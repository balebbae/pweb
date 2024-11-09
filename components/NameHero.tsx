import React from "react";
import { IconCode } from "@tabler/icons-react";
import ContactButton from "./ContactButton";

const NameHero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[25vh] gap-y-3">
      <div className="font-serif text-4xl">Caleb Bae</div>
      <div>
        <p className="font-mono mt-2">----- Software Engineer -----</p>
      </div>
      <IconCode />
      <ContactButton />
    </div>
  );
};

export default NameHero;
