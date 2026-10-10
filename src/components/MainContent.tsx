import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Achievements from "./Achievements";
import Volunteering from "./Volunteering";
import Languages from "./Languages";
import Interests from "./Interests";
import { projectsData } from "../helpers/data";

// Page 1 only fits the first few projects; the rest continue on page 2.
const PROJECTS_ON_PAGE_ONE = 5;

export function PageOneContent() {
  return (
    <>
      <WorkExperience />
      <Projects projects={projectsData.slice(0, PROJECTS_ON_PAGE_ONE)} />
    </>
  );
}

export function PageTwoContent() {
  return (
    <>
      <Projects
        projects={projectsData.slice(PROJECTS_ON_PAGE_ONE)}
        title="Projects (continued)"
      />
      <Education />
      <Achievements />
      <Volunteering />
      <Languages />
      <Interests />
    </>
  );
}
