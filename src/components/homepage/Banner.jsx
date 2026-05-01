import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[60vh] w-full rounded-lg shadow-2xl mt-5 overflow-hidden">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
      <div className="absolute inset-0 p-20 flex items-center">
        {/* content */}
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
            Upgrade Your Skills for the Future
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-300">
            Learn Web Development, Design, Data Science, and more with
            industry-focused courses built for real-world success.
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
