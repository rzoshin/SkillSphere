import { ArrowDownToLine, ArrowUpRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const levelColor = {
  Beginner: "bg-green-50 text-green-700 border-green-200",
  Intermediate: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Advanced: "bg-red-50 text-red-700 border-red-200",
};
  const { id, title, instructor, rating, level, duration, category, image } = course;
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${levelColor[level] || "bg-indigo-50 text-indigo-600"}`}>
          {level}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">{category}</span>
        <h3 className="font-bold text-[#002f5f] text-base leading-snug line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">{instructor}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <span className="text-sm font-medium text-gray-700">⭐ {rating}</span>
          <Link href={`/course/${id}`} className="text-xs text-gray-400"><Button>View Details<ArrowUpRight /></Button></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;