import Particles from "@/components/Particles";
import Header from "@/components/Header";
import Image from "next/image";

const skills = [
  "Python",
  "Java",
  "JavaScript/TypeScript",
  "React",
  "Next.js",
  "C++",
  "Flutter",
];

export default function AboutMe() {
  return (
    
      <div className="hidden w-screen h-px animate-[fade-in_0.3s_forwards] md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0">
          <Header></Header>
          <Particles
            className="absolute inset-0 -z-10 animate-pulse"
            quantity={100}
            staticity={40}
          />
          <div className="pt-16 px-16">
            <h2 className="text-3xl font-bold tracking-tight text-dark-text sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-dark-text-secondary">
              A quick introduction to me, my interests, and the things I’m passionate about.
            </p>
            <div className="w-full h-px my-10 bg-zinc-800" />
          </div>
        <section id="about" className="py-16 px-4 md:px-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <p className="text-lg mb-4">
                Hi, I’m <span className="font-semibold text-blue-accent">Alan Zi Lun Zhao</span>, 
                a Computer Science graduate from the 
                <span className="font-semibold text-blue-accent"> University of Toronto</span>. 
                I’m driven by a passion for creating innovative software and hardware, and I’m 
                excited to keep turning ambitious ideas into real-world impact.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill) => (
                  <span key={skill}
                    className="bg-blue-200 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mb-6">
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
                src="/placeholder1.jpg"
                alt="Alan Zhao"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
  );
}