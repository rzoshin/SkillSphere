import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const InstructorCard = ({instructor}) => {
    const {name, title, bio} = instructor;
    return (
        <Card className='rounded-xl'>
            {/* <div className='relative w-full aspect-video'>
                <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-xl object-cover'
                />
                <Chip size="sm" color="accent" className='absolute right-2 top-2'>{category}</Chip>
            </div> */}
            <div>
                <h2 className='font-medium'>{name}</h2>
            </div>
            <div>
                <h2 className='font-medium'>{title}</h2>
            </div>
            <div>
                <p>{bio}</p>
            </div>
            {/* <Link href={`/photos/${id}`}>
                <Button variant="primary" className="w-full">View</Button>
            </Link> */}
        </Card>

    );
};

export default InstructorCard;

//   {
//     "id": 1,
//     "name": "John Doe",
//     "title": "Senior Full Stack Developer",
//     "expertise": ["JavaScript", "React", "Node.js", "MongoDB"],
//     "experience": "8+ years",
//     "rating": 4.8,
//     "students": 12000,
//     "courses": 6,
//     "bio": "Experienced full-stack developer specializing in modern web technologies and scalable applications.",
//     "image": "https://i.postimg.cc/1tWgFz7G/instructor1.png"
//   },