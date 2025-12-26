"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

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

export default function Contact() {
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contactLinks = [
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/jessicaknguyen04/",
      icon: SiLinkedin,
    },
    {
      label: "github",
      url: "https://github.com/jessicangu",
      icon: SiGithub,
    },
    {
      label: "x",
      url: "https://x.com/jessandtech",
      icon: SiX,
    },
    {
      label: "email",
      url: "mailto:jessicaknguyen04@gmail.com",
      icon: HiOutlineMail,
    },
  ];

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
      <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-8">
        <div
          className={`w-full max-w-2xl transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-12 md:mb-16 text-[#1E1E1E] tracking-tighter leading-tight text-center" style={{ letterSpacing: '-0.02em' }}>
            <TypewriterText
              text="contact me"
              onComplete={() => setTypingComplete(true)}
            />
          </h1>

          <div
            className={`flex flex-col gap-4 md:gap-6 transition-opacity duration-1000 ${
              typingComplete ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: typingComplete ? "0.5s" : "0s" }}
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] tracking-tighter"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

