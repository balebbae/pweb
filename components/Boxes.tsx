import React from "react";

interface BoxesProps {
  title: string;
  icon: React.ReactNode;
  color: string;
}
const Boxes = ({ title, icon, color }: BoxesProps) => {
  return (
    <div className={`border-b-2 border-dashgray w-full ${color} `}>
      <div className="pl-6 pt-6">{icon}</div>
      <div className=" flex justify-center items-center pb-8">
        <span className="text-xl font-mono">{title}</span>
      </div>
    </div>
  );
};

export default Boxes;
