import React from "react";

interface BoxesProps {
  topic: string;
  logo?: string;
}
const Boxes = ({ topic, logo }: BoxesProps) => {
  return (
    <div className="border-x border-y-2 border-dashgray w-full h-20 border-r-2">
      {topic}
    </div>
  );
};

export default Boxes;
