import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
        className="relative mx-4 flex max-h-[90vh] w-full max-w-4xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="max-h-[90vh] max-w-full rounded-2xl object-contain" />
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 cursor-zoom-out rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
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

interface ProjectImage {
  name: string;
  url: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  image: ProjectImage[];
}

const FALLBACK_IMAGE = "/no_image.jpg";

export default function ProjectCard({ name, description, link, image }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [imageSrc, setImageSrc] = useState(FALLBACK_IMAGE);

  const primaryImage = useMemo(() => image?.[0]?.url?.trim() || "", [image]);
  const hasRemoteImage = primaryImage.length > 0;
  const displayLink = link ? link.replace(/^https?:\/\//, "") : "";

  useEffect(() => {
    setImageSrc(primaryImage || FALLBACK_IMAGE);
  }, [primaryImage]);

  const isFallbackImage = imageSrc === FALLBACK_IMAGE;

  return (
    <article ref={cardRef} className="group relative grid grid-cols-[2.75rem_1fr] gap-3 md:grid-cols-[4rem_1fr] md:gap-6">
      <div className="relative flex flex-col items-center">
        <span className="mt-2 h-3 w-3 rounded-full border-2 border-primary/30 bg-primary shadow-[0_0_0_6px_rgba(59,130,246,0.08)]" />
        <span className="mt-2 h-full w-px bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div className="pb-10 pt-1">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
          <div className="order-1 relative h-36 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 md:order-2 md:h-28 md:w-44">
            <button
              onClick={() => {
                if (!isFallbackImage) {
                  setZoomed(true);
                }
              }}
              className={`block h-full w-full ${isFallbackImage ? "cursor-default" : "cursor-zoom-in"}`}
              aria-label={isFallbackImage ? `${name} preview unavailable` : `Zoom image for ${name}`}
              type="button"
            >
              <Image
                src={imageSrc}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 176px"
                unoptimized={imageSrc.includes("amazonaws.com")}
                onError={() => setImageSrc(FALLBACK_IMAGE)}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/10 to-transparent" />
            {!hasRemoteImage || isFallbackImage ? (
              <div className="absolute inset-x-3 bottom-3 rounded-md bg-white/80 px-2 py-1 text-center text-[10px] font-medium tracking-wide text-zinc-600 backdrop-blur-sm dark:bg-zinc-950/80 dark:text-zinc-300">
                Preview unavailable
              </div>
            ) : null}
          </div>

          <div className="order-2 min-w-0 flex-1 space-y-3 md:order-1">
            <div className="space-y-1">
              <h3 className="text-base font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary dark:text-zinc-100 md:text-lg">
                {name}
              </h3>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center gap-1 text-[11px] font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 transition-colors duration-300 hover:text-primary hover:decoration-primary/50 dark:text-zinc-400 dark:decoration-zinc-700 md:text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-primary"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="truncate">{displayLink}</span>
                </a>
              ) : (
                <span className="text-[11px] italic text-zinc-400 dark:text-zinc-500 md:text-xs">
                  No link provided
                </span>
              )}
            </div>

            <p className="text-xs leading-6 text-justify text-zinc-600 dark:text-zinc-400 md:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>

      {zoomed ? <Lightbox src={imageSrc} alt={name} onClose={() => setZoomed(false)} /> : null}
    </article>
  );
}
