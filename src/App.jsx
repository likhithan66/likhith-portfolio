import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, BrainCircuit, Globe, GraduationCap, BriefcaseBusiness,
  ExternalLink, FileDown, Sparkles
} from "lucide-react";

const skills = [
  { title: "Programming", items: ["Python", "SQL", "JavaScript", "HTML", "CSS"], icon: Code2 },
  { title: "Web & Frameworks", items: ["React.js", "Node.js", "Flask", "FastAPI", "REST APIs"], icon: Globe },
  { title: "Databases & Tools", items: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub"], icon: Database },
  { title: "AI & Data", items: ["RAG", "LLMs", "Pandas", "NumPy", "Power BI", "Tableau"], icon: BrainCircuit }
];

const projects = [
  {
    number: "01", category: "AI / NLP", title: "AI Document Analyzer",
    description: "An AI-powered application designed to analyze PDF documents, extract relevant information, and answer questions using document context.",
    stack: ["Python", "Flask", "NLP", "LLM", "RAG"],
    points: ["PDF upload and text extraction", "Context-aware question answering", "LLM-powered responses"],
    link: "https://github.com/likhithan66",
    note: "Add the specific repository link when ready."
  },
  {
    number: "02", category: "Machine Learning", title: "Crop Recommendation System",
    description: "A machine learning application that recommends suitable crops using soil and environmental parameters.",
    stack: ["Python", "Scikit-learn", "Random Forest", "Flask"],
    points: ["Uses N, P, K, temperature, humidity, pH and rainfall", "Data preprocessing and model training", "Web interface for recommendations"],
    link: "https://github.com/likhithan66",
    note: "Add the specific repository link when ready."
  },
  {
    number: "03", category: "Full Stack", title: "E-Commerce Web Application",
    description: "A full-stack online grocery application with customer shopping features and admin inventory management.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    points: ["Authentication, product browsing and cart", "Checkout and order tracking", "Admin product, inventory and order management"],
    link: "https://github.com/likhithan66",
    note: "Add the specific repository link when ready."
  }
];

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

function Reveal({ children, className = "", delay = 0 }) {
  const [shown, setShown] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={elementRef} className={`reveal ${shown ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <a className="brand" href="#home" aria-label="Likhith home"><span className="brand-mark">L</span><span>likhith<span className="brand-dot">.</span></span></a>
    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav className={open ? "nav open" : "nav"}>
      {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
      <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14}/></a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hello">Hello, I'm</p>
        <h1>Likhith <span>AN.</span></h1>
        <h2>Building useful things with <span className="gradient-text">code & curiosity.</span></h2>
        <p className="hero-description">B.E. Information Science and Engineering student focused on software development, AI/ML, and full-stack applications. I enjoy turning ideas into practical digital experiences.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
          <a className="button button-ghost" href="#contact">Let's connect <Mail size={16}/></a>
        </div>
        <div className="social-row">
          <a href="https://github.com/likhithan66" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
          <a href="mailto:likhithan66@gmail.com" aria-label="Email"><Mail/></a>
          <span className="social-line"/>
          <span className="social-caption">Bangalore, India</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="photo-frame">
          <img src="/profile.jpeg" alt="Likhith AN profile" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }}/>
          <div className="photo-placeholder"><div className="placeholder-icon">LA</div><span>Add your profile photo</span><small>public/profile.jpg</small></div>
        </div>
        <div className="float-card float-code"><Code2 size={17}/><span>Clean code</span></div>
        <div className="float-card float-ai"><Sparkles size={17}/><span>AI curious</span></div>
        <div className="hero-index">01 <span>— PORTFOLIO</span></div>
      </div>
    </div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>;
}

function SectionHeading({ kicker, title, accent, description }) {
  return <div className="section-heading">
    <p className="section-kicker">{kicker}</p>
    <h2>{title} <span className="gradient-text">{accent}</span></h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

function About() {
  return <section className="section-shell section-block" id="about">
    <Reveal><SectionHeading kicker="01 / ABOUT ME" title="A little" accent="about me" description="Curious by nature. Developer by practice. Always learning." /></Reveal>
    <div className="about-grid">
      <Reveal className="about-text"><p className="large-copy">I’m an Information Science and Engineering student who enjoys solving problems and building software that makes everyday tasks easier.</p><p>My foundation includes Python, SQL, data structures, and web development. I have hands-on experience developing applications with Flask, FastAPI, React, and databases, and I’m interested in exploring how AI can make software more helpful.</p><p>I value clear problem-solving, debugging, collaboration, and continuous learning.</p></Reveal>
      <Reveal delay={120} className="about-stats">
        <div className="stat-card"><span className="stat-number">7.94</span><span className="stat-label">CGPA · Current</span></div>
        <div className="stat-card"><span className="stat-number">03</span><span className="stat-label">Featured projects</span></div>
        <div className="stat-card stat-wide"><GraduationCap/><div><strong>B.E. Information Science & Engineering</strong><span>Atria Institute of Technology · 2023–Present</span></div></div>
      </Reveal>
    </div>
  </section>;
}

function Skills() {
  return <section className="section-shell section-block" id="skills">
    <Reveal><SectionHeading kicker="02 / TOOLKIT" title="Skills &" accent="technologies" description="Tools and technologies I have worked with or studied." /></Reveal>
    <div className="skills-grid">{skills.map((group, i) => {
      const Icon = group.icon;
      return <Reveal key={group.title} delay={i * 80} className="skill-card"><div className="skill-icon"><Icon size={21}/></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></Reveal>;
    })}</div>
  </section>;
}

function Projects() {
  return <section className="section-shell section-block" id="projects">
    <Reveal><SectionHeading kicker="03 / SELECTED WORK" title="Projects I've" accent="built" description="A selection of academic and personal projects from my development journey." /></Reveal>
    <div className="projects-list">{projects.map((project, i) => <Reveal key={project.number} delay={i * 100} className="project-card">
      <div className="project-top"><span className="project-number">{project.number} / 03</span><span className="project-category">{project.category}</span></div>
      <div className="project-content"><div><h3>{project.title}</h3><p>{project.description}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open GitHub for ${project.title}`}><ArrowUpRight/></a></div>
      <p className="project-note">{project.note}</p>
    </Reveal>)}</div>
  </section>;
}

function Experience() {
  return <section className="section-shell section-block" id="experience">
    <Reveal><SectionHeading kicker="04 / JOURNEY" title="Experience &" accent="education" description="The learning experiences shaping my engineering journey." /></Reveal>
    <div className="timeline">
      <Reveal className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={18}/></div><div className="timeline-content"><div className="timeline-meta"><span>INTERNSHIP</span><span>AUG – OCT 2026</span></div><h3>Blooms Mobility Technology</h3><p className="timeline-sub">Intern · Bangalore, Karnataka</p><ul><li>Learning and applying Python programming and problem-solving concepts for AI/ML tasks.</li><li>Practicing programming logic, loops, and matrix operations.</li><li>Exploring AI/ML project workflows and technical collaboration.</li></ul></div></Reveal>
      <Reveal delay={100} className="timeline-item"><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-content"><div className="timeline-meta"><span>EDUCATION</span><span>2023 – PRESENT</span></div><h3>Atria Institute of Technology</h3><p className="timeline-sub">B.E. Information Science and Engineering · Bangalore</p><p>CGPA: 7.94 (pursuing)</p></div></Reveal>
      <Reveal delay={180} className="timeline-item"><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-content"><div className="timeline-meta"><span>PRE-UNIVERSITY</span><span>2021 – 2023</span></div><h3>Govt Boys PU College, Tiptur</h3><p className="timeline-sub">Class XII · Tumkur, Karnataka</p><p>Percentage: 86.8%</p></div></Reveal>
    </div>
  </section>;
}

function Contact() {
  return <section className="section-shell section-block contact-section" id="contact">
    <Reveal><SectionHeading kicker="05 / GET IN TOUCH" title="Have a project" accent="in mind?" description="I'm open to software engineering opportunities, internships, and conversations about building useful products." /></Reveal>
    <Reveal className="contact-card"><div><p className="contact-label">LET'S MAKE SOMETHING</p><h3>Let's build the<br/><span className="gradient-text">next thing together.</span></h3></div><a className="button button-primary" href="mailto:likhithan66@gmail.com">Say hello <ArrowUpRight size={17}/></a></Reveal>
    <div className="contact-links"><a href="mailto:likhithan66@gmail.com"><Mail size={17}/> likhithan66@gmail.com</a><a href="https://github.com/likhithan66" target="_blank" rel="noreferrer"><Github size={17}/> github.com/likhithan66</a><span><Globe size={17}/> Bangalore, India</span></div>
  </section>;
}

export default function App() {
  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Header/><main><Hero/><About/><Skills/><Projects/><Experience/><Contact/></main><footer className="footer"><a className="brand" href="#home"><span className="brand-mark">L</span><span>likhith<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity · © {new Date().getFullYear()} Likhith AN</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer></>;
}