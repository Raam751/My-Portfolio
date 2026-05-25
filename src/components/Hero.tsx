import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

const HLS_URL =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

const roles = ['Creative', 'Fullstack', 'Developer', 'Scholar'];

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS video setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = HLS_URL;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Role cycling every 2000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );
      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.8'
      );
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center text-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
            COLLECTION &apos;26
          </p>

          {/* Name */}
          <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
            Raam
            <br />
            Tichkule
          </h1>

          {/* Role line */}
          <p className="blur-in text-sm md:text-base text-muted mb-4">
            A{' '}
            <span
              key={roleIndex}
              className="font-display italic text-text-primary animate-role-fade-in inline-block"
            >
              {roles[roleIndex]}
            </span>{' '}
            based in India.
          </p>

          {/* Description */}
          <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
            Designing seamless digital interactions by focusing on the unique
            nuances which bring systems to life.
          </p>

          {/* CTA Buttons */}
          <div className="blur-in flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* See Works */}
            <a
              href="#work"
              className="rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-transparent hover:text-text-primary border-2 border-transparent hover:border-transparent relative group transition-all duration-300 hover:scale-105 font-medium"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              See Works
            </a>

            {/* Reach out */}
            <a
              href="#contact"
              className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-transparent text-text-primary relative group transition-all duration-300 hover:scale-105 font-medium hover:border-transparent"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              Reach out...
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute w-full h-3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
