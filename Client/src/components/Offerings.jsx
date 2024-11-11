import { GiLabCoat } from "react-icons/gi";
import { MdFolderSpecial } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { BsClipboardDataFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import OfferingCard from "./OfferingCard";
const data = [
  {
    id: 1,
    icon: <MdFolderSpecial />,
    title: "Custom Specialization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis saepe pariatur nobis praesentium adipisci quasi obcaecati tempore quod, at molestias sint veniam odit et omnis natus voluptate impedit labore!",
  },
  {
    id: 2,
    icon: <GiLabCoat />,
    title: "Virtual Labs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis saepe pariatur nobis praesentium adipisci quasi obcaecati tempore quod, at molestias sint veniam odit et omnis natus voluptate impedit labore!",
  },
  {
    id: 3,
    icon: <IoDocumentText />,
    title: "AI Tests",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis saepe pariatur nobis praesentium adipisci quasi obcaecati tempore quod, at molestias sint veniam odit et omnis natus voluptate impedit labore!",
  },
  {
    id: 4,
    icon: <BsClipboardDataFill />,
    title: "Resume Builder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis saepe pariatur nobis praesentium adipisci quasi obcaecati tempore quod, at molestias sint veniam odit et omnis natus voluptate impedit labore!",
  },
  {
    id: 5,
    icon: <FaToolbox />,
    title: "Placement Preparation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis saepe pariatur nobis praesentium adipisci quasi obcaecati tempore quod, at molestias sint veniam odit et omnis natus voluptate impedit labore!",
  },
  {
    id: 6,
    icon: <RiLiveFill />,
    title: "AI Interviews",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis saepe pariatur nobis praesentium adipisci quasi obcaecati tempore quod, at molestias sint veniam odit et omnis natus voluptate impedit labore!",
  },
];
function Offerings() {
  return (
    <div className="bg-neutral-100 p-4">
      <div className="mt-6 mb-8 lg:mb-12 text-center font-semibold lg:text-3xl">
        <h2>Because We Offer What You Need</h2>
        <h2>
          At <span className="text-teal-500">Every Step</span> Of Your
        </h2>
        <h2 className="text-teal-500">Transformative Learning Journey</h2>
      </div>
      <div className=" flex flex-col flex-wrap gap-6 lg:gap-12 items-center mx-auto">
        {data.map((card, idx) => (
          <OfferingCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            idx={idx + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Offerings;
