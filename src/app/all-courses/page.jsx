import CourseCard from "@/components/allcourses/CourseCard";
import SearchInput from "@/components/allcourses/SearchInput";

 const AllCoursesPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const res = await fetch("https://skill-sphere-amber.vercel.app/data.json", { cache: 'no-store' });
  const allCourses = await res.json();

  const query = resolvedParams?.q?.toLowerCase() || "";
  const filtered = query
    ? allCourses.filter((course) =>
        course.title.toLowerCase().includes(query)
      )
    : allCourses;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-3xl font-bold my-5 text-[#002f5f]">All Courses</h1>
        <SearchInput />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
