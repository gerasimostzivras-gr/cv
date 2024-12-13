import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Achievements from "./Achievements";
import Volunteering from "./Volunteering";
import Interests from "./Interests";

export default function MainContent() {
  return (
    <div className="p-4 col-span-2 print:p-3">
      <WorkExperience />
      <Projects />
      <Education />
      <Achievements />
      <Volunteering />
      <Interests />
    </div>
  );
}
