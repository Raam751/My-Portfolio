import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { explorations } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Explorations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const leftItems = explorations.filter((_, i) => i % 2 === 0);
  const rightItems = explorations.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    if (contentRef.current && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: contentRef.current,
        pinSpacing: false,
      });
    }

    const leftChildren = leftColRef.current?.children;
    const rightChildren = rightColRef.current?.children;

    if (leftChildren) {
      gsap.fromTo(
        Array.from(leftChildren),
        { y: 100 },
        {
          y: -200,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }

    if (rightChildren) {
      gsap.fromTo(
        Array.from(rightChildren),
        { y: 200 },
        {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id='explorations' className='relative min-h-[300vh] bg-bg'>
      {/* Layer 1: Pinned Center Content */}
      <div ref={contentRef} className='relative z-10 h-screen flex items-center justify-center text-center px-6'>
        <div className='max-w-2xl mx-auto'>
          {/* Eyebrow */}
          <div className='flex items-center justify-center gap-4 mb-4'>
            <div className='w-8 h-px bg-stroke' />
            <span className='text-xs text-muted uppercase tracking-[0.3em]'>Explorations</span>
            <div className='w-8 h-px bg-stroke' />
          </div>

          {/* Heading */}
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary mb-4'>
            Visual <span className='font-display italic'>playground</span>
          </h2>

          {/* Subtext */}
          <p className='text-sm md:text-base text-muted mb-8 max-w-md mx-auto'>
            Experimental visuals, creative coding, and design explorations.
          </p>

          {/* Button */}
          <a
            href='https://github.com/Raam751'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex rounded-full text-sm px-5 py-2.5 border border-stroke text-muted hover:text-text-primary relative group transition-all duration-300'
          >
            <span className='absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <span className='relative bg-bg rounded-full px-5 py-2.5 flex items-center gap-2'>
              View on GitHub <span>↗</span>
            </span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div
        ref={columnsRef}
        className='absolute top-0 left-0 right-0 z-20 pointer-events-auto'
      >
        <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
          <div className='grid grid-cols-2 gap-8 md:gap-40'>
            {/* Left Column */}
            <div ref={leftColRef} className='pt-[80vh]'>
              {leftItems.map((item) => (
                <div
                  key={item.id}
                  className='aspect-square max-w-[320px] mx-auto mb-8 rounded-3xl overflow-hidden border border-stroke bg-surface group cursor-pointer relative'
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                    <span className='text-sm text-text-primary font-medium'>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div ref={rightColRef} className='pt-[120vh]'>
              {rightItems.map((item) => (
                <div
                  key={item.id}
                  className='aspect-square max-w-[320px] mx-auto mb-8 rounded-3xl overflow-hidden border border-stroke bg-surface group cursor-pointer relative'
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                    <span className='text-sm text-text-primary font-medium'>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explorations;
