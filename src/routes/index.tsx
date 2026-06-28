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
  FileText,
  MessageSquare,
  Compass,
  BarChart,
  Map,
  Cpu,
  ArrowRight,
  Target,
  BookOpen,
  User,
  Gem,
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
        <FeaturedProject />
        <Mindset />
        <Projects />
        <TechStack />
        <CodingJourney />
        <AcademicFoundation />
        <ContinuousLearning />
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
    { href: "#about", label: "Mindset" },
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

/* ---------------------------- Featured Project --------------------------- */

function FeaturedProject() {
  const features = [
    { icon: FileText, label: "ATS Score Analysis" },
    { icon: MessageSquare, label: "Resume Feedback" },
    { icon: Compass, label: "Career Recommendations" },
    { icon: BarChart, label: "Skill Gap Analysis" },
    { icon: Map, label: "Learning Roadmap" },
    { icon: Cpu, label: "AI-Powered Insights" },
  ];

  const techStack = ["Python", "FastAPI", "Next.js", "React", "Tailwind CSS", "Machine Learning"];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">

          {/* Left Side: Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow behind mockup */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[100px]" />

            <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)]/50 bg-[var(--surface)] shadow-2xl transition-all hover:border-[var(--accent)]/30">
              {/* Browser Frame */}
              <div className="flex h-10 items-center gap-2 border-b border-[var(--border)]/50 bg-[var(--surface-2)]/50 px-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              <div className="aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={projectResume}
                  alt="AI Resume & Career Analyzer Dashboard"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="order-1 flex flex-col items-start lg:order-2"
          >
            <motion.div variants={fadeUp} className="mb-4 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
              FEATURED PROJECT
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              AI Resume & Career Analyzer
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Turn any resume into a personalized career roadmap. Stop guessing why you&apos;re not getting interviews and start taking data-driven steps to improve your profile, fill skill gaps, and land your dream job.
            </motion.p>

            {/* Feature Grid */}
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-[var(--border)]/50 hover:bg-[var(--surface)]/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] text-[var(--accent)] transition-transform group-hover:scale-110">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{feature.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:border-[var(--accent)]/40 hover:text-foreground">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--background)] shadow-lg transition-all hover:scale-105"
              >
                Live Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-[var(--surface-2)]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </motion.div>
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

/* --------------------------------- Mindset --------------------------------- */

function Mindset() {
  const principles = [
    {
      icon: Target,
      title: "Build with Purpose",
      description: "Create solutions that solve real problems.",
    },
    {
      icon: BookOpen,
      title: "Always Learning",
      description: "Continuously improving through projects, exploration, and curiosity.",
    },
    {
      icon: User,
      title: "Think Like a User",
      description: "Great software is intuitive, useful, and enjoyable.",
    },
    {
      icon: Code2,
      title: "Engineering Mindset",
      description: "Write maintainable, scalable, and elegant solutions.",
    },
  ];

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col items-start justify-center relative"
          >
            {/* Subtle vertical accent line beside the text */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--accent)]/10 to-transparent -ml-6 hidden sm:block" />

            <motion.div variants={fadeUp} className="mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
              WHY I BUILD
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
              Building software is about solving meaningful problems.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-lg">
              I enjoy creating software that combines artificial intelligence, clean engineering, and thoughtful user experiences. Every project is an opportunity to learn, improve, and build something people genuinely find useful.
            </motion.p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2"
          >
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative flex flex-col items-start rounded-3xl border border-[var(--border)]/50 bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--accent)] transition-transform group-hover:scale-110 shadow-sm border border-[var(--border)]/30">
                  <principle.icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
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

function TechStack() {
  const stackData = [
    {
      title: "Programming Languages",
      icon: Code2,
      items: ["Python", "Java", "JavaScript"],
      className: "md:col-span-2",
    },
    {
      title: "Frontend",
      icon: Layers,
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
      className: "md:col-span-1",
    },
    {
      title: "Backend",
      icon: Network,
      items: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
      className: "md:col-span-1",
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      items: ["Machine Learning", "Natural Language Processing", "Prompt Engineering"],
      className: "md:col-span-2",
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "VS Code", "Postman", "MongoDB"],
      className: "md:col-span-3",
    },
  ];

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
            TECH STACK
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl max-w-2xl">
            The technologies behind my work.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            A carefully selected toolkit I use to build modern software, AI-powered applications, and scalable solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stackData.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`group relative flex flex-col rounded-3xl border border-[var(--border)]/50 bg-[var(--surface)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-2xl hover:shadow-[var(--accent)]/20 overflow-hidden ${card.className}`}
            >
              <div className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full bg-[var(--accent)]/0 blur-[50px] transition-all duration-500 group-hover:bg-[var(--accent)]/10" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--accent)] transition-transform duration-500 group-hover:scale-110 shadow-sm border border-[var(--border)]/30">
                    <card.icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
                </div>

                <ul className="flex flex-col gap-3 w-full mt-auto">
                  {card.items.map((it, i) => (
                    <li key={i} className="flex items-start text-[15px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90">
                      <span className="mr-3 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/50 transition-colors group-hover:bg-[var(--accent)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- Coding Journey ---------------------------- */

function CodingJourney() {
  const journeyCards = [
    {
      title: "Problem Solving",
      icon: Target,
      highlight: "",
      subtitle: "",
      items: ["Dynamic Programming", "Sliding Window", "Hash Maps", "Binary Search"],
    },
    {
      title: "Favorite Topics",
      icon: Layers,
      highlight: "",
      subtitle: "",
      items: ["Sliding Window", "Binary Search", "Hash Maps", "Trees", "Graphs", "Dynamic Programming"],
    },
    {
      title: "Building",
      icon: Compass,
      highlight: "",
      subtitle: "",
      items: [
        "AI-powered applications",
        "Full Stack projects",
        "Clean architecture",
        "Problem solving",
      ],
    },
    {
      title: "Exploring",
      icon: BookOpen,
      highlight: "",
      subtitle: "",
      items: [
        "Advanced DSA",
        "System Design",
        "Backend Architecture",
        "AI Systems",
      ],
    },

  ];

  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Top Header Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
            CODING JOURNEY
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl max-w-2xl">
            Consistency creates great engineers.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            I believe in improving every day through practice, projects, and curiosity.
            Here is a snapshot of what I am learning and focusing on right now.
          </motion.p>
        </motion.div>

        {/* 4 Premium Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2"
        >
          {journeyCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl border border-[var(--border)]/50 bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--accent)] transition-transform group-hover:scale-110 shadow-sm border border-[var(--border)]/30">
                  <card.icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
              </div>

              {card.highlight && (
                <div className="mb-5 inline-block w-max rounded-full bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)] border border-[var(--accent)]/20">
                  {card.highlight}
                </div>
              )}

              {card.subtitle && (
                <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  {card.subtitle}
                </div>
              )}

              <ul className="flex flex-col gap-3 w-full mt-auto">
                {card.items.map((it, i) => (
                  <li key={i} className="flex items-start text-[15px] leading-relaxed text-muted-foreground">
                    <span className="mr-3 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/60" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlighted Quote Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mt-6"
        >
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] p-10 sm:p-12 text-center transition-all hover:border-[var(--accent)]/50 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
          >
            {/* Soft background glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[80px]" />

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              <Sparkles className="h-7 w-7 stroke-[1.5]" />
            </div>

            <div className="mb-4 text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">
              Current Goal
            </div>
            <h3 className="mx-auto max-w-3xl text-2xl sm:text-3xl font-medium leading-relaxed tracking-tight text-foreground">
              "Want to build software
              people remember using,
              not just software that works."
            </h3>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

/* -------------------------------- Education ------------------------------ */

function AcademicFoundation() {
  const academics = [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      institution: "Sreyas Institute of Engineering & Technology",
      year: "2023 – Present",
      score: "CGPA: 8.6 / 10",
    },
    {
      degree: "Intermediate (MPC)",
      major: "",
      institution: "Shivani Junior College",
      year: "2021 – 2023",
      score: "Percentage: 95.3%",
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Machine Learning",
  ];

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
            ACADEMICS
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl max-w-2xl">
            Building strong fundamentals before building great software.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            My academic journey provided the foundation, while projects and continuous learning shaped my practical engineering skills.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl mt-12">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] top-4 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent sm:left-1/2 sm:-ml-px"
          />

          <div className="flex flex-col gap-12">
            {academics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className={`relative flex items-center justify-between sm:justify-normal sm:w-full ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] z-10 h-4 w-4 -translate-x-[7.5px] rounded-full bg-background border-[3px] border-[var(--accent)] shadow-lg shadow-[var(--accent)]/40 sm:left-1/2 sm:-translate-x-2" />

                {/* Empty Space for Desktop Alignment */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Content Card */}
                <div className={`w-full pl-12 sm:w-1/2 ${idx % 2 === 0 ? "sm:pl-12 sm:pr-0" : "sm:pl-0 sm:pr-12 text-left sm:text-right"}`}>
                  <div className="group relative rounded-2xl border border-[var(--border)]/30 bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-[var(--accent)]/5">
                    <div className="mb-2 text-sm font-medium text-[var(--accent)]">{item.year}</div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.degree}</h3>
                    {item.major && <p className="mt-1 font-medium text-foreground/90">{item.major}</p>}
                    <p className="mt-1 text-[15px] text-muted-foreground">{item.institution}</p>
                    <div className={`mt-4 inline-block rounded-lg bg-[var(--surface-2)] px-3 py-1 text-sm font-medium text-foreground/80 ${idx % 2 !== 0 ? "sm:mr-0 sm:ml-auto" : ""}`}>
                      {item.score}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-24 rounded-3xl border border-[var(--border)]/30 bg-[var(--surface)]/50 p-8 sm:p-10 text-center"
          >
            <h3 className="mb-8 text-xl font-semibold tracking-tight text-foreground">Relevant Coursework</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-[var(--border)]/50 bg-[var(--surface-2)]/60 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] hover:text-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Continuous Learning -------------------------- */

function ContinuousLearning() {
  const learningItems = [
    {
      issuer: "NPTEL",
      title: "Cloud Computing",
      status: "Successfully Completed",
      duration: "12 Week Course",
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
            CONTINUOUS LEARNING
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl max-w-2xl">
            Learning doesn't stop after the classroom.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            I believe the best engineers never stop learning. Alongside academic studies, I continuously explore new technologies, complete industry-recognized courses, and strengthen my engineering foundation.
          </motion.p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {learningItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-3xl border border-[var(--border)]/30 bg-[var(--surface)] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
            >
              {/* Soft glow */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--accent)] shadow-sm border border-[var(--border)]/30 transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="h-7 w-7 stroke-[1.5]" />
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {item.issuer}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 text-sm font-medium mt-4 sm:mt-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-500 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {item.status}
                </span>
                <span className="text-muted-foreground text-left sm:text-right w-full">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase backdrop-blur-sm">
            LET'S CONNECT
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl max-w-2xl text-balance">
            Let's Build Something <span className="text-gradient-accent">Meaningful</span> Together.
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl text-pretty">
            Whether it's an exciting project, an internship opportunity, or simply a conversation about technology, I'd love to connect and explore new ideas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:srivarun@example.com"
              className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] shadow-lg transition-all hover:bg-[var(--foreground)]/90 hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)]/80 bg-[var(--surface)]/50 px-8 py-4 text-sm font-medium text-[var(--foreground)] backdrop-blur-md transition-all hover:border-[var(--accent)]/50 hover:bg-[var(--surface)] hover:scale-105"
            >
              <Download className="h-4 w-4 text-muted-foreground" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 flex items-center justify-center gap-6">
            <SocialIcon href="https://github.com/" label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="mailto:srivarun@example.com" label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
          </motion.div>
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
