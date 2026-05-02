import { ArrowUpRight, StarFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const { id, title, image, category, rating, instructor } = course;
  return (
    <Card className="rounded-xl p-6 border border-black-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover"
        />
      </div>

      <div>
        <h2 className="font-medium text-xl">{title}</h2>
      </div>
      <div>
        <p className="text-lg">{instructor}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
            <StarFill className="text-yellow-500 text-md" />
            <span className="text-md">{rating}</span>
        </div>
        <Link href={`/course/${id}`}>
        <Button variant="secondary" className="w-full">
          <ArrowUpRight />
        </Button>
        </Link>
      </div>
    </Card>
  );
};

export default CourseCard;
