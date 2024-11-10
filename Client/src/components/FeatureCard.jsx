import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="w-64 h-44 rounded-lg bg-white p-4 flex flex-col gap-2 overflow-hidden">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-base text-sky-800 font-medium">{title}</h3>
      <p className="text-xs leading-tight">{description}</p>
    </div>
  );
}

export default FeatureCard;
