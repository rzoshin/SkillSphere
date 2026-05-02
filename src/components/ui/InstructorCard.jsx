import Image from "next/image";

const InstructorCard = ({ instructor }) => {
  const { name, image, title, bio, expertise, experience, rating, students, courses } = instructor;
  const stars = Math.round(rating);

  return (
    <div className="group relative bg-white border border-indigo-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all duration-300">
      
      {/* Top color band */}
      <div className="h-24 bg-gradient-to-r from-indigo-600 to-indigo-400" />

      {/* Avatar — overlaps the band */}
      <div className="relative -mt-12 flex justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden relative">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-3 flex flex-col items-center text-center gap-2">
        <h2 className="text-lg font-bold text-[#002f5f]">{name}</h2>
        <p className="text-sm text-indigo-500 font-medium">{title}</p>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-1">
          {expertise.slice(0, 3).map((skill, i) => (
            <span key={i} className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 px-2.5 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex justify-between w-full mt-3 pt-3 border-t border-indigo-50 text-center">
          <div>
            <p className="text-sm font-bold text-[#002f5f]">{rating} ★</p>
            <p className="text-xs text-gray-400">Rating</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#002f5f]">{experience}</p>
            <p className="text-xs text-gray-400">Experience</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#002f5f]">{students?.toLocaleString()}</p>
            <p className="text-xs text-gray-400">Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;