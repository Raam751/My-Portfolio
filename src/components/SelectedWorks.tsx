import { motion } from 'framer-motion';
import { projects } from '../data';

const colSpans = [
  'md:col-span-7',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-7',
  'md:col-span-7',
  'md:col-span-5',
];

const SelectedWorks = () => {
  return (
    <section id='work' className='bg-bg py-12 md:py-16'>
      <div className='max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Eyebrow */}
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-8 h-px bg-stroke' />
            <span className='text-xs text-muted uppercase tracking-[0.3em]'>Selected Work</span>
          </div>

          {/* Heading */}
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary mb-4'>
            Featured <span className='font-display italic'>projects</span>
          </h2>

          {/* Subtext Row */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <p className='text-sm md:text-base text-muted max-w-lg'>
              A selection of projects I've worked on, from concept to launch.
            </p>
            <a
              href='#work'
              className='hidden md:inline-flex rounded-full text-sm px-5 py-2.5 border border-stroke text-muted hover:text-text-primary relative group transition-all duration-300'
            >
              <span className='absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <span className='relative bg-bg rounded-full px-5 py-2.5 flex items-center gap-2'>
                View all work <span>→</span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className='mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className={`${colSpans[index]} group cursor-pointer relative overflow-hidden rounded-3xl bg-surface border border-stroke aspect-[4/3] md:aspect-auto md:h-[400px]`}
              onClick={() => window.open(project.live, '_blank')}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
              />

              {/* Halftone overlay */}
              <div
                className='absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none'
                style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '4px 4px',
                }}
              />

              {/* Hover overlay */}
              <div className='absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center'>
                {/* Label pill */}
                <div className='relative'>
                  <div className='absolute inset-[-2px] rounded-full gradient-border-ring' />
                  <div className='relative bg-text-primary rounded-full px-6 py-3 flex items-center gap-2'>
                    <span className='text-sm text-bg font-medium'>View —</span>
                    <span className='text-sm text-bg font-display italic'>{project.title}</span>
                  </div>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className='absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-xs text-white/60 uppercase tracking-wider mb-1'>{project.category}</p>
                    <h3 className='text-lg font-medium text-white'>{project.title}</h3>
                  </div>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </a>
                </div>
                <div className='flex gap-2 mt-2'>
                  {project.tags.map((tag) => (
                    <span key={tag} className='text-[10px] text-white/50 uppercase tracking-wider bg-white/5 rounded-full px-2 py-0.5'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
