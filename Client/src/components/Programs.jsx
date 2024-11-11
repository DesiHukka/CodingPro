import React from "react";
import ProgramCard from "./ProgramCard";

const data = [
  {
    id: 1,
    img: "campustraining.jpg",
    title: "Campus Training",
    keywords: ["For Students", "24+ Modules", "10 instructors"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat impedit a ut voluptatibus amet? Laudantium possimus praesentium corrupti adipisci, iste quia doloribus tempore, libero quaerat aspernatur reprehenderit dignissimos nemo doloremque.",
  },
  {
    id: 2,
    title: "Professional Training",
    img: "professionaltraining.jpg",
    keywords: ["For Professionals", "24+ Modules", "10 instructors"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat impedit a ut voluptatibus amet? Laudantium possimus praesentium corrupti adipisci, iste quia doloribus tempore, libero quaerat aspernatur reprehenderit dignissimos nemo doloremque.",
  },
];
function Programs() {
  return (
    <div className="w-full flex flex-col md:items-center gap-8 p-6 bg-slate-200">
      <div className="mt-6 mb-6 lg:mb-10 text-center font-semibold lg:text-3xl">
        <h2>
          Check Out Our <span className="text-teal-500">Holistic Programs</span>{" "}
          Designed
        </h2>
        <h2>
          To Help You Reach Your <span className="text-teal-500">Goals</span>
        </h2>
      </div>
      {data.map((card) => (
        <div key={card.id} className="lg:my-10">
          <ProgramCard
            title={card.title}
            keywords={card.keywords}
            description={card.description}
            img={card.img}
          />
        </div>
      ))}
    </div>
  );
}

export default Programs;
