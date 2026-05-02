import Link from "next/link";

const NewReleaseCard = ({ course }) => {
  const { id, title, instructor, rating, category, image, duration } = course;
  return (
    <Link href={`/courses/${id}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col">
      <div className="relative h-36 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-2 right-2 text-xs font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full">
          NEW
        </span>
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">{category}</span>
        <h3 className="font-bold text-[#002f5f] text-sm leading-snug line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-500">{instructor}</p>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <span className="text-xs font-medium text-gray-700">⭐ {rating}</span>
          <span className="text-xs text-gray-400">{duration}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewReleaseCard;