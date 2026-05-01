//   {
//     "id": 1,
//     "title": "Complete Web Development Bootcamp",
//     "instructor": "John Doe",
//     "duration": "20 hours",
//     "rating": 4.8,
//     "level": "Beginner",
//     "description": "Learn full-stack web development from scratch.",
//     "image": "https://i.ibb.co.com/GQ2yHXfH/web-Development.png",
//     "category": "Development"
//   },

import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const CourseCard = ({course}) => {
    const {id, title, image, category, description} = course;
    return (
        <Card className='rounded-xl'>
            <div className='relative w-full aspect-video'>
                <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-xl object-cover'
                />
                <Chip size="sm" color="accent" className='absolute right-2 top-2'>{category}</Chip>
            </div>
            
            <div>
                <h2 className='font-medium'>{title}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
            {/* <Link href={`/photos/${id}`}>
                <Button variant="primary" className="w-full">View</Button>
            </Link> */}
        </Card>

    );
};

export default CourseCard;