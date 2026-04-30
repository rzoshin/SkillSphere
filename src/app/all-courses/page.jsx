import CourseCard from "@/components/allcourses/CourseCard";

const AllCoursesPage = async () => {
    const res = await fetch('/public/data.json');
    const allCourses = await res.json();
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>All Courses</h1>
            <div className='grid grid-cols-4 gap-6'>     
            {
                allCourses.map((course) => <CourseCard key={course.id} course={course} />)
                
            }
            </div>
        </div>
    );
};

export default AllCoursesPage;