import projects from '@data/projects';
import ProjectCard from '@components/ProjectCard';
import Particles from '@/components/Particles';
import Header from '@/components/Header';

export default function ProjectsPage() {
  return (
    <div className="animate-[fade-in_0.3s_forwards]">
      <Header></Header>
      <Particles
        className="absolute inset-0 -z-10 animate-pulse"
        quantity={100}
        staticity={10}
      />
      <Particles
        className="absolute inset-0 -z-12 animate-[spin_50s_ease-in-out_infinite]"
        quantity={100}
        staticity={40}
      />
      <div className="pt-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-dark-text sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-dark-text-secondary">
          Here you’ll find projects ranging from class assignments to personal experiments, 
          highlighting what I enjoy building and learning.
        </p>
        <div className="w-full h-px my-10 bg-zinc-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project}/>
        ))}
      </div>
    </div>
  );
}
