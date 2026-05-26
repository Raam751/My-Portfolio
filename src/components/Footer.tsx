import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { socialLinks } from '../data';

const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  // HLS Video Setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  // GSAP Marquee
  useEffect(() => {
    if (!marqueeInnerRef.current) return;

    const tween = gsap.to(marqueeInnerRef.current, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const marqueeText = 'BUILDING THE FUTURE • ';

  return (
    <section className='bg-bg pt-8 md:pt-12 pb-8 md:pb-12 overflow-hidden relative'>
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        controls={false}
        className='absolute inset-0 w-full h-full object-cover'
        style={{ transform: 'scaleY(-1)' }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/60' />

      {/* Top fade */}
      <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent' />

      {/* Content */}
      <div className='relative z-10'>
        {/* Marquee */}
        <div className='overflow-hidden py-8 md:py-12'>
          <div ref={marqueeInnerRef} className='inline-flex whitespace-nowrap'>
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className='text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10 select-none'
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className='border-t border-stroke pt-8 px-6'>
          <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
              {/* Social Links */}
              <div className='flex items-center gap-6'>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-wider'
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className='flex items-center gap-3'>
                <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
                <span className='text-xs text-muted'>Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
