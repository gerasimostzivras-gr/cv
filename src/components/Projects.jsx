import { skillColorMap, projectsData } from "../helpers/data";
import Section from "./Section";

export default function Projects() {
  return (
    <Section title="Projects">
      {projectsData.map((project, index) => (
        <div key={index} className="mb-2">
          <div className="flex justify-between">
            <h3 className="font-bold text-blue-800 text-xs">{project.name}</h3>
          </div>
          <p className="text-gray-700 text-xs mb-1">{project.description}</p>

          <div className="flex flex-wrap gap-1">
            {project.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-1 py-0.5 rounded text-[0.6rem] ${
                  skillColorMap[skill] || "bg-gray-100 text-gray-800"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="mb-2">
        <p className="font-semibold text-blue-600 text-xs">
          For more projects, please ask me!
        </p>
      </div>
    </Section>
  );
}
