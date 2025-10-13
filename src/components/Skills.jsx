import React, { useState } from "react";

const About = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        <img src="/images/me.jpeg" alt="me" className="rounded-xl w-full md:w-1/3"/>
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="mb-6 text-lg">Hi guys, This is Karthick Raja J... Front End Developer.</p>
          <div className="flex gap-4 mb-6">
            {["skills", "education", "webinar", "certification", "personal"].map(t => (
              <button key={t} className={`px-4 py-2 rounded ${tab===t ? "bg-pink-500 text-white" : "bg-gray-700"}`} onClick={()=>setTab(t)}>
                {t.toUpperCase()}
              </button>
            ))}
          </div>
          <div>
            {tab === "skills" && <ul className="space-y-2">
              <li>HTML & CSS</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Soft Skills</li>
              <li>Hard Skills</li>
            </ul>}
            {tab === "education" && <p>MCA, BCA, HSC, SSLC details...</p>}
            {tab === "webinar" && <p>Webinar details...</p>}
            {tab === "certification" && <p>Certifications...</p>}
            {tab === "personal" && <p>Personal details...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
