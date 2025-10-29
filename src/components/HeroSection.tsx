import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    text: "The process was incredibly smooth. Issa Compass handled everything professionally and I got my work visa in record time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
    text: "Best visa service in Thailand. They made my retirement visa application stress-free and straightforward.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    country: "Japan",
    text: "Excellent communication and support throughout the entire process. Highly recommend for any visa needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Williams",
    country: "Australia",
    text: "Professional, efficient, and friendly. They went above and beyond to ensure everything was perfect.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hans Mueller",
    country: "Germany",
    text: "Thanks to Issa Compass, I'm now living my dream life in Thailand. The team was amazing!",
    rating: 5,
  },
];

const rotatingTexts = [
  "Backed by software, not by paperwork",
  "No hidden fees, no hassle",
  "Timelines and transparency"
];

export function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1651670213051-4ced39e62eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbHMlMjBUaGFpbGFuZCUyMGNpdHl8ZW58MXx8fHwxNzYxNzEzNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Happy professionals in Thailand"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f4]/50 to-[#faf8f4]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Headline */}
        <div className="text-center mb-12 max-w-4xl mx-auto py-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6" style={{ fontFamily: 'Georgia, serif', color: '#267383' }}>
            "By going with Issa Compass I was able to build the life I want in Thailand"
          </h1>
          <p 
            className="text-base sm:text-lg italic transition-opacity duration-500"
            style={{ 
              color: '#267383',
              opacity: isVisible ? 1 : 0
            }}
          >
            {rotatingTexts[currentTextIndex]}
          </p>
        </div>

        {/* Reviews Gallery */}
        <div className="mb-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm border border-[#267383]/10 transition-all duration-300 hover:shadow-md hover:border-[#267383]/30"
                style={{ userSelect: 'none' }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#edac23] text-[#edac23]" />
                  ))}
                </div>
                <p className="mb-4 text-gray-700 italic">"{review.text}"</p>
                <div className="border-t pt-3" style={{ borderColor: '#267383' }}>
                  <div style={{ color: '#267383' }}>{review.name}</div>
                  <div className="text-sm text-gray-500">{review.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button
            onClick={() => scrollToSection('visa-types')}
            className="w-full sm:w-auto px-8 py-6 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#267383', color: 'white' }}
          >
            Visa Types
          </Button>
          <Button
            onClick={() => scrollToSection('get-started')}
            className="w-full sm:w-auto px-8 py-6 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#edac23', color: 'white' }}
          >
            Get Started
          </Button>
          <Button
            onClick={() => scrollToSection('about-us')}
            className="w-full sm:w-auto px-8 py-6 bg-white transition-all duration-300 hover:scale-105 border-2"
            style={{ borderColor: '#267383', color: '#267383' }}
          >
            Learn More
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#267383]/20 rounded-full hidden md:block" />
        <div className="absolute bottom-40 left-10 w-16 h-16 border-2 border-[#edac23]/30 hidden md:block" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
