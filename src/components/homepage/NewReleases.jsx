import Link from 'next/link';
import NewReleaseCard from "@/components/ui/NewReleaseCard";

const NewReleases = async () => {
  const res = await fetch('https://skill-sphere-amber.vercel.app/data.json');
  const courses = await res.json();
  const newCourses  = courses.slice(6, 9);

  return (
    <div className='max-w-7xl mx-auto my-20 px-4'>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h2 className='text-4xl font-bold text-[#002f5f]'>New Releases</h2>
          <span className="text-xs font-semibold bg-indigo-600 text-white px-3 py-1 rounded-full">NEW</span>
        </div>
        <Link href="/all-courses" className="text-sm text-indigo-500 hover:text-indigo-700 font-medium">
          View all →
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {newCourses.map((course) => <NewReleaseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
};



export default NewReleases;