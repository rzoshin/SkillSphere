import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative min-h-[90vh] w-full rounded-lg shadow-2xl mt-5">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
      <div className="absolute inset-0 p-18 flex items-center">
        {/* content */}
        <div className="px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
            Take Your Skills to the Next Level
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-300">
            Learn skills that actually matter. Join 2.1 million learners building real-world expertise. Our courses are built around hands-on projects, expert mentors, and career-ready outcomes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/all-courses">
              <Button className="text-white px-6 py-2 rounded-xl">
                Explore Courses 🚀
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-xl"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
