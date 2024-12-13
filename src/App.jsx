import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import { skillColorMap, projectsData } from "./helpers/data";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-3 bg-white text-xs print:text-xs print:m-0 print:p-0 print:max-w-full h-screen print:h-full overflow-hidden">
      {/* Blue Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-4 col-span-2 print:p-3">
        {/* Introduction */}
        <Section title="Introduction">
          <p className="text-gray-700 text-xs">
            Innovative software engineer with expertise in full-stack
            development and AI technologies. Passionate about creating
            efficient, scalable solutions that drive technological advancement
            and solve complex business challenges.
          </p>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <div className="mb-2">
            <div className="flex justify-between">
              <h3 className="font-bold text-blue-800 text-xs">
                React.js Developer
              </h3>
              <span className="text-gray-600 text-xs">Feb 2022 - Present</span>
            </div>
            <p className="text-gray-700 text-xs">
              Konnektable Technologies Ltd., Ireland-Greece
            </p>
            <ul className="list-disc list-inside text-gray-700 text-xs">
              <li>
                Accelerated project timelines: Completed all required frontend
                components for the SnR R&D project within three months,
                resolving significant development delays.
              </li>
              <li>
                Enhanced usability: Applied responsive design principles and
                implemented data visualizations for the NAIADES project,
                improving user experience.
              </li>
              <li>
                Delivered ahead of schedule: Led the frontend development for
                KYKLOS 4.0, meeting all functional and design requirements a
                month before the deadline despite tight constraints.
              </li>
              <li>
                Supported research innovation: Developed a frontend for the
                OncoScreen project based on doctor-provided assumptions,
                facilitating early-stage research.
              </li>
              <li>
                Mastered new technologies: Rapidly learned Next.js for the
                A-AAgora project, building its complete frontend, including an
                interactive map, and currently optimizing the project’s SEO.
              </li>
            </ul>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {projectsData.map((project, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <h3 className="font-bold text-blue-800 text-xs">
                  {project.name}
                </h3>
              </div>
              <p className="text-gray-700 text-xs mb-1">
                {project.description}
              </p>

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
        </Section>

        {/* Education */}
        <Section title="Education">
          <div>
            <div className="flex justify-between">
              <h3 className="font-bold text-blue-800 text-xs">
                Bachelor of Science in Molecular Biology
              </h3>
              <span className="text-gray-600 text-xs">Graduated in 2022</span>
            </div>
            <p className="text-gray-700 text-xs">
              University of Crete, Heraklion Campus
            </p>
          </div>
        </Section>

        {/* Achievements */}
        <Section title="Publications">
          <p>
            Biotechnology under extreme conditions: Lichens after extreme UVB
            radiation and extreme temperatures produce large amounts of hydrogen
            Journal of Biotechnology · Dec 10, 2021
          </p>
        </Section>

        {/* Volunteering */}
        <Section title="Volunteering">
          <p>
            2019 - Co-organized a two-day conference titled “Pseudoscience &
            Irrationalism: A Hindrance to Science and Logic”
          </p>
        </Section>

        {/* Interests */}
        <Section title="Interests">
          <p className="text-gray-700 text-xs">
            Tabletop game development, drawing, poetry, creative writing.
          </p>
        </Section>
      </div>
    </div>
  );
}
