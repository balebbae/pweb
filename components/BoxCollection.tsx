import React from "react";
import Boxes from "./Boxes";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFile,
  IconGeometry,
} from "@tabler/icons-react";

const BoxCollection = () => {
  return (
    <div className="grid grid-cols-4 h-full">
      <Boxes
        title="LinkedIn"
        icon={<IconBrandLinkedin size={30} />}
        color="bg-indigo-50"
      />
      <Boxes
        title="Github"
        icon={<IconBrandGithub size={30} />}
        color="bg-sky-100"
      />
      <Boxes title="Resume" icon={<IconFile size={30} />} color="bg-blue-50" />
      <Boxes
        title="Projects"
        icon={<IconGeometry size={30} />}
        color="bg-green-50"
      />
    </div>
  );
};

export default BoxCollection;
