import { AtSign, Phone, Link, MapPin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { coreSkills, additionalSkills } from "../helpers/data";
import profilePictrue from "../assets/images/profile.png";

const sidebarClass =
  "flex flex-col bg-blue-800 text-white p-5 col-span-1 print:bg-blue-800";

function Header() {
  return (
    <div className="text-center mb-4">
      <div className="w-16 h-16 mx-auto mb-1">
        <img
          src={profilePictrue}
          className="rounded-full"
          alt="Gerasimos Tzivras"
        />
      </div>
      <h1 className="text-xl font-bold mb-1">Gerasimos Tzivras</h1>
      <p className="text-blue-200 text-xs">
        Frontend Dev @KT | Aspiring Full-Stack | Ex-Biologist
      </p>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <AtSign size={12} className="mr-2" />
        <span>gerasimostzivras@gmail.com</span>
      </div>
      <div className="flex items-center">
        <Phone size={12} className="mr-2" />
        <span>+30 69 090 38 403</span>
      </div>
      <div className="flex items-center">
        <Link size={12} className="mr-2" />
        <span>
          <a
            href="https://www.linkedin.com/in/gerasimos-tzivras-53ba57305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gerasimos-tzivras-53ba57305
          </a>
        </span>
      </div>
      <div className="flex items-center">
        <SiGithub size={12} className="mr-2" />
        <span>
          <a
            href="https://github.com/gerasimostzivras-gr"
            target="_blank"
            rel="noopener noreferrer"
          >
            gerasimostzivras-gr
          </a>
        </span>
      </div>
      <div className="flex items-center">
        <MapPin size={12} className="mr-2" />
        <span>Argostolion, Greece</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className={sidebarClass}>
      <Header />
      <ContactDetails />

      <div className="mt-5">
        <h2 className="text-sm font-semibold border-b-2 border-blue-500 pb-1 mb-2">
          Core Skills
        </h2>
        <SkillList skills={coreSkills} />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-semibold border-b-2 border-blue-500 pb-1 mb-2">
          Additional Skills &amp; Technologies
        </h2>
        <SkillList skills={additionalSkills} />
      </div>

      <QrCode />
    </div>
  );
}

// Second page: identity and contact only, so the page still stands on its own.
export function SidebarCompact() {
  return (
    <div className={sidebarClass}>
      <Header />
      <ContactDetails />
      <QrCode />
    </div>
  );
}

function QrCode() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/images/qr-code.png`}
      alt="QR code"
      className="mt-auto mx-auto w-36"
    />
  );
}

function SkillList({ skills }: { skills: string[] }) {
  return (
    <ul className="space-y-1 text-xs">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
