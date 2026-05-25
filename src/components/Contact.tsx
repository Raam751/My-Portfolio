import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    emailjs
      .send(
        'service_jsikoza',
        'template_fd2bivd',
        {
          from_name: form.name,
          to_name: 'Raam Tichkule',
          from_email: form.email,
          to_email: 'yadnyawalka7@gmail.com',
          message: form.message,
        },
        'XXyutNBRkOao8QeT1'
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          setForm({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        },
        () => {
          setLoading(false);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-end" id="contact-form">
      {/* Background Image */}
      <img
        src="/images/contact-hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient - dark at top to blend with previous section, transparent in middle to show image */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Floating heading - positioned above the figure */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="absolute top-[15%] md:top-[18%] left-0 right-0 text-center z-10 px-6"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-white leading-[1.1] mb-4">
          Let's Build
          <br />
          Something Great.
        </h2>
        <p className="text-sm md:text-base text-white/60 max-w-md mx-auto">
          Have a vision? Let's turn it into reality together.
        </p>
      </motion.div>

      {/* Liquid glass footer with contact form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="liquid-glass w-full rounded-t-3xl p-6 md:p-10 text-white/70 relative z-10"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Top Grid: Form + Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            {/* Left: Contact Form */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                {/* Logo */}
                <div className="w-9 h-9 rounded-full accent-gradient flex items-center justify-center">
                  <span className="font-display italic text-[13px] text-white">RT</span>
                </div>
                <span className="text-xl font-medium text-white">Get in Touch</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="glass-input"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="glass-input"
                  />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="glass-input glass-input-textarea"
                  rows={5}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full text-sm px-8 py-3.5 bg-white text-black font-medium relative group transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message →'
                    )}
                  </button>

                  {/* Status messages */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-400 text-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message sent! I'll get back to you soon.
                      </motion.span>
                    )}
                    {status === 'error' && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400 text-sm"
                      >
                        Something went wrong. Please try again.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>

            {/* Right: Contact Info & Quick Links */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-8">
                {/* Connect */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                    Connect
                  </h4>
                  <ul className="text-xs space-y-2.5">
                    <li>
                      <a
                        href="https://x.com/RaamTichkule"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        Twitter / X
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/raam-tichkule"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Raam751"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:yadnyawalka7@gmail.com"
                        className="hover:text-white transition-colors"
                      >
                        Email
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Explore */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                    Explore
                  </h4>
                  <ul className="text-xs space-y-2.5">
                    <li>
                      <a href="#work" className="hover:text-white transition-colors">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://port5olio.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        Resume / V1
                      </a>
                    </li>
                    <li>
                      <a href="#explorations" className="hover:text-white transition-colors">
                        Explorations
                      </a>
                    </li>
                    <li>
                      <a href="#home" className="hover:text-white transition-colors">
                        Back to Top ↑
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Availability badge */}
              <div className="mt-8 liquid-glass rounded-2xl p-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-xs text-white font-medium">Available for projects</p>
                  <p className="text-[10px] text-white/40 mt-0.5">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              © 2026 Raam Tichkule. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Designed & Built with passion
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
