import { motion } from 'framer-motion';
import { stats } from '../data';

const Stats = () => {
  return (
    <section className='bg-bg py-16 md:py-24'>
      <div className='max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16'>
        {/* Top border */}
        <div className='w-full h-px bg-stroke mb-12' />

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='text-center md:text-left'
            >
              <div className='text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-2'>
                {stat.value}
              </div>
              <div className='text-sm text-muted uppercase tracking-[0.2em]'>
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className='hidden md:block w-full h-px bg-stroke mt-8' />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
