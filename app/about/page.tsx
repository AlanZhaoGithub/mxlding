import Particles from "@/components/Particles";
import Header from "@/components/Header";
import Image from "next/image";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiCplusplus, SiTypescript, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";


const skills = [
  // Web Development
  { name: "React", icon: <FaReact className="text-blue-500 w-5 h-5" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700 w-5 h-5" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-5 h-5" /> },

  // Backend / Frameworks
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-5 h-5" /> },
  { name: "Django", icon: <SiDjango className="text-green-800 w-5 h-5" /> },

  // Core Languages
  { name: "Python", icon: <FaPython className="text-yellow-500 w-5 h-5" /> },
  { name: "Java", icon: <FaJava className="text-red-600 w-5 h-5" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 w-5 h-5" /> },
];



export default function AboutMe() {
  return (
    
      <div className="animate-[fade-in_0.3s_forwards]">
        <Header></Header>
        <Particles
          className="absolute inset-0 -z-10 animate-pulse"
          quantity={100}
          staticity={40}
        />
        <div className="pt-16 px-8 md:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-dark-text md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-dark-text-secondary">
            A quick introduction to me, my interests, and the things I’m passionate about.
          </p>
          <div className="w-full h-px my-10 bg-zinc-800" />
        </div>
        <div className="px-8 md:px-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="mb-8 mx-auto md:hidden relative rounded-lg w-[100%] max-w-[400px] h-[400px] overflow-hidden">
                <Image
                  src="/placeholder1.jpg"
                  alt="Alan Zhao"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg mb-4">
                Hi, I’m <span className="font-semibold text-blue-accent">Alan Zi Lun Zhao</span>, 
                a Computer Science graduate from the 
                <span className="font-semibold text-blue-accent"> University of Toronto</span>. 
                I’m driven by a passion for creating innovative software and hardware, and I’m 
                excited to keep turning ambitious ideas into real-world impact.
              </p>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 shadow-sm hover:shadow-md transition"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))} 
              </div>
              <p className="my-6">
                When I’m not building software, I enjoy cooking, hitting the gym, 
                playing video games, and listening to music.
              </p>
              <a href="/projects"
                className="inline-block bg-blue-600 text-dark-text px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Explore My Projects
              </a>
            </div>

            {/* Right: Optional Image */}
            <div className="hidden md:block relative rounded-lg w-[100%] max-w-[400px] h-[400px] overflow-hidden">
              <Image
                src="placeholder1.jpg"
                alt="Alan Zhao"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  );
}