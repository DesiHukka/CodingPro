import React from "react";
import { FaAngleRight } from "react-icons/fa";

function ProgramCard({ img, title, keywords, description }) {
  return (
    <div className="w-full max-w-[700px] bg-white p-2 rounded-lg flex max-sm:flex-col gap-2">
      <div className="flex-1 max-sm:aspect-video rounded-lg h-48 overflow-hidden">
        <img src={img} className="object-cover aspect-video rounded-lg" />
      </div>
      <div className="w-1/2 max-sm:w-full flex flex-col gap-4 pr-4">
        <h2 className="font-semibold line-clamp-1">{title}</h2>
        <div className="flex gap-1 ">
          {keywords.map((keyword, i) => (
            <span
              className={`pr-2 text-xs ${
                i < keywords.length - 1 && "border-r-2 border-r-gray-500"
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>
        <p className="text-xs line-clamp-3">{description}</p>
        <button className="self-end w-min rounded-lg flex items-center gap-1 p-2 px-4 bg-sky-500 text-white">
          <span className="text-xs">Explore</span> <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default ProgramCard;
