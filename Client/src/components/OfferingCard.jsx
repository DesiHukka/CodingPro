import React from "react";

function OfferingCard({ icon, title, description, idx }) {
  return (
    <div
      className={`relative w-80 rounded-lg ${
        idx % 2 == 0 && "translate-x-1/2"
      } bg-white shadow-md flex flex-col gap-2 p-6`}
    >
      <div className="flex items-center gap-2">
        <span className="text-3xl text-sky-700">{icon}</span>
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="text-sm text-gray-600 line-clamp-3">{description}</div>
      <div className="w-8 h-8 p-2 flex justify-center items-center bg-teal-500 text-white rounded-full absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2">
        {idx}
      </div>
    </div>
  );
}

export default OfferingCard;