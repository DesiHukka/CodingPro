import React from "react";
import { FaAngleRight } from "react-icons/fa";

function ProgramCard({ img, title, keywords, description }) {
  return (
    <div className="w-full bg-white p-2 rounded-lg flex gap-2">
      <div className="flex-1 h-48 overflow-hidden">
        <img src={img} className="object-cover" />
      </div>
      <div className="w-1/2 flex flex-col gap-4 pr-4">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex gap-1">
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
