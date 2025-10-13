import React, { useState } from "react";

const About = () => {
  const [tab, setTab] = useState("skills");

  const tabs = ["skills", "education", "webinar", "certification", "personal"];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/KARTHICKRAJAMCA23" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/karthickraja" },
    // { name: "Twitter", href: "#" },
    // { name: "Portfolio", href: "#" },
  ];

  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript / React", level: 85 },
    { name: "Tailwind CSS & UI Design", level: 80 },
    { name: "Node.js & Express", level: 70 },
    { name: "MongoDB & Databases", level: 75 },
    { name: "Java & Advanced Java", level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10 px-6 md:px-0 items-center">
        
        {/* Left Image */}
        <div className="flex-1">
          <div className="bg-glass-bg backdrop-blur-md rounded-3xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/images/me.png"
              alt="Karthick Raja"
              className="rounded-2xl w-full md:h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-emerald-400 mb-2">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I'm <span className="text-emerald-400 font-semibold">Karthick Raja J</span>, a passionate Software Developer with expertise in building modern, responsive, and interactive web applications.  
            I completed my BCA and am currently pursuing MCA. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.  
            My focus is on clean code, responsive design, and user experience.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3">
            {tabs.map((t) => (
              <button
                key={t}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  tab === t
                    ? "bg-emerald-400 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setTab(t)}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-gray-300 mt-4">
            {tab === "skills" && (
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm">{skill.level}%</p>
                    </div>
                    <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-4 bg-emerald-400 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: `${skill.level}%` }}
                        title={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "education" && (
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>MCA - Master of Computer Applications:</strong> 7.5 CGPA (2023-2025) - RVS College of Arts and Science, Sulur, Coimbatore
                </li>
                <li>
                  <strong>BCA - Bachelor of Computer Applications:</strong> 8.5 CGPA (2020-2023) - RVS College of Arts and Science, Sulur, Coimbatore
                </li>
                <li>
                  <strong>HSC - Higher Secondary Certificate:</strong> 2020 - State Board, Tirupur
                </li>
                <li>
                  <strong>SSLC - Secondary School Leaving Certificate:</strong> 2018 - State Board, Tirupur
                </li>
              </ul>
            )}

            {tab === "webinar" && (
              <ul className="list-disc list-inside space-y-2">
                <li>Applications of Computer Techniques in Medicine</li>
                <li>Futurepreneur Conclave</li>
                <li>Industry 4.0 Revolution</li>
              </ul>
            )}

            {tab === "certification" && (
              <ul className="list-disc list-inside space-y-2">
                <li>SoloLearn: JAVA, HTML, CSS, SHELL</li>
                <li>PHP Job Oriented Courses</li>
                <li>Excel for Beginners - Great Learning Academy</li>
                <li>Introduction to Ethical Hacking - Great Learning Academy</li>
                <li>Advanced Java - Anudip Foundation</li>
                <li>"A" Certificate - National Cadet Corps</li>
              </ul>
            )}

            {tab === "personal" && (
              <ul className="list-disc list-inside space-y-2">
                <li>Father: Karthick Raja J</li>
                <li>DOB: 21-08-2002</li>
                <li>Gender: Male</li>
                <li>Nationality: Indian</li>
                <li>Religion: Hindu</li>
              </ul>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-emerald-400 transition text-gray-200 hover:text-gray-900 rounded-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
