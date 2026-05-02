import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const InstructorCard = ({ instructor }) => {
  const { name, image, title, bio, expertise, experience, rating, students } = instructor;
  return (
    <Card className="rounded-xl p-7 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex gap-6 items-center">
        <div className="relative w-60 aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="font-medium text-2xl">{name}</h2>
          </div>
          <div>
            <h2 className="font-medium text-xl">{title}</h2>
          </div>
          <div>
            <p>{bio}</p>
          </div>
          <div>
            {
            expertise.map((skill, index) => (
              <Chip key={index} className="mr-2 mb-2 bg-white text-md border border-full" color="accent">
                {skill}
              </Chip>
            ))
          }
          </div>
          
          <span className="font-medium">Experience: {experience}</span>
            <div className="flex gap-4 mt-2">
                <span className="font-medium">Rating: {rating}</span>
            </div>
        </div>
      </div>
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
