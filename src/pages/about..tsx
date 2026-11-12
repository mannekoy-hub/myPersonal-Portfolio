import { useState, type ReactNode } from "react";
import { FaGithub, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { SiGithubcopilot } from "react-icons/si";
import { Header } from "../header/header";
import myPic from "../assets/myPic6.jpg";

/* ---------- Data ---------- */

const sentences: string[] = [
  "I'm a Computer Engineering student.",
  "I have a strong interest in software engineering.",
  "Started out learning the basics of web development.",
  "Now exploring systems and tools that scale.",
  "Driven by the goal of becoming a software engineer.",
  "Focused on building websites and applications.",
  "Passionate about solving real-world problems.",
];

type StackItem = {
  name: string;
  description: string;
  icon?: string;
  badge?: string;
};

type StackGroup = {
  title: string;
  items: StackItem[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Programming Languages:",
    items: [
      {
        name: "Java",
        description: "Application development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "C++",
        description: "Systems programming",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "JavaScript",
        description: "Interactive behavior",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Front end:",
    items: [
      {
        name: "HTML",
        description: "Web structure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        description: "Visual design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        description: "Reusable interfaces with components and state",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Back end:",
    items: [
      {
        name: "Node.js",
        description: "Application development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        description: "Server-side routing and APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "PostgreSQL",
        description: "Relational database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "JWT Authentication",
        description: "Secure login and protected routes",
        icon: "https://cdn.simpleicons.org/jsonwebtokens",
      },
      {
        name: "REST APIs",
        description: "Resource-based web services",
        badge: "API",
      },
    ],
  },
  {
    title: "Tools:",
    items: [
      {
        name: "Docker",
        description: "Containerized app environments",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        description: "Version control",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        description: "Code hosting and collaboration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Vitest",
        description: "Unit testing",
        icon: "https://cdn.simpleicons.org/vitest",
      },
      {
        name: "Vercel",
        description: "Frontend hosting and deployment",
        icon: "https://cdn.simpleicons.org/vercel",
      },
      {
        name: "Railway",
        description: "Backend and database hosting",
        icon: "https://cdn.simpleicons.org/railway",
      },
      {
        name: "VS Code",
        description: "Code editor and debugging",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "Canva",
        description: "Graphic and visual design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      },
      {
        name: "Google Cloud",
        description: "Cloud computing and services",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "AWS",
        description: "Cloud infrastructure and hosting",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
      },
    ],
  },
];


type TimelineItem = {
  label: string;
  title: string;
  text: string;
  current?: boolean;
};

const timeline: TimelineItem[] = [
  {
    label: "Starting point",
    title: "Web development basics",
    text: "Started learning how websites are built and developed a strong interest in software engineering.",
  },
  {
    label: "Current focus",
    title: "Computer Engineering",
    text: "Studying for a Bachelor of Science in Computer Engineering at the University of Southern Mindanao.",
    current: true,
  },
  {
    label: "Exploring next",
    title: "Systems and scalable tools",
    text: "Exploring systems and tools that scale while building websites and applications.",
  },
  {
    label: "Future goal",
    title: "Software engineer",
    text: "Working toward solving real-world problems through thoughtful software.",
  },
];

type AiAgent = {
  name: string;
  icon: ReactNode | string;
};

const aiAgents: AiAgent[] = [
  {
    name: "Claude",
    icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/claude.svg",
  },
  {
    name: "ChatGPT",
    icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg",
  },
  {
    name: "GitHub Copilot",
    icon: <SiGithubcopilot className="h-5 w-5 text-[#0d1729]" aria-hidden="true" />,
  },
  {
    name: "Microsoft Copilot",
    icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/copilot.svg",
  },
  {
    name: "Gemini AI",
    icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/gemini.svg",
  },
];

/* ---------- Shared pieces ---------- */

const panelClass = "angle-card";


const ringStyles = `
@keyframes ringSpinCW {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes ringSpinCCW {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
.ring-spin-cw {
  animation: ringSpinCW 4s cubic-bezier(0.05, 0.8, 0.25, 1) infinite;
}
.ring-spin-ccw {
  animation: ringSpinCCW 6s cubic-bezier(0.05, 0.8, 0.25, 1) infinite;
}
@media (prefers-reduced-motion: reduce) {
  .ring-spin-cw,
  .ring-spin-ccw {
    animation: none;
  }
}

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
    #f4f6ff 0%, #f4f6ff 14%,
    #3b4fd8 14%, #3b4fd8 86%,
    #f4f6ff 86%, #f4f6ff 100%
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
.angle-card-sm {
  --c: 12px;
  --s: 5px;
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="m-0 text-[1.5rem] font-extrabold tracking-[0.01em] text-[#f4f6ff]">
        {children}
      </h2>
      <span
        className="mt-3 block h-[3px] w-[70px] rounded-[2px] bg-[image:linear-gradient(90deg,#f4f6ff,#3b4fd8)]"
        aria-hidden="true"
      ></span>
    </div>
  );
}

/* ---------- Page ---------- */
//import myPic2 from '../assets/myPic2.jpg';
export function About() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(() =>
    timeline.findIndex((item) => item.current),
  );

  return (
    <div
      className="relative min-h-screen box-border overflow-clip text-[#f4f6ff]
                 bg-[image:radial-gradient(ellipse_at_85%_10%,rgba(59,79,216,0.45),transparent_55%),linear-gradient(135deg,#050a2e_0%,#0a1245_55%,#11209a_100%)]
                 before:content-[''] before:absolute before:z-0 before:rounded-full before:pointer-events-none
                 before:w-[560px] before:h-[560px] before:-right-[180px] before:-bottom-[220px]
                 before:border before:border-[rgba(143,156,240,0.28)]
                 after:content-[''] after:absolute after:z-0 after:rounded-full after:pointer-events-none
                 after:w-[380px] after:h-[380px] after:-right-[90px] after:-bottom-[130px]
                 after:border after:border-[rgba(143,156,240,0.18)]"
    >
      <style>{ringStyles}</style>
      <Header />

      <main className="relative z-[1] mx-auto box-border w-full max-w-[1100px] px-6 pt-[108px] pb-20 sm:px-10">
        {/* ---------- Hero ---------- */}
        <section className="motion-reveal flex flex-col items-center gap-10 md:flex-row md:gap-[60px]">
          {/* Photo inside two spinning rings */}
          <div className="flex shrink-0 flex-col items-center">
            <div className="relative">
              {/* Layer 1: blue ring, spins counter-clockwise (fast to slow), comet tail with glowing head */}
              <div
                className="ring-spin-ccw absolute -inset-[22px] rounded-full max-[700px]:-inset-[16px]"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, rgba(59,79,216,0.15) 120deg, #3b4fd8 280deg, #8f9cf0 360deg)",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                  }}
                ></div>
                <span
                  className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full
                             bg-[#8f9cf0] shadow-[0_0_10px_3px_rgba(59,79,216,0.9)]"
                ></span>
              </div>

              {/* Layer 2: white half-arc ring, spins clockwise (fast to slow) with a soft glow */}
              <div
                className="absolute -inset-[22px] max-[700px]:-inset-[16px]
                           [filter:drop-shadow(0_0_6px_rgba(244,246,255,0.55))]"
                aria-hidden="true"
              >
                <div
                  className="ring-spin-cw box-border h-full w-full rounded-full border-[10px] border-[#f4f6ff]
                             [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%,50%_50%)]
                             max-[700px]:border-[8px]"
                ></div>
              </div>

              <img
                className="relative block h-[260px] w-[260px] rounded-full border-4 border-[#11209a] object-cover
                           shadow-[0_0_0_10px_rgba(4,21,137,0.64),0_0_0_11px_rgba(2,13,81,0.626),0_30px_60px_rgba(2,5,30,0.65)]
                           max-[700px]:h-[200px] max-[700px]:w-[200px]"
                src={myPic}
                alt="Manuel III G. Sorrosa"
              />
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="https://github.com/mannekoy-hub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#8f9cf0] bg-[#0d173d] px-5 py-2 text-sm font-semibold tracking-[0.1em] text-[#f4f6ff]
                           transition hover:border-[#f4f6ff] hover:bg-[#182b74]"
              >
                <FaGithub aria-hidden="true" className="text-base" />
                GitHub
              </a>
            </div>
          </div>

          <div
            className="w-full border-l-[3px] border-[#3b4fd8] pl-8
                       max-[700px]:border-l-0 max-[700px]:border-t-[3px] max-[700px]:pl-0 max-[700px]:pt-6"
          >
            <h1 className="m-0 text-[clamp(1.7rem,4vw,2.9rem)] font-extrabold leading-[1.12] tracking-[0.02em] text-[#f4f6ff]">
              MANUEL III G. SORROSA
            </h1>
            <h3 className="m-0 mt-2 text-[1.1rem] font-semibold tracking-[0.04em] text-[#8f9cf0]">
              Computer Engineering
            </h3>
            <span
              className="mt-5 block h-[3px] w-[90px] rounded-[2px] bg-[image:linear-gradient(90deg,#f4f6ff,#3b4fd8)]"
              aria-hidden="true"
            ></span>

            <div className="mt-6 flex flex-col gap-2.5">
              {sentences.map((sentence) => (
                <div
                  key={sentence}
                  className="flex items-start gap-3 text-[1.05rem] leading-[1.7] text-[#c9d0f5]
                             before:content-[''] before:mt-[0.8em] before:h-[2px] before:w-3 before:shrink-0 before:bg-[#3b4fd8]"
                >
                  {sentence}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Education ---------- */}
        <section className="motion-reveal motion-stagger mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className={`${panelClass} motion-reveal motion-card p-6`}>
            <h3 className="m-0 mb-3 flex items-center gap-3 text-[1.05rem] font-bold text-[#8f9cf0]">
              <FaGraduationCap className="text-[1.05rem]" aria-hidden="true" />
              Course:
            </h3>
            <p className="m-0 text-[1.05rem] font-semibold leading-[1.6] text-[#f4f6ff]">
              Bachelor of science in Computer Engineering
            </p>
            <p className="m-0 mt-1 text-[0.95rem] text-[#c9d0f5]">Section-B</p>
          </div>

          <div className={`${panelClass} motion-reveal motion-card p-6`}>
            <h3 className="m-0 mb-3 flex items-center gap-3 text-[1.05rem] font-bold text-[#8f9cf0]">
              <FaUniversity className="text-[1.05rem]" aria-hidden="true" />
              School:
            </h3>
            <p className="m-0 text-[1.05rem] font-semibold leading-[1.6] text-[#f4f6ff]">
              University Of Southern Mindanao
            </p>
          </div>
        </section>

        {/* ---------- Stack ---------- */}
        <section className="motion-reveal mt-16">
          <SectionTitle>Current Stack/ToolKit:</SectionTitle>
          <div className="flex flex-col gap-10">
            {stackGroups.map((group) => (
              <div key={group.title}>
                <h3 className="m-0 mb-4 text-[1.05rem] font-bold text-[white]]">{group.title}</h3>
                <div className="motion-stagger grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="motion-reveal motion-card angle-card angle-card-sm angle-card-hover flex items-center gap-4 p-5"
                    >
                      {item.icon ? (
                        <img
                          className="h-11 w-11 shrink-0 rounded-lg bg-white object-contain p-2"
                          src={item.icon}
                          alt=""
                        />
                      ) : (
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg
                                     bg-[rgba(244,246,255,0.08)] text-[0.85rem] font-extrabold text-[#f4f6ff]"
                        >
                          {item.badge}
                        </span>
                      )}
                      <div className="min-w-0">
                        <h3 className="m-0 text-[1rem] font-bold text-[#f4f6ff]">{item.name}</h3>
                        <p className="m-0 mt-0.5 text-[0.88rem] leading-[1.5] text-[#c9d0f5]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Timeline ---------- */}
        <section className="motion-reveal mt-16">
          <SectionTitle>My Journey:</SectionTitle>
          <div className="motion-stagger ml-2 border-l-2 border-[rgba(143,156,240,0.28)]">
            {timeline.map((item, index) => (
              <div key={item.title} className="motion-reveal relative pb-8 pl-8 last:pb-0">
                <button
                  type="button"
                  onClick={() => setActiveTimelineIndex(index)}
                  aria-label={`Select journey milestone: ${item.label}`}
                  aria-pressed={activeTimelineIndex === index}
                  className={
                    "absolute -left-[9px] top-1 box-border h-4 w-4 cursor-pointer appearance-none rounded-full border-2 " +
                    (activeTimelineIndex === index
                      ? "border-[#f4f6ff] bg-[#3b4fd8] shadow-[0_0_0_5px_rgba(59,79,216,0.35)]"
                      : "border-[#8f9cf0] bg-[#050a2e] hover:shadow-[0_0_0_5px_rgba(59,79,216,0.2)]") +
                    " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4f6ff]"
                  }
                ></button>
                <div>
                  <span
                    className={
                      "text-[0.85rem] font-semibold " +
                      (activeTimelineIndex === index ? "text-[#f4f6ff]" : "text-[#8f9cf0]")
                    }
                  >
                    {item.label}
                  </span>
                  <h3 className="m-0 mt-1 text-[1.15rem] font-bold text-[#f4f6ff]">{item.title}</h3>
                  <p className="m-0 mt-1.5 max-w-[620px] text-[0.98rem] leading-[1.7] text-[#c9d0f5]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- AI agents ---------- */}
        <section className={`${panelClass} motion-reveal motion-card mt-16 p-6 sm:p-8`}>
          <div className="mb-5 flex items-center gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-[#11209a]"
              aria-hidden="true"
            >
              AI
            </span>
            <h2 className="m-0 text-[1.35rem] font-extrabold text-[#f4f6ff]">My AI assistants</h2>
          </div>
          <ul className="motion-stagger m-0 grid list-none grid-cols-1 gap-3 p-0  sm:grid-cols-2 lg:grid-cols-3">
            {aiAgents.map((agent) => (
              <li
                key={agent.name}
                className="motion-reveal motion-card angle-card angle-card-sm flex items-center gap-3 px-5 py-7 text-[0.98rem] font-medium text-[#c9d0f5]"
              >
                {typeof agent.icon === "string" ? (
                  <img
                    className="h-7 w-7 shrink-0 rounded bg-white p-1 object-contain"
                    src={agent.icon}
                    alt=""
                  />
                ) : (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white p-1 text-[#0d1729]">
                    {agent.icon}
                  </span>
                )}
                {agent.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}