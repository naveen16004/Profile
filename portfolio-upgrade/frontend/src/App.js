import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Updated to lowercase keys to ensure data appears in your MongoDB collection
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    // 1. Sticky Header Logic
    const handleScroll = () => {
      const header = document.querySelector(".header-area");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 1);
      }
    };

    // 2. ScrollReveal Animations
    const sr = window.ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
    });
    sr.reveal(".header-area, .profile-photo, .about-content, .education", { origin: "left" });
    sr.reveal(".profile-text, .about-skills, .internship", { origin: "right" });
    sr.reveal(".project-title, .contact-title", { origin: "top" });
    sr.reveal(".projects, .contact", { origin: "bottom" });

    // 3. Typed.js Initialization
    const typed = new window.Typed(".typing-text", {
      strings: ["Full Stack Developer", "Java Developer", "Python Developer"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      typed.destroy();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert("Stay tuned! Message saved to local database.");
        setFormData({ name: '', email: '', message: '' }); // Clears form after success
      } else {
        alert("Failed to save message. Check backend console.");
      }
    } catch (err) {
      alert("Backend error! Make sure your Node server is running on port 5000.");
    }
  };

  return (
    <div className="App">
      <header className="header-area">
        <div className="container">
          <div className="header">
            <a href="#home" className="logo">
              <h3>Naveen</h3>
              <i className="fa fa-music" style={{ color: 'yellow' }}></i>
            </a>
            <ul className="navbar">
              
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="FirstElement" id="home">
        <div className="profile-photo">
          <img src="images/Naveen.jpeg" alt="Naveen" />
        </div>
        <div className="profile-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h5 style={{ margin: '0', fontSize: '1.2rem', color: '#ccc' }}>Hi I'm</h5>
          <h1 style={{ lineHeight: '1.1', margin: '5px 0', fontSize: '4.5rem', fontWeight: '800' }}>NaveeN</h1>
          <p style={{ margin: '15px 0 25px 0', fontSize: '1.4rem' }}>
            I am a <span className="typing-text" style={{ color: 'yellow' }}></span>
          </p>
          <div className="btn-group" style={{ display: 'flex', gap: '15px' }}>
            <a href="/naveen resume.pdf" download="Naveen_Resume.pdf" className="btn active">Download Resume</a>
            <a href="mailto:naveen16004@gmail.com" className="btn">Contact</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-area" id="about">
        <div className="container">
          <div className="about">
            <div className="about-content">
              <h4>About Me</h4>
              <ul>
                <li>I’m a college student passionate about blending academics with creative pursuits.</li>
                <li>Foundation in Java, Python, and Full Stack Development.</li>
                <li>I enjoy teaching guitar and stay inspired by logic and music.</li>
              </ul>
            </div>
            <div className="about-skills">
              <ul>
                <li>Name: T.Naveen</li>
                <li>Age: 21</li>
                <li>From: India</li>
                <li>Experience: &lt;1yr</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & INTERNSHIP */}
      <section className="education-content" id="education">
        <div className="container">
          <div className="row" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div className="education" style={{ flex: '1', minWidth: '300px' }}>
              <h3 className="title">Education</h3>
              <div className="timeline-box">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">B.tech CSE</h3>
                    <h4 className="timeline-title">Bharath Institute of Higher Education and Research</h4>
                    <h4 className="timeline-title"><i className="fa fa-calendar"></i> 2022-2026</h4>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">HSC-72%</h3>
                    <h4 className="timeline-title">Kalaimagal Vidhya Mandhir</h4>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">SSLC-60%</h3>
                    <h4 className="timeline-title">Kalaimagal Vidhya Mandhir</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="internship" style={{ flex: '1', minWidth: '300px' }}>
              <h3 className="title">Internship</h3>
              <div className="timeline-box">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">DATA SCIENCE</h3>
                    <h4 className="timeline-title"><i className="fa fa-calendar"></i> JUL-OCT-2025</h4>
                    <p className="timeline-text">Completed Data Science Master Internship at VCODEZ.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">DATA SCIENCE</h3>
                    <h4 className="timeline-title"><i className="fa fa-calendar"></i> JAN-MAR-2025</h4>
                    <p className="timeline-text">Virtual Internship at Altair in predictive modeling.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">FULL STACK</h3>
                    <h4 className="timeline-title"><i className="fa fa-calendar"></i> NOV-DEC-2024</h4>
                    <p className="timeline-text">Program at CodeTech IT Solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="project-content" id="projects">
        <div className="container">
          <div className="project-title">
            <h4>My Projects</h4>
            <p>Creativity meets innovation</p>
          </div>
          <div className="projects">
            <div className="project">
              <a href="https://github.com/naveen16004/Book-Look">
                <i className="fa fa-book"></i>
                <h4>Book Look</h4>
                <p>JS focused application.</p>
              </a>
            </div>
            <div className="project">
              <a href="https://github.com/naveen16004/Guessing-Game">
                <i className="fa fa-car"></i>
                <h4>GUESSING GAME</h4>
                <p>Frontend number finding game.</p>
              </a>
            </div>
            <div className="project">
              <a href="https://github.com/naveen16004/Movie">
                <i className="fa fa-film"></i>
                <h4>Movie Site</h4>
                <p>Movie streaming website.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-content" id="contact">
        <div className="container">
          <div className="contact-title"><h4>Contact Me</h4></div>
          <form className="contact" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              required 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            <textarea 
              placeholder="Message" 
              required
              value={formData.message} 
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button type="submit" className="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;