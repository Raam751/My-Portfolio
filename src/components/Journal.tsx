import { motion } from 'framer-motion';
import { journalEntries } from '../data';

const Journal = () => {
  return (
    <section className='bg-bg py-16 md:py-24'>
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
            <span className='text-xs text-muted uppercase tracking-[0.3em]'>Journal</span>
          </div>

          {/* Heading */}
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary mb-4'>
            Recent <span className='font-display italic'>thoughts</span>
          </h2>

          {/* Subtext Row */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <p className='text-sm md:text-base text-muted max-w-lg'>
              Ideas, learnings, and reflections on building for the web.
            </p>
            <a
              href='#'
              className='hidden md:inline-flex rounded-full text-sm px-5 py-2.5 border border-stroke text-muted hover:text-text-primary relative group transition-all duration-300'
            >
              <span className='absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <span className='relative bg-bg rounded-full px-5 py-2.5 flex items-center gap-2'>
                View all <span>→</span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Entries */}
        <div className='mt-10 flex flex-col gap-4'>
          {journalEntries.map((entry, index) => (
            <motion.a
              key={entry.title}
              href={entry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-4 rounded-[20px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke hover:border-stroke/80 transition-all duration-300 group'
            >
              <img
                src={entry.image}
                alt={entry.title}
                className='w-full sm:w-14 h-32 sm:h-14 rounded-2xl sm:rounded-full object-cover flex-shrink-0'
              />
              <h3 className='flex-1 text-sm md:text-base text-text-primary group-hover:text-white transition-colors font-medium'>
                {entry.title}
              </h3>
              <div className='flex items-center gap-4 text-xs text-muted flex-shrink-0'>
                <span>{entry.readTime}</span>
                <span className='w-1 h-1 rounded-full bg-stroke' />
                <span>{entry.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
