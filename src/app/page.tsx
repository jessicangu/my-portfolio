"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";

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
    }, 120); // typing speed for name!

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
      }, 500); // dot animation speed!

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

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // trigger fade-in animations
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
        style={{ animationDelay: showContent ? "0.2s" : "0s" }}
        aria-label="Menu"
      >
        <span className={`block w-full h-1 bg-[#1E1E1E] group-hover:bg-[#6F7F63] transition-colors ${isMenuOpen ? "bg-[#1E1E1E]" : ""}`}></span>
        <span className={`block w-full h-1 bg-[#1E1E1E] group-hover:bg-[#6F7F63] transition-colors ${isMenuOpen ? "bg-[#1E1E1E]" : ""}`}></span>
        <span className={`block w-full h-1 bg-[#1E1E1E] group-hover:bg-[#6F7F63] transition-colors ${isMenuOpen ? "bg-[#1E1E1E]" : ""}`}></span>
      </button>

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

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* picture section */}
        <div 
          className={`w-full md:w-1/2 flex items-center justify-end p-6 md:p-8 md:pr-6 transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full max-w-xl aspect-[3/4]">
            <Image
              src="/self.png"
              alt="Jessica Nguyen"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* introduction section */}
        <div 
          className={`w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-8 md:pl-4 transition-opacity duration-1000 delay-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-5 text-[#1E1E1E] tracking-tighter leading-tight" style={{ letterSpacing: '-0.02em' }}>
            <TypewriterText 
              text="jessica nguyen" 
              onComplete={() => setTypingComplete(true)}
            />
          </h1>
          
          <p 
            className={`text-base md:text-lg mb-6 md:mb-8 text-[#1E1E1E] leading-tight max-w-lg font-bold tracking-tighter transition-opacity duration-1000 ${
              typingComplete ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: typingComplete ? "0.5s" : "0s", letterSpacing: '-0.01em' }}
          >
            computer science senior graduating this upcoming spring. interested in software and full-stack development, machine learning, consulting/analytics.
          </p>

          {/* contact information (homepage) */}
          <div 
            className={`flex flex-col gap-1 text-base md:text-lg transition-opacity duration-1000 items-end mt-12 md:mt-16 w-full max-w-lg ${
              typingComplete ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: typingComplete ? "0.8s" : "0s" }}
          >
            <Link 
              href="mailto:jessicaknguyen04@gmail.com"
              className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter text-right"
              style={{ letterSpacing: '-0.01em' }}
            >
              <HiOutlineMail className="w-4 h-4" />
              <span>jessicaknguyen04@gmail.com</span>
            </Link>
            <Link 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter text-right"
              style={{ letterSpacing: '-0.01em' }}
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              <span>resume</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/jessicaknguyen04/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#6F7F63] transition-colors underline decoration-[#C9C6C1] hover:decoration-[#6F7F63] font-bold tracking-tighter text-right"
              style={{ letterSpacing: '-0.01em' }}
            >
              <SiLinkedin className="w-4 h-4" />
              <span>linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
