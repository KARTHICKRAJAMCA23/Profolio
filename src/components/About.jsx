import React, { useState } from "react";

const About = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-6">
        <div className="flex-1 bg-glass-bg backdrop-blur-md rounded-3xl p-6 shadow-lg">
          <img src="/images/me.png" alt="me" className="rounded-2xl w-full" />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">About Me</h2>
          <p className="text-gray-300 text-lg">
            Hi, I'm Karthick Raja J, a passionate Front End Developer. I completed my BCA and currently pursuing MCA. 
            I love creating clean, modern, and interactive web applications.
          </p>

          <div className="flex gap-4 flex-wrap mb-4">
            {["skills","education","webinar","certification","personal"].map(t => (
              <button
                key={t}
                className={`px-4 py-2 rounded-lg font-semibold transition ${tab===t ? "bg-emerald-400 text-gray-900" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                onClick={()=>setTab(t)}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="text-gray-300">
            {tab==="skills" && <ul className="list-disc list-inside space-y-2">
              <li>HTML & CSS</li>
              <li>JavaScript / React</li>
              <li>Tailwind CSS & UI Design</li>
              <li>App Development</li>
              <li>Soft & Hard Skills</li>
            </ul>}
            {tab==="education" && <ul className="list-disc list-inside space-y-2">
              <li>MCA (2023-2025) - RVSCAS, Coimbatore</li>
              <li>BCA (2020-2023) - RVS College, Sulur</li>
              <li>HSC (2020) - State Board, Tirupur</li>
              <li>SSLC (2018) - State Board, Tirupur</li>
            </ul>}
            {tab==="webinar" && <ul className="list-disc list-inside space-y-2">
              <li>Applications of Computer Techniques in Medicine</li>
              <li>Futurepreneur Conclave</li>
              <li>Industry 4.0 Revolution</li>
            </ul>}
            {tab==="certification" && <ul className="list-disc list-inside space-y-2">
              <li>SoloLearn: JAVA, HTML, CSS, SHELL</li>
              <li>PHP Job Oriented Courses</li>
              <li>Excel for Beginners - Great Learning Academy</li>
              <li>Introduction to Ethical Hacking - Great Learning Academy</li>
              <li>"A" Certificate - National Cadet Corps</li>
            </ul>}
            {tab==="personal" && <ul className="list-disc list-inside space-y-2">
              <li>Father: Karthick Raja J</li>
              <li>DOB: 21-08-2002</li>
              <li>Gender: Male</li>
              <li>Nationality: Indian</li>
              <li>Religion: Hindu</li>
            </ul>}
          </div>
        </div>
      </div>

      {/* <div className="mt-8 flex justify-center">
        <iframe width="400" height="225" src="https://www.youtube.com/embed/9kcd2DyBmLw?si=wlWro1AM53Ggpdh0" title="YouTube video" className="rounded-xl shadow-lg"></iframe>
      </div> */}
    </section>
  );
};

export default About;
