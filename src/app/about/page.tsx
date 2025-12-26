"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiDjango,
  SiPytorch,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiGooglecolab,
  SiAmazon,
} from "react-icons/si";
import { HiOutlineMusicNote } from "react-icons/hi";

function TypewriterText({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [dots, setDots] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        onComplete();
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [text, onComplete]);

  useEffect(() => {
    if (displayedText === text) {
      const dotInterval = setInterval(() => {
        setDots((prev) => {
          if (prev === "") return ".";
          if (prev === ".") return "..";
          if (prev === "..") return "...";
          return "";
        });
      }, 500);

      return () => clearInterval(dotInterval);
    }
  }, [displayedText, text]);

  return (
    <span>
      {displayedText}
      {dots}
    </span>
  );
}

function AnimatedText({ text }: { text: string }) {
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => {
        // looping green text for funsies
        return (prev + 1) % text.length;
      });
    }, 150); // speed of animation

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <span>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={index === highlightIndex ? 'text-[#6F7F63]' : 'text-[#1E1E1E]'}
          style={{ transition: 'color 0.2s ease' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

// azure icon component (since react-icons doesn't have it)
const AzureIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
  </svg>
);

const skillCategories = [
  {
    category: "languages",
    skills: [
      { name: "python", icon: SiPython },
      { name: "c++", icon: SiCplusplus },
      { name: "javascript", icon: SiJavascript },
      { name: "typescript", icon: SiTypescript },
      { name: "sql", icon: SiPostgresql },
      { name: "html/css", icon: [SiHtml5, SiCss3] },
    ]
  },
  {
    category: "frameworks",
    skills: [
      { name: "react.js", icon: SiReact },
      { name: "next.js", icon: SiNextdotjs },
      { name: "express.js", icon: SiExpress },
      { name: "django", icon: SiDjango },
      { name: "tailwind css", icon: SiTailwindcss },
    ]
  },
  {
    category: "databases",
    skills: [
      { name: "mysql", icon: SiMysql },
      { name: "postgresql", icon: SiPostgresql },
      { name: "mongodb", icon: SiMongodb },
    ]
  },
  {
    category: "tools & platforms",
    skills: [
      { name: "git", icon: SiGit },
      { name: "vite", icon: SiVite },
      { name: "pytorch", icon: SiPytorch },
      { name: "google colab", icon: SiGooglecolab },
      { name: "aws", icon: SiAmazon },
      { name: "azure", icon: AzureIcon },
    ]
  },
];

export default function About() {
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="min-h-screen bg-[#F7F6F3] text-[#1E1E1E] relative overflow-hidden">
      {/* hamburger menu */}
      <button
        onClick={toggleMenu}
        className={`absolute top-8 left-8 z-50 w-8 h-8 flex flex-col justify-center gap-1.5 transition-opacity duration-300 cursor-pointer group ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Menu"
      >
        <span className="block w-full h-1 bg-[#1E1E1E] group-hover:bg-[#6F7F63] transition-colors"></span>
        <span className="block w-full h-1 bg-[#1E1E1E] group-hover:bg-[#6F7F63] transition-colors"></span>
        <span className="block w-full h-1 bg-[#1E1E1E] group-hover:bg-[#6F7F63] transition-colors"></span>
      </button>

      {/* logo - top right */}
      <Link
        href="/"
        className={`absolute top-8 right-8 z-50 text-2xl font-bold text-[#1E1E1E] hover:text-[#6F7F63] transition-colors tracking-tighter ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        style={{ letterSpacing: '-0.02em' }}
      >
        jn
      </Link>

      {/* navigation overlay */}
      <div
        className={`fixed inset-0 bg-[#C9C6C1] z-40 flex items-center justify-center transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-row gap-12 md:gap-16 items-center">
          <Link
            href="/about"
            className="text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#1E1E1E] hover:decoration-[#6F7F63] font-bold tracking-tighter text-2xl md:text-3xl"
            style={{ letterSpacing: '-0.01em' }}
            onClick={() => setIsMenuOpen(false)}
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#1E1E1E] hover:decoration-[#6F7F63] font-bold tracking-tighter text-2xl md:text-3xl"
            style={{ letterSpacing: '-0.01em' }}
            onClick={() => setIsMenuOpen(false)}
          >
            projects
          </Link>
          <Link
            href="/contact"
            className="text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#1E1E1E] hover:decoration-[#6F7F63] font-bold tracking-tighter text-2xl md:text-3xl"
            style={{ letterSpacing: '-0.01em' }}
            onClick={() => setIsMenuOpen(false)}
          >
            contact
          </Link>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen pt-20 md:pt-0">
        {/* left section - images */}
        <div
          className={`w-full md:w-1/2 flex flex-col items-center p-6 md:p-8 md:pt-20 transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 w-full max-w-xl">
            <div className="relative w-full aspect-[4/3] group cursor-pointer">
              <Image
                src="/self-2.jpg"
                alt="About me"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-[#C9C6C1] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-[#1E1E1E] text-sm md:text-base px-4 text-center font-normal tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                  last october, i got invited to present my research on neural machine translation at the great minds in stem conference in san diego.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] group cursor-pointer">
              <Image
                src="/self-3.jpg"
                alt="Skills"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[#C9C6C1] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-[#1E1E1E] text-sm md:text-base px-4 text-center font-normal tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                  my team and i placing third at my first ever hackathon, code red astra hosted at the university of houston!
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] group cursor-pointer">
              <Image
                src="/self-4.jpg"
                alt="Experience"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[#C9C6C1] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-[#1E1E1E] text-sm md:text-base px-4 text-center font-normal tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                  this was the last day of teaching my fall junior engineering club at code ninjas. as you can see, my students were super proud of themselves... or maybe their certificates on the fancy paper?
                </p>
              </div>
            </div>
          </div>
          
          {/* note section */}
          <section className="w-full max-w-xl mt-8">
            <div className="flex items-center justify-between mb-6 gap-4">
              <h2 className="text-5xl md:text-6xl font-bold text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
                note
              </h2>
              {/* currently listening to section */}
              <div className="flex items-center gap-2 justify-end flex-shrink-0">
                <HiOutlineMusicNote className="w-5 h-5 text-[#1E1E1E]" />
                <p className="text-sm md:text-base text-[#1E1E1E] font-normal tracking-tighter text-right" style={{ letterSpacing: '-0.01em' }}>
                  currently listening to: <span className="font-bold"><AnimatedText text="twilight by elliott smith" /></span>
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-[#1E1E1E] leading-relaxed font-normal tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
              in the off chance that i am not doing anything cs-related, my current hobbies are chess, guitar, videography, and cooking. i love talking about these subjects, so please don't hesitate to send me a message if you want a friend.
            </p>
          </section>
        </div>

        {/* right section - content */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-start items-start p-6 md:p-8 md:pl-4 md:pt-24 transition-opacity duration-1000 delay-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* about me section */}
          <section className="mb-12 md:mb-16 w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
              <TypewriterText
                text="about me"
                onComplete={() => setTypingComplete(true)}
              />
            </h2>
            <p
              className={`text-base md:text-lg text-[#1E1E1E] leading-relaxed max-w-2xl font-normal tracking-tighter transition-opacity duration-1000 ${
                typingComplete ? "opacity-100" : "opacity-0"
              }`}
              style={{ letterSpacing: '-0.01em' }}
            >
              i didn't come to computer science just to write code, i came to build things that actually matter. as a first-gen college student and a woman in stem, i've learned to approach challenges with resilience, intention, and awareness. i'm passionate about solving real-world problems, while inspiring others to pursue their passions in stem.
            </p>
          </section>

          {/* skills section */}
          <section className="mb-12 md:mb-16 w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
              skills
            </h2>
            <div className="space-y-6 max-w-2xl">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3 className="text-sm font-bold text-[#6F7F63] tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-[#C9C6C1] rounded hover:border-[#6F7F63] transition-colors"
                      >
                        {Array.isArray(skill.icon) ? (
                          <div className="flex gap-1">
                            {skill.icon.map((Icon, i) => (
                              <Icon key={i} className="w-4 h-4 text-[#1E1E1E]" />
                            ))}
                          </div>
                        ) : (
                          <skill.icon className="w-4 h-4 text-[#1E1E1E]" />
                        )}
                        <span className="text-xs font-normal text-[#1E1E1E] tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* experience section */}
          <section className="w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
              experience
            </h2>
            <div className="flex flex-col gap-6 max-w-2xl">
              {[
                {
                  title: "computer vision researcher",
                  company: "university of north texas",
                  date: "january 2026 - present",
                  location: "remote",
                  description: "conducting research on computer vision–based road debris detection using deep learning models to improve roadway safety. developing and evaluating image-based object detection systems to identify hazardous debris in diverse driving environments."
                },
                {
                  title: "student director",
                  company: "nsm career center",
                  date: "september 2025 - present",
                  location: "on-site",
                  description: "connecting students with industry leaders through career fairs, internship bootcamps, and employer partnerships. i organize initiatives that strengthen employer relations, support student career development, and build pipelines for future stem talent."
                },
                {
                  title: "coding instructor",
                  company: "code ninjas",
                  date: "december 2024 - present",
                  location: "on-site",
                  description: "teaching students ages 6–14 the fundamentals of programming through hands-on projects in javascript, block coding, and game development. i lead interactive camps on minecraft and roblox modding, robotics, and creative engineering, helping students build problem-solving and critical thinking skills in a fun and supportive environment."
                },
                {
                  title: "machine learning researcher",
                  company: "california state university dominguez hills",
                  date: "january 2025 - june 2025",
                  location: "remote",
                  description: "built a vietnamese–english medical translation model using opennmt-py and mbart50. optimized performance with advanced preprocessing and collaborated with researchers to enhance translation quality for low-resource clinical data."
                }
              ].map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#C9C6C1] pb-6 last:pb-0 group cursor-pointer">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#F7F6F3] border-2 border-[#1E1E1E] rounded-full group-hover:bg-[#6F7F63] transition-colors duration-300"></div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1E1E1E] tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                      {job.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-base font-normal text-[#6F7F63] tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                        {job.company}
                      </p>
                      <p className="text-base font-normal text-[#6F7F63] tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                        {job.date} • {job.location}
                      </p>
                    </div>
                    <p className="text-sm font-normal text-[#1E1E1E] tracking-tighter mt-2" style={{ letterSpacing: '-0.01em' }}>
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

