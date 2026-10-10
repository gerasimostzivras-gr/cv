import Section from "./Section";

export default function Education() {
  return (
    <Section title="Education">
      <div>
        <div className="flex justify-between">
          <h3 className="font-bold text-blue-800 text-xs">
            Bachelor of Biology
          </h3>
          <span className="text-gray-600 text-xs">Graduated in 2022</span>
        </div>
        <p className="text-gray-700 text-xs">
          University of Crete, School of Science and Technology, Biology
          Department
        </p>
      </div>
    </Section>
  );
}
