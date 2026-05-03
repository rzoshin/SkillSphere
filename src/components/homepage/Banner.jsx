import { ArrowShapeTurnUpRight } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/banner.png" // your existing bg image
        alt=""
        width={1600}
        height={900}
        className="absolute inset-0 w-full h-full object-stretch brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060d1f]/95 via-[#060d1f]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
            🚀 2.1 Million learners and growing
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Take Your Skills to the{" "}
            <span className="text-indigo-400">Next Level</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Learn skills that actually matter. Our courses are built around hands-on projects, expert mentors, and career-ready outcomes — so you grow faster than you thought possible.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/all-courses">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Explore Courses <ArrowShapeTurnUpRight className="inline-block ml-1" />
              </button>
            </Link>
            <Link href="#learn-more">
              <button className="border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-xl transition-colors text-sm">
                Learn More
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4 border-t border-white/10 flex-wrap">
            {[
              { value: "2.1M+", label: "Learners" },
              { value: "200+", label: "Courses" },
              { value: "50+", label: "Instructors" },
              { value: "4.8★", label: "Avg Rating" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-white font-bold text-xl">{value}</p>
                <p className="text-gray-400 text-xs">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;