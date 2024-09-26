"use client";

import { Github, Linkedin, User, Code, Award } from "lucide-react";

const projects = [
  {
    name: "Datebook",
    description:
      "A web application that allows students to anonymously match with their desired dance partners.",
    stack: ["NextJS", "Supabase", "Tailwind"],
  },
  {
    name: "FTC Toolbox",
    description:
      "A customized AI chatbot for the First Tech Challenge to assist members of 400 FTC teams with programming, building, and other competition-related questions. This project won the Motivate Award at FTC ILT 2024.",
    stack: ["NextJS", "Supabase", "OpenAI"],
  },
  {
    name: "SoCal Flying Monkey",
    description:
      "A Discord bot for a YouTube influencer with 140k subscribers. Implemented features such as a trivia game, daily facts, a leveling system, and automated moderating tools.",
    stack: ["NodeJS", "MongoDB", "Discord API"],
  },
];

const awards = [
  {
    name: "NASA ADC Challenge - Top 3 Nationwide",
    description:
      "Implemented and optimized the A* algorithm to find the shortest path, integrating factors such as illumination, elevation, slope, and communication with Earth.",
  },
  {
    name: "NASA SPACE APPS - Global Nominee",
    description:
      "Developed a program to predict future solar storm scales (G) using historical data and techniques such as machine learning and Kalman Filter. Created a website featuring a 3D globe to display predictions and trends interactively for the chosen date.",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto items-center min-h-screen px-8 md:px-48">
      <div className="grid grid-cols-1 gap-20">
        <section className="flex flex-col gap-2 items-center mt-20">
          <h1 className="text-6xl font-bold">Efe Celik</h1>
          <p className="text-xl text-green-600">Software Engineer</p>
          <div className="flex gap-4 mt-4">
            <Github
              size={24}
              className="hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:text-green-600"
              onClick={() => window.open("https://github.com/clkefe", "_blank")}
            />
            <Linkedin
              size={24}
              className="hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:text-green-600"
              onClick={() =>
                window.open("https://www.linkedin.com/in/efeclk/", "_blank")
              }
            />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex gap-2">
            <User size={36} className="text-green-600" />
            <h2 className="text-4xl font-bold select-none">About Me</h2>
          </div>
          <p className="text-xl">
            Hi, I'm Efe, a 1st year software engineering student at Cal Poly San
            Luis Obispo. I have started my journey in software development in
            2018 to automate my repetetive tasks using python. Fast forward to
            today, I spend most of my time building full stack web applications
            using NextJS while learning new technologies like LLMs.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Code size={36} className="text-green-600" />
            <h2 className="text-4xl font-bold select-none">Projects</h2>
          </div>

          {projects.map((project) => (
            <div className="flex flex-col gap-4 bg-secondary p-4 rounded-lg">
              <div key={project.name}>
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="text-xl">{project.description}</p>
                <br />
                <div className="flex gap-2">
                  {project.stack.map((tech) => (
                    <p className="bg-green-600 text-white px-2 rounded-lg">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-4 mb-20">
          <div className="flex gap-2">
            <Award size={36} className="text-green-600" />
            <h2 className="text-4xl font-bold select-none">Awards</h2>
          </div>

          {awards.map((award) => (
            <div className="flex flex-col gap-4 bg-secondary p-4 rounded-lg">
              <h3 className="text-2xl font-bold">{award.name}</h3>
              <p className="text-xl">{award.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
