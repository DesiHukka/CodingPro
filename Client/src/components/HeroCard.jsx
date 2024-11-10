import { FaAngleRight } from "react-icons/fa";

function HeroCard({ icon, title, description, btnText }) {
  return (
    <div className="min-w-52 flex flex-col items-center gap-2 p-4 border-2 border-sky-500 rounded-lg shadow-md">
      <div className="text-2xl text-sky-800">{icon}</div>
      <h3 className="line-clamp-1 font-semibold text-sky-800">{title}</h3>
      <p className="max-sm:hidden line-clamp-1 lg:line-clamp-2 text-xs leading-normal text-slate-400">
        {description}
      </p>
      <button className="mt-2 text-sm bg-sky-500 text-white p-2 px-4 flex items-center rounded-lg gap-2">
        {btnText}
        <FaAngleRight className="text-lg" />
      </button>
    </div>
  );
}

export default HeroCard;
