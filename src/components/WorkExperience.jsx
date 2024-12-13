import Section from "./Section";

export default function WorkExperience() {
  return (
    <Section title="Work Experience">
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <h3 className="font-bold text-blue-800 text-xs">
            React.js Developer
          </h3>
          <span className="text-gray-600 text-xs">Feb 2022 - Present</span>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-gray-700 text-xs font-semibold">
            Konnektable Technologies Ltd.
          </p>
          <span className="text-gray-600 text-xs">Ireland-Greece</span>
        </div>
        <ul className="list-disc list-inside text-gray-700 text-xs">
          <li>
            Delivered frontend components for the SnR project in 3 months,
            resolving delays.
          </li>
          <li>
            Improved user experience with responsive design and data
            visualizations for NAIADES.
          </li>
          <li>
            Completed KYKLOS 4.0 frontend a month ahead of schedule under tight
            constraints.
          </li>
          <li>
            Built OncoScreen's frontend to aid early-stage medical research.
          </li>
          <li>
            Learnt basic Next.js and Developed A-AAgora's frontend with it,
            including an interactive map.
          </li>
        </ul>
      </div>
    </Section>
  );
}
