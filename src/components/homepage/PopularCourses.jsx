import CourseCard from '../allcourses/CourseCard';

const PopularCourses = async() => {
    const res = await fetch('https://skill-sphere-amber.vercel.app/data.json');
    const courses = await res.json();
    const data = courses.slice(0, 3);
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Popular Courses</h1>
            <div className='grid grid-cols-3 gap-6'>     
            {
                data.map((course) => <CourseCard key={course.id} course={course} />)
                
            }
            </div>
        </div>
    );
};

export default PopularCourses;