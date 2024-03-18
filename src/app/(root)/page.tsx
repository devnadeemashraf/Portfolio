import MainContainer from "./_components/mainContainer";
import InformationSection from "./_components/informationSection";
import Chip from "./_components/chip";
import { ExternalLink, Github, Link, LinkIcon } from "lucide-react";
import ProjectsCard from "./_components/projectsCard";

export default function Home() {
  return (
    <MainContainer>
      <div className="flex flex-col gap-4">
        {/* Row One */}
        <div className="w-full h-full flex flex-col-reverse lg:grid lg:grid-cols-2 lg:mt-4">
          <div className="flex flex-col gap-4">
            {/* About */}
            <InformationSection title="About">
              <p className="text-sm lg:text-base">
                TypeScript developer, a design enthusiast and a Cat Lover
                capable of working across the entire stack, delivering
                exceptional customer facing products!
              </p>
            </InformationSection>

            {/* Work */}
            <InformationSection title="Work">
              <p className="text-sm lg:text-base">
                Working at AVRL, started as a Software Developer, primarily
                working with JavaScript creating RPAs. Currently working as a{" "}
                <span className="italic">
                  Client Solutions Advisor - Engineering Associate.
                </span>
              </p>
            </InformationSection>
          </div>

          {/* YOE */}
          <div className="relative w-full h-full flex flex-col items-center lg:items-end justify-start">
            <h1 className="text-[50px] lg:text-[120px] font-bold">
              {new Date().getFullYear() - 2021} Years
            </h1>
            <p className="mb-4 lg:mb-0 lg:absolute lg:bottom-[3.5rem] lg:right-[5px] text-base lg:text-xl font-light">
              of work experience
            </p>
          </div>
        </div>

        {/* Row Two and beyond */}
        {/* Skills */}
        <InformationSection title="Skills">
          <ul className="w-full flex items-center gap-4 flex-wrap mt-4">
            <Chip>TypeScript & JavaScript</Chip>
            <Chip>React & NextJS</Chip>
            <Chip>NodeJS & ExpressJS</Chip>
            <Chip>Web Sockets & Socket.io</Chip>
            <Chip>MongoDB</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Redis</Chip>
            <Chip>Github</Chip>
            <Chip>Docker</Chip>
            <Chip>TurboRepo</Chip>
            <Chip>HTML CSS</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>jQuery</Chip>
          </ul>
        </InformationSection>

        {/* Projects */}
        <InformationSection title="Projects" className="mb-4">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
            <ProjectsCard
              title="Bridge"
              href="#"
              repoURL="#"
              // description="A SaaS for the Content Creators and Service Providers. Collaborate with your Video Editors, Thumbnail Editors, Voice Actors aka Service Providers, on the GO!"
              description="Out Soon!"
            />
            <ProjectsCard
              title="CodeRTC"
              href="#"
              repoURL="#"
              // description="CodeRTC - Real Time Code Collaboration Application built using WebSockets. Real Time Chats while in room along with Real Time Code Updates."
              description="Out Soon!"
            />
            <ProjectsCard
              title="Auctions"
              href="#"
              repoURL="#"
              // description="An Auction-place to Buy/Sell Items. Really Want Something and see it listed? Keep Bidding unless its yours! All Happens Real Time!"
              description="Out Soon!"
            />
          </div>
        </InformationSection>
      </div>
    </MainContainer>
  );
}
