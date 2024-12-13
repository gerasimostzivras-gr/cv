import { AtSign, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { skillData } from "../helpers/data";
import profilePictrue from "../assets/images/profile.png";

export default function Sidebar() {
  return (
    <div className="bg-blue-800 text-white p-4 col-span-1 print:p-3 print:bg-blue-800">
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
          ReactJS Dev @KT | Aspiring Full-Stack | Ex-Biologist
        </p>
      </div>

      {/* Contact Details */}
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
          <Linkedin size={12} className="mr-2" />
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
          <Github size={12} className="mr-2" />
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

      {/* Skills with Grading */}
      <div className="mt-4">
        <h2 className="text-sm font-semibold border-b-2 border-blue-500 pb-1 mb-2">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {skillData.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[10px]">{item.skill}</span>
              </div>
              <div className="w-full bg-blue-600 rounded-full h-1">
                <div
                  className="bg-white h-1 rounded-full"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
