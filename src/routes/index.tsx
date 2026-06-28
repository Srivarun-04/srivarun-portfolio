import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
  Brain,
  Database,
  Wrench,
  Network,
  Layers,
  Trophy,
  GraduationCap,
  Award,
  MapPin,
  ExternalLink,
} from "lucide-react";


import projectResume from "@/assets/project-resume.jpg";
import projectNlp from "@/assets/project-nlp.jpg";
import projectQr from "@/assets/project-qr.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srivarun Manthena — AI Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Srivarun Manthena builds AI-powered software — machine learning, NLP, and full-stack applications. Portfolio of projects, skills, and engineering journey.",
      },
      { property: "og:title", content: "Srivarun Manthena — AI Engineer & Full Stack Developer" },
      {
        property: "og:description",
        content: "AI-focused software engineer building polished, real-world applications.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Srivarun Manthena — AI Engineer" },
      {
        name: "twitter:description",
        content: "AI-focused software engineer building polished, real-world applications.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ---------------------------------- Data --------------------------------- */

const projects = [
  {
    id: "01",
    name: "AI Resume & Career Analyzer",
    tagline: "Turn any resume into a personalized career roadmap.",
    problem:
      "Job seekers struggle to understand why their resumes underperform and where to improve next.",
    image: projectResume,
    tech: ["Python", "FastAPI", "React", "NLP", "LLMs"],
    features: [
      "ATS score analysis",
      "Personalized resume feedback",
      "Career recommendations",
      "Skill gap analysis",
      "Learning roadmap",
    ],
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: "02",
    name: "Next Word Prediction",
    tagline: "An N-gram language model that finishes your sentences.",
    problem:
      "Demonstrates how classical NLP can power intelligent autocomplete without heavy LLM infrastructure.",
    image: projectNlp,
    tech: ["Python", "NLTK", "N-Gram", "ML"],
    features: [
      "Statistical language modeling",
      "Tokenization & smoothing",
      "Real-time prediction",
      "Lightweight & explainable",
    ],
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: "03",
    name: "QR Code Generator",
    tagline: "A focused, responsive tool for instant QR creation.",
    problem:
      "Most QR generators are cluttered with ads — this one is fast, customizable, and looks great.",
    image: projectQr,
    tech: ["React", "JavaScript", "CSS"],
    features: [
      "Multiple customization options",
      "Responsive UI",
      "Instant download",
      "Modern interface",
    ],
    github: "https://github.com/",
    demo: "#",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI"],
  },
  {
    icon: Brain,
    title: "AI & ML",
    items: ["Machine Learning", "NLP", "NLTK", "Prompt Engineering", "DSA"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const codingStats = [
  { label: "Problems Solved", value: "350+", progress: 78 },
  { label: "Consistency", value: "Daily", progress: 92 },
  { label: "Contests", value: "Active", progress: 65 },
];

const dsaTopics = [
  "Arrays",
  "Strings",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Recursion",
  "Greedy",
  "Hashing",
  "Sliding Window",
];

const certifications = [
  { title: "HR Analytics", issuer: "NPTEL", year: "2024" },
  { title: "Cloud Computing", issuer: "NPTEL", year: "2024" },
];

/* ------------------------------- Animations ------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* --------------------------------- Page ---------------------------------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CodingJourney />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------- Nav ---------------------------------- */

function Nav() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="surface-card flex w-full items-center justify-between rounded-full px-5 py-2.5">
          <a href="#top" className="flex items-center gap-2 font-medium tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-accent)] text-xs font-bold text-white">
              S
            </span>
            <span className="hidden sm:inline">Srivarun</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* --------------------------------- Hero ---------------------------------- */

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const orbitCards = [
    { icon: Sparkles, label: "AI Systems" },
    { icon: Brain, label: "Machine Learning" },
    { icon: Layers, label: "Full Stack" },
    { icon: Code2, label: "Data Structures" },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              oklch(0.62 0.22 295 / 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute top-[40%] left-[60%] -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">

          {/* Left Side: Text Content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col items-start"
          >
            <motion.h1
              variants={fadeUp}
              className="max-w-2xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Building AI-powered applications <br className="hidden sm:inline" /> that solve <span className="text-gradient-accent">real-world</span> problems.
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-1.5 border-l-[3px] border-[var(--accent)]/60 pl-6">
              <span className="text-xl font-bold tracking-[0.2em] text-foreground sm:text-2xl">
                SRIVARUN MANTHENA
              </span>
              <span className="text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">
                Computer Science Student
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              I enjoy building intelligent applications that combine AI, clean engineering, and thoughtful user experiences. My focus is on creating practical software that solves real problems while continuously improving my skills in machine learning and full-stack development.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-[var(--background)] shadow-lg transition-colors hover:bg-[var(--foreground)]/90"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-7 py-3.5 text-sm font-medium text-[var(--foreground)] backdrop-blur-md transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--surface)]"
              >
                <Download className="h-4 w-4 text-muted-foreground" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="mailto:srivarun@example.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Premium Orbit Animation */}
          <div className="relative hidden h-[600px] w-full items-center justify-center lg:flex xl:translate-x-8">
            {/* Core Glowing Orb */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-[var(--accent)]/15 blur-[80px]" />
            <div className="absolute flex h-32 w-32 items-center justify-center rounded-full border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)] backdrop-blur-xl">
              <Network className="h-12 w-12 text-[var(--accent)]/80" />
            </div>

            {/* Orbit Rings */}
            <div className="absolute h-[340px] w-[340px] rounded-full border border-[var(--border)]/30 border-dashed" />
            <div className="absolute h-[460px] w-[460px] rounded-full border border-[var(--border)]/20" />

            {/* Orbiting Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute h-[460px] w-[460px]"
            >
              {orbitCards.map((card, i) => {
                const radius = 230; // 460 / 2
                const angle = (i * 360) / orbitCards.length;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ x: x - 100, y: y - 40 }} // Offsetting half the width/height approximately for centering
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="flex w-[200px] cursor-pointer items-center justify-center gap-3 rounded-2xl border border-[var(--border)]/60 bg-[var(--surface)]/90 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl transition-colors hover:border-[var(--accent)]/50">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)]">
                        <card.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium whitespace-nowrap text-[var(--foreground)]/90">{card.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card grid h-10 w-10 place-items-center rounded-full transition-all hover:-translate-y-0.5 hover:text-foreground hover:border-[var(--accent)]/40"
    >
      {children}
    </a>
  );
}

/* -------------------------------- Section -------------------------------- */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-gradient mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-5 text-pretty text-muted-foreground">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

/* --------------------------------- About --------------------------------- */

function About() {
  const beats = [
    { year: "2021", text: "Wrote my first lines of code — and never stopped." },
    { year: "2023", text: "Fell in love with Machine Learning & NLP." },
    { year: "2024", text: "Shipped AI applications that solve real problems." },
    { year: "Today", text: "Practicing DSA daily, building products, always shipping." },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              An engineer&apos;s mind,{" "}
              <span className="font-display italic text-gradient-accent">a builder&apos;s heart.</span>
            </>
          }
          description="I learn by building. Every project is an excuse to dig deeper into how systems think, scale, and feel."
        />
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {beats.map((b) => (
            <motion.li
              key={b.year}
              variants={fadeUp}
              className="surface-card hover-lift group rounded-2xl p-6"
            >
              <div className="font-display text-sm text-[var(--accent)]">{b.year}</div>
              <p className="mt-2 text-base leading-relaxed text-foreground/90">{b.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

/* -------------------------------- Projects ------------------------------- */

function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title={
            <>
              Selected <span className="font-display italic text-gradient-accent">projects</span>
            </>
          }
          description="A small set of things I'm proud of — each one taught me something I couldn't learn from a tutorial."
        />

        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className="surface-card hover-lift group relative overflow-hidden rounded-3xl p-6 sm:p-8"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-[var(--surface)]">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="font-display text-base text-[var(--accent)]">{project.id}</span>
            <span className="h-px w-8 bg-border" />
            <span>Case Study</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-pretty text-muted-foreground">{project.tagline}</p>

          <div className="mt-6 grid gap-4 text-sm">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Problem
              </div>
              <p className="mt-1 text-foreground/90">{project.problem}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Key features
              </div>
              <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground/90">
                    <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-[var(--surface-2)] px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface-2)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)]/40"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* --------------------------------- Skills -------------------------------- */

function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Toolkit"
          title={
            <>
              The stack I&apos;m{" "}
              <span className="font-display italic text-gradient-accent">fluent in.</span>
            </>
          }
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="surface-card hover-lift rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                  <g.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {g.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-[var(--surface-2)]/60 px-3 py-1 text-sm text-foreground/90"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- Coding Journey ---------------------------- */

function CodingJourney() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Coding Journey"
          title={
            <>
              Sharpening the craft,{" "}
              <span className="font-display italic text-gradient-accent">one problem a day.</span>
            </>
          }
          description="DSA isn't a checkbox — it's how I learn to think clearly under constraints."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-6 lg:col-span-2"
          >
            {codingStats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="surface-card rounded-2xl p-6"
              >
                <div className="flex items-baseline justify-between">
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                  <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--surface-2)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
                    className="h-full rounded-full bg-[var(--gradient-accent)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="surface-card relative overflow-hidden rounded-2xl p-8 lg:col-span-3"
          >
            <Trophy className="absolute right-6 top-6 h-5 w-5 text-[var(--accent)]" />
            <div className="text-sm uppercase tracking-wider text-muted-foreground">
              Favorite topics
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {dsaTopics.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-[var(--surface-2)]/60 px-3 py-1.5 text-sm transition-colors hover:border-[var(--accent)]/40 hover:text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-[var(--surface-2)]/40 p-4">
                <div className="text-foreground">Platforms</div>
                <p className="mt-1">LeetCode · GeeksForGeeks · Codeforces</p>
              </div>
              <div className="rounded-xl border border-border bg-[var(--surface-2)]/40 p-4">
                <div className="text-foreground">Mindset</div>
                <p className="mt-1">Curious. Patient. Always optimizing.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Education ------------------------------ */

function Education() {
  const items = [
    {
      year: "2022 — 2026",
      title: "B.Tech, Computer Science Engineering",
      org: "Expected Graduation · 2026",
      detail: "CGPA: 8.5 / 10",
      courses: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Machine Learning", "Computer Networks"],
    },
  ];
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Education"
          title={
            <>
              An academic{" "}
              <span className="font-display italic text-gradient-accent">foundation.</span>
            </>
          }
        />
        <div className="mx-auto max-w-3xl">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="surface-card hover-lift relative rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-sm text-[var(--accent)]">{it.year}</div>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.org}</p>
                  <p className="mt-2 text-sm text-foreground/90">{it.detail}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {it.courses.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-[var(--surface-2)]/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Certifications ---------------------------- */

function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Certifications"
          title={
            <>
              Continued{" "}
              <span className="font-display italic text-gradient-accent">learning.</span>
            </>
          }
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="surface-card hover-lift group flex items-center gap-4 rounded-2xl p-6"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-accent)] text-white">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">{c.issuer} · {c.year}</div>
                <h3 className="mt-0.5 text-lg font-semibold tracking-tight">{c.title}</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="surface-card relative overflow-hidden rounded-3xl p-10 sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
          <div className="relative text-center">
            <Sparkles className="mx-auto h-6 w-6 text-[var(--accent)]" />
            <h2 className="text-gradient mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Let&apos;s build something{" "}
              <span className="font-display italic text-gradient-accent">worth shipping.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
              I&apos;m actively looking for SDE roles at product companies where craft and impact
              matter. If that sounds like you, let&apos;s talk.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:srivarun@example.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-accent)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                srivarun@example.com
              </a>
              <a
                href="#"
                className="surface-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]/40"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-muted-foreground">
              <SocialIcon href="https://github.com/" label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--gradient-accent)] text-[10px] font-bold text-white">
            S
          </span>
          <span>© {new Date().getFullYear()} Srivarun Manthena</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="mailto:srivarun@example.com" className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
