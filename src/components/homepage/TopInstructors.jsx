import InstructorCard from './InstructorCard';

const TopInstructors = async() => {
    const res = await fetch('https://skill-sphere-amber.vercel.app/instructors.json');
    const instructors = await res.json();
    const data = instructors.slice(0, 3);
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Instructors</h1>
            <div className='grid grid-cols-4 gap-6'>     
            {
                data.map((instructor) => <InstructorCard key={instructor.id} instructor={instructor} />)
                
            }
            </div>
        </div>
    );
};

export default TopInstructors;