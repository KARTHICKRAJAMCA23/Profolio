import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-12">Contact Me</h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left Side: Info */}
        <div className="bg-glass-bg backdrop-blur-md rounded-3xl p-8 shadow-lg flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-emerald-400">Get in Touch</h3>
          <p className="text-gray-300">
            <i className="fa-solid fa-envelope mr-2"></i> karthiraja.ja@gmail.com
          </p>
          <p className="text-gray-300">
            <i className="fa-solid fa-phone mr-2"></i> +91 7402038727
          </p>

          <div className="flex gap-4 mt-4 text-emerald-400 text-2xl">
            <a href="https://github.com/KARTHICKRAJAMCA23" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/karthick-raja-j-7268b6229" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://instagram.com/kar_th_i__k?igshid=MmU2YjMzNjRlOQ==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/KARTHIC36751663" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100006965446160" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://wa.me/qr/VWLVQ3CDROXZE1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          </div>

          <a href="images/KARTHICKRAJA J CV.pdf" download className="mt-6 inline-block bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition">
            <i className="fa-solid fa-download mr-2"></i> Download CV
          </a>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-glass-bg backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <form action="https://formsubmit.co/ikarthi276@gmail.com" method="POST" className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea 
              name="message" 
              rows="6" 
              placeholder="Your Message" 
              required
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button 
              type="submit" 
              className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
