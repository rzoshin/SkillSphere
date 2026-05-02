import Image from "next/image";
import Link from "next/link";

const curriculum = [
  { module: "Module 1", title: "Introduction & Setup" },
  { module: "Module 2", title: "Core Concepts" },
  { module: "Module 3", title: "Hands-on Projects" },
  { module: "Module 4", title: "Advanced Techniques" },
  { module: "Module 5", title: "Final Project & Deployment" },
];

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://skill-sphere-amber.vercel.app/data.json", { cache: "force-cache" });
  const allCourses = await res.json();
  const course = allCourses.find((c) => c.id == id);
  const { title, image, category, instructor, duration, rating, level, description } = course;

  const stars = Math.round(rating);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Hero */}
      <div className="relative w-full h-90 md:h-96 rounded-2xl overflow-hidden mb-10">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-xs font-medium bg-indigo-500 text-white px-3 py-1 rounded-full">
            {category}
          </span>
          <h1 className="text-white text-2xl md:text-4xl font-bold mt-2 leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < stars ? "text-yellow-400" : "text-gray-500"}>★</span>
            ))}
            <span className="text-white text-sm ml-1">{rating} / 5</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: details */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* Meta row */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Instructor", value: instructor },
              { label: "Duration", value: duration },
              { label: "Level", value: level },
            ].map(({ label, value }) => (
              <div key={label} className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-3 flex flex-col">
                <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">{label}</span>
                <span className="text-sm font-semibold text-indigo-900 mt-0.5">{value}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-[#002f5f] mb-2">About this course</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="text-xl font-bold text-[#002f5f] mb-4">Course Curriculum</h2>
            <div className="flex flex-col gap-3">
              {curriculum.map((item, i) => (
                <div key={i} className="flex items-center gap-4 border border-indigo-100 rounded-xl px-5 py-4 bg-white hover:border-indigo-300 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs text-indigo-400 font-medium">{item.module}</p>
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: enroll card */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 border border-indigo-100 rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[#002f5f]">Enroll in this course</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              {["Full lifetime access", "Certificate of completion", "Hands-on projects", "Community access"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-indigo-500">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors">
              Enroll Now
            </button>
            <Link href="/all-courses" className="text-center text-sm text-indigo-400 hover:text-indigo-600 transition-colors">
              ← Back to all courses
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;