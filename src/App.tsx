/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Github, Linkedin, Twitter, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: "Canteen Management System",
    description: "A web-based automation platform for food ordering and billing. Built with a responsive UI to reduce manual workload and waiting time.",
    tags: ["React", "Node.js", "MySQL", "Flask"],
    link: "#"
  },
  {
    title: "AI Chatbot for Symptom Analysis",
    description: "Intelligent diagnostic assistant using Machine Learning and NLP to analyze user symptoms and suggest potential conditions.",
    tags: ["Python", "Scikit-learn", "NLP", "Streamlit"],
    link: "#"
  },
  {
    title: "Competitive Programming",
    description: "Solved over 200+ problems on LeetCode and Codeforces, focusing on complex algorithms and data structures.",
    tags: ["C++", "Algorithms", "DSA"],
    link: "#"
  }
];

const skills = {
  "Languages": ["C++", "Python", "JavaScript", "SQL"],
  "Frameworks": ["React", "Flask", "Streamlit", "NumPy", "Pandas", "Scikit-learn"],
  "Tools": ["Git", "GitHub", "VS Code", "MySQL"]
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-dark noise-overlay">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="flex flex-col items-start gap-1">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 p-0.5">
            <img 
              src="/photo%202.jpeg" 
              alt="Ayush" 
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="text-xl font-bold tracking-tighter">AG.</div>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-mono">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:text-accent transition-colors ${activeTab === item ? 'text-accent' : 'text-paper/50'}`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Mesh Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-6 md:px-24 py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-7xl md:text-[10vw] font-extrabold leading-[0.85] tracking-tighter mb-8 italic">
                  AYUSH<br />GUPTA
                </h1>
                <p className="text-xl md:text-2xl text-paper/70 font-mono max-w-xl leading-relaxed">
                  Artificial Intelligence & Machine Learning designer developing software at the intersection of intelligence and interfaces.
                </p>
              </motion.div>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/20 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img
                      src="/photo%202.jpeg"
                      alt="Ayush Gupta"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Orbital elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                  <ArrowUpRight className="text-dark w-6 h-6" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-24 bg-paper/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-bold tracking-tighter italic border-b border-accent/30 pb-4 inline-block">ABOUT.</h2>
            </div>
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <p className="text-3xl md:text-4xl text-paper leading-tight font-medium">
                  I build things that move and systems that learn.
                </p>
                <div className="text-paper/60 font-mono space-y-6 text-lg max-w-2xl">
                  <p>
                    Currently pursuing Bachelor of Engineering in AI & ML at BMS Institute of Technology & Management. I specialize in building full-stack applications with an emphasis on data-driven intelligence.
                  </p>
                  <p>
                    My philosophy is centered on architectural honesty and refined aesthetics. Whether it's optimizing a neural network or crafting a high-performance interface, I strive for precision and excellence in every line of code.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter italic mb-16 text-center">EXPERTISE.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="font-mono text-accent text-xs tracking-widest uppercase border-l-2 border-accent pl-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-paper/10 hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-all duration-300 font-mono text-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 md:px-24 bg-paper/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter italic mb-16 text-right">SELECTED_WORKS.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-12 group hover:ring-1 hover:ring-accent/30 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-[10px] text-accent tracking-[0.3em]">0{idx + 1}</span>
                    <a href={project.link} className="p-2 bg-paper/5 rounded-full hover:bg-accent hover:text-dark transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors italic">{project.title}</h3>
                  <p className="text-paper/60 font-mono text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-paper/5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-paper/40 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-24">
          <div className="max-w-7xl mx-auto text-center space-y-12">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-4">LETS_TALK.</h2>
              <p className="text-accent font-mono tracking-widest uppercase">Open for collaborations and opportunities</p>
           </motion.div>

            <a
              href="mailto:ayushguptagumla@email.com"
              className="inline-flex items-center gap-4 text-3xl md:text-5xl font-mono hover:text-accent transition-all duration-500 hover:tracking-widest"
            >
              <Mail className="w-8 h-8 md:w-12 md:h-12" />
              SAY HELLO
            </a>

            <div className="flex justify-center gap-12 pt-12">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col items-center gap-3 group px-4"
                >
                  <div className="p-3 rounded-full border border-paper/5 ring-0 group-hover:ring-1 group-hover:ring-accent group-hover:bg-accent/5 group-hover:text-accent transition-all duration-300">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-paper/30 tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-mono text-paper/30 tracking-widest uppercase">
          © 2026 AYUSH GUPTA. ALL RIGHTS RESERVED.
        </div>
        <div className="text-[10px] font-mono text-paper/30 tracking-widest uppercase flex gap-8">
          <span>BENGALURU, INDIA</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-accent underline underline-offset-4 decoration-accent/30">BACK TO TOP</button>
        </div>
      </footer>
    </div>
  );
}
