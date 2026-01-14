"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

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

const projects = [
  {
    id: "navi",
    image: "/navi.png",
    title: "navi",
    description: "we built navi at the 2025 codered hackathon as an ai-powered personal assistant that unifies email, calendars, maps, and voice into a single conversational interface. powered by our modular aggregator mcp framework, navi syncs gmail, outlook, and calendar with plug-and-play integrations, reducing data latency. using google gemini for language understanding and elevenlabs for voice, navi feels less like software and more like a real assistant.",
    skills: [
      "next.js",
      "apis",
      "googlegemini",
      "elevenlabs",
      "voice-interaction",
    ],
    githubUrl: "https://github.com/armaanamatya/CodeRed-Astra",
    devpostUrl: "https://devpost.com/software/navi-ri7lkb",
  },
  {
    id: "impactMatch",
    image: "/impactMatch.png",
    title: "impact match",
    description: "a full-stack platform that makes volunteering easier, smarter, and more equitable by automatically matching people to opportunities based on skills, availability, and location. instead of browsing endless listings, volunteers are connected to relevant events in real time. i helped build a secure backend with encrypted authentication, persistent user profiles, automated matching logic, and reporting tools with pdf and csv exports, backed by postgresql on aws for scalability and reliability.",
    skills: [
      "react",
      "postgres",
      "node.js",
      "aws",
      "automated-matching",
    ],
    githubUrl: "https://github.com/aadibaahmed/Volunteering_WebApp",
  },
  {
    id: "coogZoo",
    image: "/coogZoo.png",
    title: "coog zoo",
    description: "a full-stack zoo management system designed to streamline operations across animals, employees, exhibits, ticketing, and retail. the platform replaces fragmented workflows with a single, intuitive dashboard for managing real-time zoo data. i led a team of five and designed a normalized mysql schema with auditing triggers, transactions, and soft deletion, paired with an authenticated, responsive react interface backed by an aws-hosted mysql database.",
    skills: [
      "react",
      "mysql",
      "node.js",
      "express.js",
      "aws",
    ],
    githubUrl: "https://github.com/khangchung15/finalcoogzoo",
  },
  {
    id: "nmtPoster",
    image: "/nmtPoster.png",
    title: "towards inclusive healthcare",
    description: "a neural machine translation system built to translate between vietnamese and english using transformer-based models. i trained and evaluated an mbart-based architecture on large-scale, domain-specific parallel data, implementing custom preprocessing, tokenization, and evaluation pipelines. the project focused on improving translation quality through data scaling and metric-driven analysis using bleu, meteor, and bertscore.",
    skills: [
      "pytorch",
      "natural-language-processing",
      "transformer-based-models",
      "data-preprocessing",
      "evaluation-metrics",
    ],
    githubUrl: "",
    devpostUrl: "",
    posterUrl: "/nmt_poster.pdf",
    slidesUrl: "/nmt_slides.pdf",
  },
];

export default function Projects() {
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

      {/* main content */}
      <div className="flex flex-col items-center min-h-screen pt-24 md:pt-32 pb-12 px-6 md:px-8">
        <div
          className={`w-full max-w-5xl transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-12 md:mb-16 text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
            <TypewriterText
              text="project highlights"
              onComplete={() => setTypingComplete(true)}
            />
          </h1>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-opacity duration-1000 ${
              typingComplete ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: typingComplete ? "0.5s" : "0s" }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="flex flex-col border border-[#C9C6C1] rounded-lg overflow-hidden hover:border-[#6F7F63] transition-colors bg-[#F7F6F3]"
              >
                {/* project image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title || `Project ${index + 1}`}
                    fill
                    className={`${project.id === "navi" ? "object-cover" : "object-contain"}`}
                  />
                </div>

                {/* project details */}
                <div className="flex flex-col gap-4 p-6 text-center">
                  {/* title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] tracking-tighter" style={{ letterSpacing: '-0.02em' }}>
                    {project.title || ""}
                  </h2>

                  {/* description */}
                  {project.description ? (
                    <div className="flex flex-col gap-3">
                      {project.description.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-sm md:text-base text-[#1E1E1E] leading-relaxed font-normal tracking-tighter" style={{ letterSpacing: '-0.01em' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {/* skills section */}
                  {project.skills.length > 0 && (
                    <p className="text-sm md:text-base text-[#6F7F63] font-bold tracking-tighter text-center" style={{ letterSpacing: '-0.01em' }}>
                      {project.skills.map((skill, index) => (
                        <span key={index}>
                          #{skill}{index < project.skills.length - 1 ? ' ' : ''}
                        </span>
                      ))}
                    </p>
                  )}

                  {/* links */}
                  <div className="flex flex-col gap-2 mt-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        <SiGithub className="w-4 h-4 md:w-5 md:h-5" />
                        <span>github</span>
                      </Link>
                    )}
                    {'devpostUrl' in project && project.devpostUrl && (
                      <Link
                        href={project.devpostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        <span>devpost</span>
                      </Link>
                    )}
                    {'posterUrl' in project && project.posterUrl && (
                      <Link
                        href={project.posterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        <HiOutlineDocumentText className="w-4 h-4 md:w-5 md:h-5" />
                        <span>poster</span>
                      </Link>
                    )}
                    {'slidesUrl' in project && project.slidesUrl && (
                      <Link
                        href={project.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        <span>more</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

