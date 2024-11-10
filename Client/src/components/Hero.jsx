import { BsBank2 } from "react-icons/bs";
import { PiBuildingOfficeBold } from "react-icons/pi";
import HeroCard from "./HeroCard";

const data = [
  {
    id: 1,
    icon: <BsBank2 />,
    title: "Campus Training",
    description:
      "Designed for college students with a focus on xyz, xyz, xyz, lorem ipsum",
    btnText: "Explore",
  },
  {
    id: 2,
    icon: <PiBuildingOfficeBold />,
    title: "Professional Training",
    description:
      "Designed for college students with a focus on xyz, xyz, xyz, lorem ipsum",
    btnText: "Explore",
  },
];

function Hero() {
  return (
    <div className="container mx-auto flex md:items-center gap-4 lg:gap-8 justify-center p-6 ">
      <div className="w-1/2 aspect-square lg:aspect-video overflow-hidden">
        <h2 className="mb-4 font-bold text-2xl md:hidden">
          Where The World Learns To Code
        </h2>
        <img
          src="applemonitor.jpg"
          className="object-cover aspect-square lg:aspect-video"
        />
      </div>
      <div className="flex flex-1 gap-8 flex-col">
        <h2 className="font-bold text-3xl lg:text-5xl max-md:hidden">
          Where The World Learns To Code
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {data.map((card) => (
            <div key={card.id}>
              <HeroCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                btnText={card.btnText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
