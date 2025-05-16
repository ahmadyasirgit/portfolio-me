  import React, { useState, useEffect } from "react";
  import Tilt from "react-parallax-tilt";
  import { motion, useAnimation } from "framer-motion";

  import { styles } from "../styles";
  import { SectionWrapper } from "../hoc";
  import { projects } from "../constants";
  import { fadeIn, textVariant } from "../utils/motion";

  // Starry background component
  const StarryBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Stars with different sizes and opacities */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              opacity: [null, 0.1, 0.8, 0.1],
              scale: [null, 1.2, 1, 1.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Nebula-like gradients */}
        <div
          className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] rounded-full opacity-[0.03] blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, rgba(145, 94, 255, 0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] rounded-full opacity-[0.02] blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(120, 80, 255, 0.3) 0%, rgba(94, 234, 212, 0) 70%)",
          }}
        />

        {/* Animated cosmic dust */}
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-[0.04]">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="url(#smallGrid)" />
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    );
  };

  // Custom hook for mouse position
  function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
      
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
    
    return mousePosition;
  }

  // Update the ProjectCard component to use a website mockup design without hover animations

  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    live_site_link,
  }) => {
    // Generate a unique color scheme based on project index
    const colorSchemes = [
      { primary: "#915EFF", secondary: "#BD78FF", accent: "#7451D4" }, // Purple theme
      { primary: "#FF6B6B", secondary: "#FF9E9E", accent: "#D44A4A" }, // Red theme
      { primary: "#4ECDC4", secondary: "#7EEEE7", accent: "#36A59F" }, // Teal theme
      { primary: "#FFD166", secondary: "#FFDF8E", accent: "#D4A839" }, // Yellow theme
      { primary: "#06D6A0", secondary: "#6DEFC6", accent: "#05AB7F" }, // Green theme
    ];
    
    const colors = colorSchemes[index % colorSchemes.length];

    return (
      <motion.div 
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className="sm:w-[360px] w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20, 
          delay: index * 0.15 
        }}
      >
        <div 
          className="bg-tertiary p-5 rounded-2xl w-full shadow-card border border-slate-800/80 overflow-hidden"
        >
          {/* Website Mockup Design */}
          <a
            href={live_site_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[230px] rounded-xl overflow-hidden bg-black/80 relative block group focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
            tabIndex={0}
            aria-label={`Open live site for ${name}`}
          >
          <div className="w-full h-[230px] rounded-xl overflow-hidden bg-black/80 relative">
            {/* Browser Window Frame */}
            <div className="w-full h-8 bg-[#2D2D3A] flex items-center px-2 rounded-t-lg border-b border-gray-800">
              {/* Browser Controls */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Page Title */}
              <div className="flex-1 text-center text-xs font-medium text-gray-300 truncate px-4">
                {name}
              </div>
              
              {/* External Link Button */}
              <a 
                href={live_site_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-gray-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Website Content */}
            <div className="h-[calc(230px-32px)] bg-[#1A1A2E] relative overflow-hidden">
              {/* Project Logo/Header */}
              <div 
                className="w-full h-16 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <div 
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span className="text-white font-bold text-xl">
                    {name.charAt(0)}
                  </span>
                </div>
                
                <span 
                  className="ml-3 font-bold tracking-wide"
                  style={{ color: colors.primary }}
                >
                  {name.split(' ')[0]}
                </span>
              </div>

              {/* Fake Browser URL Bar */}
              <div className="w-full h-8 border-y border-gray-800 bg-[#20203A] flex items-center px-3">
                <div className="flex-1 bg-[#2D2D3A] h-5 rounded-md flex items-center px-2 text-xs text-gray-400">
                  <span className="mr-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="truncate">{`${name.toLowerCase().split(' ').join('')}.com`}</span>
                </div>
                <div className="ml-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Navigation Bar */}
              <div className="w-full h-8 bg-[#25253A] flex items-center justify-center gap-4 px-4">
                {['Home', 'Menu', 'Order', 'Contact'].map((item, i) => (
                  <div 
                    key={i} 
                    className="text-xs px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: i === 0 ? `${colors.primary}30` : 'transparent',
                      color: i === 0 ? colors.primary : '#999'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Content Area */}
              <div className="p-3 flex flex-col">
                {/* Content Section */}
                <div className="flex mb-2">
                  {/* Left Column */}
                  <div className="w-1/3 pr-2">
                    <div 
                      className="h-24 w-full rounded mb-2"
                      style={{ backgroundColor: `${colors.primary}30` }}
                    >
                      <div className="h-full w-full flex items-center justify-center">
                        <div 
                          className="w-12 h-12 rounded-full"
                          style={{ backgroundColor: colors.primary }}
                        ></div>
                      </div>
                    </div>
                    <div 
                      className="h-3 w-full rounded-full mb-1.5"
                      style={{ backgroundColor: `${colors.secondary}30` }}
                    ></div>
                    <div 
                      className="h-2 w-3/4 rounded-full"
                      style={{ backgroundColor: `${colors.secondary}20` }}
                    ></div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="w-2/3 pl-2">
                    <div 
                      className="h-4 w-3/4 rounded-full mb-2"
                      style={{ backgroundColor: `${colors.secondary}40` }}
                    ></div>
                    <div 
                      className="h-2 w-full rounded-full mb-1.5"
                      style={{ backgroundColor: `${colors.secondary}20` }}
                    ></div>
                    <div 
                      className="h-2 w-full rounded-full mb-1.5"
                      style={{ backgroundColor: `${colors.secondary}20` }}
                    ></div>
                    <div 
                      className="h-2 w-4/5 rounded-full mb-3"
                      style={{ backgroundColor: `${colors.secondary}20` }}
                    ></div>
                    
                    {/* Button */}
                    <div 
                      className="h-6 w-24 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <div className="h-1.5 w-12 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Elements */}
                <div className="mt-auto flex justify-between items-end">
                  {/* Bottom Left */}
                  <div className="flex items-center">
                    <div 
                      className="w-5 h-5 rounded mr-1.5"
                      style={{ backgroundColor: `${colors.primary}60` }}
                    ></div>
                    <div className="space-y-1">
                      <div 
                        className="h-1.5 w-12 rounded-full"
                        style={{ backgroundColor: `${colors.secondary}30` }}
                      ></div>
                      <div 
                        className="h-1.5 w-8 rounded-full"
                        style={{ backgroundColor: `${colors.secondary}20` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* URL Bar */}
                  <div 
                    className="py-0.5 px-2 rounded bg-[#2D2D3A] text-[9px] text-gray-400 flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: colors.primary }}></span>
                    <span> {name.toLowerCase().split(' ').join('')}.co.uk/</span>
                    
                  </div>
                </div>
              </div>
              
              {/* Live Site Tag */}
              <div 
                className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-medium"
                style={{ 
                  backgroundColor: colors.primary,
                  color: 'white'
                }}
              >
                View Live Site 
              </div>
            </div>
          </div>
          </a>

          {/* Project Info */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          {/* Project Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const Works = () => {
    const mousePosition = useMousePosition();
    const [showCursor, setShowCursor] = useState(false);
    
    useEffect(() => {
      // Wait a bit to ensure mouse has moved before showing custom cursor
      const timer = setTimeout(() => {
        setShowCursor(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="relative min-h-screen overflow-hidden py-10">
        {/* Cosmic/Starry background */}
        
        
        {/* Custom cursor spotlight */}
        {showCursor && (
          <motion.div
            className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 hidden md:block"
            style={{
              background: "radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        
        {/* Section header */}
        <motion.div 
          className="relative z-10"
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
        >
          <motion.p 
            className={`${styles.sectionSubText} inline-block relative`}
          >
            <span>My creative portfolio</span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent w-full"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.p>
          
          <motion.h2 
            className={`${styles.sectionHeadText} relative inline-block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-[#915EFF] via-[#BD78FF] to-[#F8ACFF] bg-clip-text text-transparent">
              Projects
            </span>
            
            {/* Decorative element */}
            <motion.div
              className="absolute -right-10 -top-5 w-16 h-16 opacity-60"
              initial={{ scale: 0, rotateZ: 0 }}
              animate={{ scale: 1, rotateZ: 15 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#915EFF" d="M44.5,-76.3C59.6,-69.1,74.7,-60.1,83.3,-46.4C91.9,-32.7,94,-14.3,91.2,2.8C88.3,19.9,80.5,35.6,69.8,48.5C59.1,61.3,45.4,71.3,30.6,75.5C15.8,79.7,-0.2,78.2,-15.2,73.7C-30.2,69.3,-44.2,62,-56.3,51C-68.4,40,-78.6,25.3,-80.9,9.2C-83.2,-6.9,-77.7,-24.5,-68.4,-38.7C-59.1,-52.9,-46,-63.7,-32.1,-71.3C-18.3,-78.9,-3.7,-83.3,9.3,-82.6C22.4,-81.9,29.5,-83.5,44.5,-76.3Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </motion.h2>
        </motion.div>

        {/* Description text */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] relative z-10 backdrop-blur-sm p-5 rounded-lg bg-black/10 border border-[#915EFF]/5"
            initial="hidden"
            whileInView="show"
          >
            <span className="text-[#BD78FF] font-medium">Transforming culinary experiences into digital reality.</span> The following projects showcase my expertise in developing modern web solutions specifically for the restaurant industry. From centralized brand hubs to online ordering systems and reservation platforms, I've built complete digital ecosystems that have significantly improved business operations and customer engagement.
            
            <span className="block mt-2">
              My portfolio demonstrates the ability to create full-stack solutions using React, TypeScript, Tailwind CSS, and payment integrations that combine appealing design with powerful functionality.
            </span>
            
            <motion.span
              className="block mt-4 italic text-slate-400 text-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Click on the mockup to view live sites and explore these restaurant platforms.
            </motion.span>
          </motion.p>
        </div>

        {/* Animated separator */}
        <motion.div
          className="w-60 h-0.5 my-10 mx-auto relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-8 relative z-10"
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
        
        {/* Bottom decoration */}
        <motion.div
          className="w-full h-0.5 max-w-5xl mx-auto mt-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(to right, transparent, rgba(145, 94, 255, 0.3), transparent)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </motion.div>
      </div>
    );
  };

  export default SectionWrapper(Works, "projects");
