import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next.js",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "KJ-GROUPS",
    icon: starbucks, // Replace with appropriate icon
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developed a modern portfolio platform showcasing four restaurant brands under KJ-GROUPS.",
      "Built responsive, multi-page React-based websites with Stripe payment integration and reservation systems.",
      "Created a unified admin panel for centralized management of orders and bookings.",
      "Improved restaurant order management efficiency by 40% and reduced booking time by 50%.",
      "Used React, Node.js, TypeScript, Sequelize SQL, Supabase, Tailwind CSS, Framer Motion, and Vercel."
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "DevClubM, Faisalabad",
    icon: tesla, // Replace with appropriate icon
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Built a web portal for a Canada-based home food service to automate ordering processes.",
      "Developed an enterprise-level MERN stack application and improved app performance by 20%.",
      "Used Git for version control and collaborative development.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
   title: "Bachelor of Computer Sciences",
    company_name: "FAST National University of Computer and Emerging Sciences",
    iconBg: "#383E56",
    date: "2019 - 2024",
    points: [
      "Developed a UML Class Diagram Compiler as a Final Year Project with 90% syntactic and semantic accuracy.",
      "Conducted air pollution data analysis using Python and machine learning models.",
      "Participated in coding competitions and hackathons."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ahmad developed a fantastic website for our restaurant that not only looks great but also significantly improved our order management system.",
    name: "Jung Kim",
    designation: "Owner",
    company: "Korean BBQ Edinburgh",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    testimonial:
      "The reservation system Ahmad built for us reduced our booking time by 50% and improved customer satisfaction. A true professional who understands both design and functionality.",
    name: "Sarah Chen",
    designation: "Manager",
    company: "Soul Sushi",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    testimonial:
      "Working with Ahmad on our online ordering platform was a pleasure. His attention to detail and technical expertise resulted in a seamless user experience for our customers.",
    name: "David Park",
    designation: "Director",
    company: "KJ-GROUPS",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export const projects = [
  {
    name: "KJ GROUPS",
    description:
      "Central hub for a collection of restaurant brands including Soul Sushi, Korean Munchies, and Korean BBQ locations. Built with React, Tailwind CSS, and TypeScript to deliver a modern, fast-loading user experience with clean navigation and brand unity.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
      },
      {
        name: "tailwindcss",
        color: "text-[#38BDF8]",
      },
      {
        name: "typescript",
        color: "text-[#3178C6]",
      },
    ],
    live_site_link: "https://www.kjgroups.co.uk/",
  },
  {
    name: "Soul Sushi",
    description:
      "Custom online ordering platform with a categorized menu system, high-quality visuals, and Stripe payment integration. Admins can update food items in real-time through Supabase backend, offering a seamless ordering experience on any device.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
      },
      {
        name: "stripe",
        color: "text-[#6772E5]",
      },
      {
        name: "supabase",
        color: "text-[#3ECF8E]",
      },
      {
        name: "nodejs",
        color: "text-[#339933]",
      },
    ],
    live_site_link: "https://www.soulsushi.kjgroups.co.uk/",
  },
  {
    name: "Korean Munchies",
    description:
      "Intuitive, mobile-optimized food ordering system with clean layout, categorized menu, Stripe integration, and location guidance. Developed with React, TypeScript and Tailwind CSS to enhance customer satisfaction through simplified online ordering.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
      },
      {
        name: "typescript",
        color: "text-[#3178C6]",
      },
      {
        name: "tailwindcss",
        color: "text-[#38BDF8]",
      },
      {
        name: "stripe",
        color: "text-[#6772E5]",
      },
    ],
    live_site_link: "https://www.koreanmunchies.kjgroups.co.uk/",
  },
  {
    name: "Korean BBQ Edinburgh",
    description:
      "Restaurant site with a streamlined online reservation system including date-time picker, elegant gallery, and contact forms. Built with React, Tailwind CSS, and Material UI, it reduced manual booking calls by over 50% while enhancing digital presence.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
      },
      {
        name: "materialui",
        color: "text-[#0081CB]",
      },
      {
        name: "tailwindcss",
        color: "text-[#38BDF8]",
      },
    ],
    live_site_link: "https://www.koreanbbq.kjgroups.co.uk/",
  },
  {
    name: "Korean BBQ Dundee",
    description:
      "Advanced site featuring Framer Motion animations, categorized digital menus with descriptions, interactive elements, and user analytics. Built with React, TypeScript, and Vite, it exemplifies modern frontend development combining performance and design.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
      },
      {
        name: "typescript",
        color: "text-[#3178C6]",
      },
      {
        name: "framermotion",
        color: "text-[#FF4D4D]",
      },
      {
        name: "vite",
        color: "text-[#646CFF]",
      },
    ],
    live_site_link: "https://www.koreanbbqdundee.kjgroups.co.uk/",
  },
];

export { services, technologies, experiences, testimonials };
