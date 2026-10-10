import Section from "./Section";

const languageGroups = [
  {
    title: "Professional Proficiency",
    items: [
      { name: "Greek", level: "Native" },
      {
        name: "English",
        level: "C2 (Fluent), used daily in professional and personal communication",
      },
    ],
  },
  {
    title: "Additional Languages",
    items: [
      {
        name: "German",
        level: "Previously attained C1; good comprehension, limited recent use",
      },
      {
        name: "Japanese",
        level: "Previously attained JLPT N5 level, limited recent use",
      },
      { name: "Mandarin Chinese", level: "Beginner, currently studying" },
    ],
  },
];

export default function Languages() {
  return (
    <Section title="Languages">
      {languageGroups.map(({ title, items }) => (
        <div key={title} className="mb-2 last:mb-0">
          <h3 className="font-bold text-blue-800 text-xs mb-0.5">{title}</h3>
          <ul className="text-gray-700 text-xs space-y-0.5">
            {items.map(({ name, level }) => (
              <li key={name}>
                <span className="font-semibold text-blue-600">{name}</span> – {level}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
