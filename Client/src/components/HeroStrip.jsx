import { BsGlobeAmericas } from "react-icons/bs";
import { PiNotepadFill } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { BiSolidInstitution } from "react-icons/bi";

const data = [
  {
    id: 1,
    icon: <BsGlobeAmericas />,
    number: "50+",
    name: "Cities",
  },
  {
    id: 2,
    icon: <PiNotepadFill />,
    number: "80+",
    name: "Modules",
  },
  {
    id: 1,
    icon: <GiGraduateCap />,
    number: "10K+",
    name: "Students",
  },
  {
    id: 1,
    icon: <BiSolidInstitution />,
    number: "100+",
    name: "Institutes",
  },
];

function HeroStrip() {
  return (
    <div className="p-6 flex gap-6">
      {data.map((card) => (
        <div
          key={card.id}
          className="flex gap-4 items-center border-2 border-sky-500 p-2 px-3 rounded-lg"
        >
          <div className="text-2xl text-gray-700">{card.icon}</div>
          <div className="flex flex-col gap-1 text-xs text-sky-500 font-medium">
            <span>{card.number}</span>
            <span>{card.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroStrip;
