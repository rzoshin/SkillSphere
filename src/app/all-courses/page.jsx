
import CourseCard from "@/components/allcourses/CourseCard";
import SearchInput from "@/components/allcourses/SearchInput";
import { Button, InputGroup, SearchFieldSearchIcon, TextField } from "@heroui/react";

const AllCoursesPage = async() => {
  const res = await fetch("https://skill-sphere-amber.vercel.app/data.json", {cache: 'no-store'});
  const allCourses = await res.json();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-3xl text-center font-bold my-5 text-[#002f5f]">All Courses</h1>
        <TextField className="w-60" name="email">
                <InputGroup>
                  <InputGroup.Input
                  type="text"
                  
                  placeholder="Search Courses"
                   />
                  <InputGroup.Suffix>
                    <Button variant="text" color="accent">
                      <SearchFieldSearchIcon />
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
