import { Header } from "../header/header";

type ProjectItem = {
    title: string;
    description: string;
    tech: string[];
};

const projects: ProjectItem[] = [
    {
        title: "Task Organizer",
        description:
            "The Task Organizer is a simple web app built with HTML, CSS, and JavaScript that lets users add, manage, and track tasks interactively with options to mark them complete or delete them.",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Calculator",
        description:
            "The Calculator is a web application built with HTML, CSS, and JavaScript that allows users to perform basic arithmetic operations through an interactive interface.",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Book Management System",
        description:
            "The Book Management System is a Java-based application that enables users to add, update, search, and organize books efficiently, providing a structured way to manage a personal or library collection.",
        tech: ["Java"],
    },
    {
        title: "Banking System",
        description:
            "The Banking System is a Java application that simulates core banking operations such as deposits, withdrawals, balance checks, and account management, providing a structured way to handle financial transactions.",
        tech: ["Java"],
    },
    {
        title: "Simple Calculator",
        description:
            "The Simple Calculator is a Java program that performs basic arithmetic operations like addition, subtraction, multiplication, and division through a straightforward console or GUI interface.",
        tech: ["Java"],
    },
    {
        title: "Weather Tracker Website",
        description:
            "The Weather Tracker Website is a responsive web app built with HTML, CSS, and JavaScript that integrates weather APIs to display real-time forecasts and conditions for any location.",
        tech: ["HTML", "CSS", "JavaScript"],
    },
];

/*
  Angular card frame: layered banner border with slanted corners.
    root      -> outer frame (blue, with white corner accents at 60% opacity)
    ::before  -> solid dark-blue interior panel
    ::after   -> thin inner blue line (layered look)
*/
const cardStyles = `
.angle-card {
  --c: 22px;
  --s: 8px;
  --c1: calc(var(--c) - 1.76px);
  --s1: calc(var(--s) - 1.76px);
  --c2: calc(var(--c) - 4.1px);
  --s2: calc(var(--s) - 4.1px);
  --c3: calc(var(--c2) + 0.83px);
  --s3: calc(var(--s2) + 0.83px);
  position: relative;
  isolation: isolate;
  background: linear-gradient(
    135deg,
    #0a1245 0%, #0a1245 14%,
    #3b4fd8 14%, #3b4fd8 86%,
    #0a1245 86%, #0a1245 100%
  );
  clip-path: polygon(
    var(--c) 0,
    calc(100% - var(--s)) 0,
    100% var(--s),
    100% calc(100% - var(--c)),
    calc(100% - var(--c)) 100%,
    var(--s) 100%,
    0 calc(100% - var(--s)),
    0 var(--c)
  );
}
.angle-card::before,
.angle-card::after {
  content: "";
  position: absolute;
  z-index: -1;
  pointer-events: none;
}
.angle-card::before {
  inset: 3px;
  background: #0a1245;
  transition: background-color 0.2s ease;
  clip-path: polygon(
    var(--c1) 0,
    calc(100% - var(--s1)) 0,
    100% var(--s1),
    100% calc(100% - var(--c1)),
    calc(100% - var(--c1)) 100%,
    var(--s1) 100%,
    0 calc(100% - var(--s1)),
    0 var(--c1)
  );
}
.angle-card::after {
  inset: 7px;
  background: #3b4fd8;
  clip-path: polygon(
    evenodd,
    var(--c2) 0,
    calc(100% - var(--s2)) 0,
    100% var(--s2),
    100% calc(100% - var(--c2)),
    calc(100% - var(--c2)) 100%,
    var(--s2) 100%,
    0 calc(100% - var(--s2)),
    0 var(--c2),
    var(--c2) 0,
    var(--c3) 2px,
    calc(100% - var(--s3)) 2px,
    calc(100% - 2px) var(--s3),
    calc(100% - 2px) calc(100% - var(--c3)),
    calc(100% - var(--c3)) calc(100% - 2px),
    var(--s3) calc(100% - 2px),
    2px calc(100% - var(--s3)),
    2px var(--c3),
    var(--c3) 2px,
    var(--c2) 0
  );
}
.angle-card-hover:hover::before {
  background: #11209a;
}
`;

export function Project() {
    return (
        <div
            className="relative min-h-screen box-border overflow-clip text-[#f4f6ff]
                 bg-[image:radial-gradient(ellipse_at_85%_10%,rgba(59,79,216,0.45),transparent_55%),linear-gradient(135deg,#050a2e_0%,#0a1245_55%,#11209a_100%)]
                 before:content-[''] before:absolute before:z-0 before:rounded-full before:pointer-events-none
                 before:w-[560px] before:h-[560px] before:-right-[180px] before:-bottom-[220px]
                 before:border before:border-[rgb(143, 156, 240)]
                 after:content-[''] after:absolute after:z-0 after:rounded-full after:pointer-events-none
                 after:w-[380px] after:h-[380px] after:-right-[90px] after:-bottom-[130px]
                 after:border after:border-[rgba(143, 156, 240, 0.93)]"
        >
            <style>{cardStyles}</style>
            <Header />

            <main className="relative z-[1] mx-auto box-border w-full max-w-[1100px] px-6 pt-[108px] pb-20 sm:px-10">
                <div className="motion-reveal mb-10 border-l-[3px] border-[#3b4fd8] pl-6">
                    <h1 className="m-0 text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold leading-[1.12] tracking-[0.02em] text-[#f4f6ff]">
                        Projects
                    </h1>
                    <span
                        className="mt-4 block h-[3px] w-[90px] rounded-[2px] bg-[image:linear-gradient(90deg,#f4f6ff,#3b4fd8)]"
                        aria-hidden="true"
                    ></span>
                </div>

                <div className="motion-stagger grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="motion-reveal motion-card angle-card angle-card-hover group relative flex flex-col overflow-hidden p-7"
                        >
                         
                            <span
                                className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full border-[7px]
                           border-[rgba(161, 172, 234, 0.72)] transition-colors duration-200 ease-in
                           group-hover:border-[#3b4fd8]"
                                aria-hidden="true"
                            ></span>

                            <h2 className="relative m-0 mb-3 pr-10 text-[1.2rem] font-bold leading-[1.3] text-[#f4f6ff]">
                                {project.title}
                            </h2>
                            <span
                                className="mb-4 block h-[2px] w-10 rounded-[2px] bg-[#3b4fd8]"
                                aria-hidden="true"
                            ></span>
                            <p className="m-0 flex-1 text-[0.98rem] leading-[1.7] text-[#c9d0f5]">
                                {project.description}
                            </p>

                            <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
                                {project.tech.map((tech) => (
                                    <li
                                        key={tech}
                                        className="rounded-full border border-[rgba(143,156,240,0.28)] bg-[rgba(17,32,154,0.35)]
                               px-3 py-1 text-[0.8rem] font-semibold text-[#c9d0f5]"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}