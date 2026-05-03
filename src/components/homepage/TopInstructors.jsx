import InstructorCard from "@/components/ui/InstructorCard";

const TopInstructors = async () => {
  const res = await fetch(
    "https://skill-sphere-amber.vercel.app/instructors.json",
    { cache: "no-store" },
  );
  const instructors = await res.json();
  const data = instructors.slice(0, 3);
  return (
    <div className="bg-indigo-100/50">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold my-5 text-[#002f5f] text-center mb-8">
          Top Instructors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
