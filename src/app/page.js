import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import NewReleases from "@/components/homepage/NewReleases";
import PopularCourses from "@/components/homepage/PopularCourses";
import TopInstructors from "@/components/homepage/TopInstructors";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="dark:bg-black">
     <Banner />
     <PopularCourses />
     <TopInstructors />
     <NewReleases />
     <LearningTips />
    </div>
  );
}
