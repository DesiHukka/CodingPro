import React from "react";
import { FaRegFileCode, FaUserGraduate } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    id: 1,
    icon: <FaUserGraduate />,
    title: "Created by IIT-IIM Alumni",
    description:
      "We have learn't from the best and strive to bring you the best",
  },
  {
    id: 2,
    icon: <GiArtificialIntelligence />,
    title: "A.I. Integration",
    description:
      "We have harnessed the power of A.I. to enhance and access your knowledge",
  },
  {
    id: 3,
    icon: <FaRegFileCode />,
    title: "In-app Coding",
    description:
      "The app features in-app coding, eliminating the need of laptops",
  },
  {
    id: 4,
    icon: <FaUserGraduate />,
    title: "Extensive E-books",
    description: "Deepen your understanding and mastery of the skills",
  },
  {
    id: 5,
    icon: <FaUserGraduate />,
    title: "Recorded Lectures",
    description: "Access lectures anywhere and anytime at your own pace",
  },
  {
    id: 6,
    icon: <FaUserGraduate />,
    title: "Flash Cards",
    description: "Make learning convenient and fun using flash cards",
  },
];

function Features() {
  return (
    <div className="bg-sky-600 py-8">
      <h2 className="font-semibold text-white text-2xl px-14 mb-8">
        What Sets Us Apart?
      </h2>
      <div className="flex justify-center gap-6 flex-wrap ">
        {data.map((card) => (
          <div key={card.id}>
            <FeatureCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
