"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiYoutube } from "react-icons/si";

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

const creativeProjects = [
  {
    id: "pictures-of-you",
    title: "pictures of you",
    image: "/pictures_of_you.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=igwUqHKtiJU",
  },
  {
    id: "bitter-sweet-symphony",
    title: "bitter sweet symphony",
    image: "/bitter_sweet_symphony.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=K7sJ_ELeX3g",
  },
  {
    id: "somebody-that-i-used-to-know",
    title: "somebody that i used to know",
    image: "/eternal.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=P0Rln1ANsv0",
  },
  {
    id: "say-yes",
    title: "say yes",
    image: "/say_yes.jpg",
    youtubeUrl: "https://www.youtube.com/shorts/x8kF85E4pxI",
  },
];

export default function Creative() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-8 md:mb-12 text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
            <TypewriterText
              text="creative work"
              onComplete={() => setTypingComplete(true)}
            />
          </h1>

          {/* description */}
          <div
            className={`mb-12 md:mb-16 transition-opacity duration-1000 ${
              typingComplete ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: typingComplete ? "0.5s" : "0s" }}
          >
            <p className="text-base md:text-lg text-[#1E1E1E] leading-relaxed font-normal tracking-tighter text-center" style={{ letterSpacing: '-0.01em' }}>
              whenever i have a little creative kick, i post these edits on my new tiktok. so far, ive gotten over 150k likes and half a million views on the page! check me out @dreadfulclementines
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-opacity duration-1000 ${
              typingComplete ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: typingComplete ? "0.8s" : "0s" }}
          >
            {creativeProjects.map((project) => (
              <div 
                key={project.id} 
                className="flex flex-col border border-[#C9C6C1] rounded-lg overflow-hidden hover:border-[#6F7F63] transition-colors bg-[#F7F6F3]"
              >
                {/* project image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* project details */}
                <div className="flex flex-col gap-4 p-6 text-center">
                  {/* title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] tracking-tighter" style={{ letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h2>

                  {/* youtube link */}
                  <Link
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter mt-2"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    <SiYoutube className="w-4 h-4 md:w-5 md:h-5" />
                    <span>watch</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
