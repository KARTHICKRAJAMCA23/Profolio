import React from "react";

const projects = [
  // MERN Projects
  {
    title: "Project Management App",
    desc: "Team leaders can manage projects, employees can track updates and receive feedback.",
    github: "https://github.com/KARTHICKRAJAMCA23/Project-Management-App",
    demo: "https://project-management-2-n0gw.onrender.com/",
    img: "/images/project-management.jpg",
    tech: "React, Vite, Tailwind CSS, Node.js, Express, MongoDB, JWT, Multer",
    duration: "Sep 2025"
  },
  {
    title: "Diary Management System",
    desc: "Full-stack web app to manage milk production, sales, inventory, and billing efficiently.",
    github: "https://github.com/KARTHICKRAJAMCA23/Diary-Management-System",
    demo: "https://karthickdairy-management-frontend.onrender.com/",
    img: "/images/diary-management.jpg",
    tech: "MERN Stack, JWT, bcrypt",
    duration: "Feb 2025 - Mar 2025"
  },
  {
    title: "Banking Web Application",
    desc: "Secure MERN platform for accounts, deposits, withdrawals with real-time balance updates.",
    github: "https://github.com/KARTHICKRAJAMCA23/Banking-Web-App",
    demo: "https://client-uwp0.onrender.com/#/home",
    img: "/images/banking-app.jpg",
    tech: "MERN Stack",
    duration: "Dec 2024 - Jan 2025"
  },
  {
    title: "Students Fee Management System",
    desc: "Streamlines student fee payments and tracking for students and cashiers.",
    github: "#",
    demo: "https://studentdb-eiak.onrender.com/",
    img: "/images/fee-management.jpeg",
    tech: "MERN Stack",
    duration: "Oct 2024 - Nov 2024"
  },
  {
    title: "Sports Management System",
    desc: "React Native app for organizing sports events, managing player profiles, and tracking schedules.",
    github: "https://github.com/KARTHICKRAJAMCA23/Sports_Native_App",
    demo: "#",
    img: "/images/sports-app.jpeg",
    tech: "React Native",
    duration: "Sep 2024 - Oct 2024"
  },

  // Animation / Fun Projects
  { title: "Ball Movement", desc: "Balls move along edges.", github:"https://github.com/KARTHICKRAJAMCA23/Ball", demo:"https://karthickrajamca23.github.io/Ball/", img:"/images/Ball.gif" },
  { title: "Random Ball", desc:"Balls move randomly.", github:"https://github.com/KARTHICKRAJAMCA23/Random-Ball", demo:"https://karthickrajamca23.github.io/Random-Ball/", img:"/images/Random ball.gif" },
  { title: "Pacman", desc:"Pacman moves & reverses on edges.", github:"https://github.com/KARTHICKRAJAMCA23/Pac-man", demo:"https://karthickrajamca23.github.io/Pac-man/", img:"/images/Pac-man.gif" },
  { title: "Employee Salary", desc:"Drag index.html in browser to see result.", github:"https://github.com/KARTHICKRAJAMCA23/Top-five_employee", demo:"https://karthickrajamca23.github.io/Top-five_employee/", img:"/images/Employee.gif" },
  { title: "Words with Count", desc:"Returns top 3 common words.", github:"https://github.com/KARTHICKRAJAMCA23/Words-With_Count", demo:"https://karthickrajamca23.github.io/Words-With_Count/", img:"/images/Word with number.gif" },
  { title: "Multiple Pacmen", desc:"Move multiple pacmen with random velocity.", github:"https://github.com/KARTHICKRAJAMCA23/Multiple-PacMan", demo:"https://karthickrajamca23.github.io/Multiple-PacMan/", img:"/images/Multiple PAcMAn.gif" },
  { title: "Eye Movement", desc:"Move cursor to control eyeballs.", github:"https://github.com/KARTHICKRAJAMCA23/Eye", demo:"https://karthickrajamca23.github.io/Eye/", img:"/images/Eye.gif" },
  { title: "Map Animation", desc:"Marker moves on map from Tiruppur OBS to RVS Cas.", github:"https://github.com/KARTHICKRAJAMCA23/Map", demo:"https://karthickrajamca23.github.io/Map/", img:"/images/Map.gif" },
  { title: "Towers of Hanoi", desc:"Classic Towers of Hanoi puzzle.", github:"https://github.com/KARTHICKRAJAMCA23/Towers_of_Hanoi", demo:"https://karthickrajamca23.github.io/Towers_of_Hanoi/", img:"/images/Towers Of HAnoi.gif" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-12">My Projects</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-glass-bg backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-emerald-400 mb-2">{p.title}</h3>
              {p.duration && <p className="text-gray-300 text-sm mb-2"><strong>Duration:</strong> {p.duration}</p>}
              <p className="text-gray-300 mb-2">{p.desc}</p>
              {p.tech && <p className="text-gray-400 text-sm mb-3"><strong>Tech Stack:</strong> {p.tech}</p>}
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-emerald-400 text-gray-900 rounded-lg font-semibold hover:bg-emerald-500 transition">GitHub</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-emerald-400 text-gray-900 rounded-lg font-semibold hover:bg-emerald-500 transition">Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
