import { ExternalLink, Github } from "lucide-react";

interface ProjectsCard {
  title: string;
  description: string;
  href: string;
  repoURL: string;
}

const ProjectsCard = ({
  href = "#",
  repoURL = "#",
  title,
  description,
}: ProjectsCard) => {
  return (
    <div className="w-full lg:max-w-[400px] bg-green-200 flex flex-col rounded-md">
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-end lg:justify-between px-4 py-2">
        <h1 className="text-base lg:text-xl font-medium mt-2">{title}</h1>
        <div className="flex gap-4 mt-2">
          <a href={href} target="_blank" className="text-green-800">
            <ExternalLink size={16} />
          </a>
          <a href={repoURL} target="_blank" className="text-green-800">
            <Github size={16} />
          </a>
        </div>
      </header>
      <p className="px-4 text-sm lg:text-base mt-4">{description}</p>
    </div>
  );
};

export default ProjectsCard;
