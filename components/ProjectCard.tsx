import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" },
    );

    return () => {
      document.body.style.overflow = "";
      ScrollTrigger.refresh();
    };
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" });
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.85,
      y: 10,
      duration: 0.25,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={imgRef}
        className="relative max-w-4xl max-h-[90vh] w-full mx-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors cursor-zoom-out"
          aria-label="Close zoom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default function ProjectCard({ name, description, link, image }) {
  const cardRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  // console.log(
  //   `Rendering ProjectCard: ${name}, link: ${link}, image: ${image ? image[0]?.url : "No image"}, description: ${description ? description.substring(0, 30) + "..." : "No description"}`,
  // );

  // useGSAP(() => {
  //   gsap.from(cardRef.current, {
  //     scrollTrigger: {
  //       trigger: cardRef.current,
  //       start: "top bottom-=100px",
  //       toggleActions: "play none none none",
  //     },
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: "power3.out",
  //   });
  // }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col md:flex-row gap-8 p-6 my-4 bg-transparent transition-all duration-500 rounded-3x"
    >
      {/* content */}
      <div className="order-2 flex flex-col justify-center flex-grow py-2 md:order-1">
        <div className="mb-1">
          <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-medium">
          {description}
        </p>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors duration-300 break-all underline decoration-zinc-200 dark:decoration-zinc-800 hover:decoration-primary/50"
            >
              {link.replace(/^https?:\/\//, "")}
            </a>
          ) : (
            <span className="text-sm text-zinc-400 italic">No link provided</span>
          )}
        </div>
      </div>

      {/* image container */}
      <div className="order-1 w-full md:w-64 h-40 shrink-0 relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 md:order-2">
        {image && image[0] ? (
          <button
            onClick={() => setZoomed(true)}
            className="w-full h-full block cursor-zoom-in"
            aria-label={`Zoom image for ${name}`}
          >
            <Image
              src={image[0].url}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              unoptimized={image[0].url.includes("amazonaws.com")}
              className="object-cover "
            />
          </button>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none"></div>
      </div>

      {/* lightbox */}
      {zoomed && image && image[0] && (
        <Lightbox src={image[0].url} alt={name} onClose={() => setZoomed(false)} />
      )}
    </div>
  );
}
