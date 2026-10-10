import Section from "./Section";

export default function WorkExperience() {
  return (
    <Section title="Work Experience">
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <h3 className="font-bold text-blue-800 text-xs">
            Frontend Developer
          </h3>
          <span className="text-gray-600 text-xs">Feb 2022 - Present</span>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-gray-700 text-xs font-semibold">
            Konnektable Technologies Ltd.
          </p>
          <span className="text-gray-600 text-xs">Ireland-Greece</span>
        </div>
        <p className="text-gray-700 text-xs leading-relaxed">
          Developed and maintained React and Next.js applications for European
          research and development projects across multiple domains. Delivered
          frontend solutions under tight deadlines, implemented responsive
          interfaces and data visualizations, and contributed to UI/UX
          decisions. Worked on accessibility, performance optimization, API
          integration, and codebase refactoring, while collaborating with
          multidisciplinary teams to address technical challenges and meet
          project requirements.
        </p>
      </div>
    </Section>
  );
}
