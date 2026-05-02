import Link from 'next/link';
import CourseCard from "@/components/ui/CourseCard";

const PopularCourses = async () => {
  const res = await fetch('https://skill-sphere-amber.vercel.app/data.json');
  const courses = await res.json();
  const data = courses.slice(0, 3);

  return (
    <div className='max-w-7xl mx-auto my-20 px-4'>
      <div className="flex justify-between items-center mb-8">
        <h2 className='text-4xl font-bold text-[#002f5f]'>Popular Courses</h2>
        <Link href="/all-courses" className="text-sm text-indigo-500 hover:text-indigo-700 font-medium">
          View all →
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {data.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
};



export default PopularCourses;