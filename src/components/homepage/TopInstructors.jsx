import InstructorCard from './InstructorCard';

const TopInstructors = async() => {
    const res = await fetch('https://skill-sphere-amber.vercel.app/instructors.json', {cache: 'force-cache'});
    const instructors = await res.json();
    const data = instructors.slice(0, 3);
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-4xl text-center font-bold my-5 text-[#002f5f]'>Top Instructors</h1>
            <div className='grid grid-cols-1 gap-6'>     
            {
                data.map((instructor) => <InstructorCard key={instructor.id} instructor={instructor} />)
                
            }
            </div>
        </div>
    );
};

export default TopInstructors;