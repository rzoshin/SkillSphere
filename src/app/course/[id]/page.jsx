
import Image from "next/image";

const CourseDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://skill-sphere-amber.vercel.app/data.json', {cache: 'force-cache'});
    const allCourses = await res.json();

    const currentCourse = allCourses.find(course => course.id == id);
    console.log(currentCourse);
    const {title, image, category, instructor, duration, rating, level, description} = currentCourse;
    return (
        <div className="mx-auto mt-20">
            <div className="flex gap-4 items-center">
                <div className="relative aspect-auto w-200 h-150">
                    <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 28vw"
                    className='object-contain rounded-lg'
                />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl">Title: {title}</h1>
                    <p className="text-2xl">Category: {category}</p>
                    <span className="text-xl">Instructor: {instructor}</span>
                    <span className="text-lg">Duration: {duration}</span>
                    <span className="text-lg">Rating: {rating}</span>
                    <span className="text-lg">Level: {level}</span>
                    <p className="text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;