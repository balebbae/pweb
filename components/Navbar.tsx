import React from "react";
import NavLinks from "./NavLinks";
import {
  IconHome,
  IconUser,
  IconGeometry,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFile,
} from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="width-full flex items-center justify-center">
      <div className="bg-dashgray rounded-full flex items-center justify-center p-2 mt-3">
        <div className="flex items-center gap-x-8 px-10 bg-white rounded-full p-3 ">
          <NavLinks title="Home" icon={<IconHome />} />
          <NavLinks title="About" icon={<IconUser />} />
          <NavLinks title="LinkedIn" icon={<IconBrandLinkedin />} />
          <NavLinks title="Github" icon={<IconBrandGithub />} />
          <NavLinks title="Resume" icon={<IconFile />} />
          <NavLinks title="Projects" icon={<IconGeometry />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
