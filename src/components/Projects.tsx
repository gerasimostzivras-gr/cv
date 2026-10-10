import {
  formatProjectDates,
  skillColorMap,
  type Project,
  type SkillName,
} from "../helpers/data";
import Section from "./Section";

interface ProjectsProps {
  projects: Project[];
  title?: string;
}

export default function Projects({
  projects,
  title = "Projects",
}: ProjectsProps) {
  return (
    <Section title={title}>
      {projects.map((project, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between">
            <h3 className="font-bold text-blue-800 text-xs">{project.name}</h3>
            <span className="text-gray-600 text-xs">
              {formatProjectDates(project)}
            </span>
          </div>
          <p className="text-gray-700 text-xs leading-relaxed mt-0.5 mb-1.5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-1 py-0.5 rounded-sm text-[0.6rem] ${
                  skillColorMap[skill as SkillName] || "bg-gray-100 text-gray-800"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
