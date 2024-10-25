import React, { useEffect } from "react";
import './AboutUs.css';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom"; // Import useNavigate for back navigation

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate for back button functionality

  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  const students = [
    {
      name: "Abhijith",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ritovan",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Aadi",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jhanvi",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Karthik",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="about-us-page container mx-auto py-16">
      <button 
        className="bg-black text-purple-500 hover:bg-purple-500 hover:text-white font-medium py-2 px-4 rounded-lg transition" 
        onClick={() => navigate(-1)} // Back button navigates to the previous page
      >
        Back
      </button>
      
      <h1 className="text-center text-4xl font-bold mb-12">About Us</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {students.map((student, index) => (
          <motion.div
            className={`student reveal p-4 bg-black rounded-lg shadow-md ${student.name === 'Karthik' ? 'col-span-2 flex justify-center' : ''}`}
            key={index}
            initial={{ opacity: 0, translateY: 100 }} // Update animation for scroll-based re-render
            whileInView={{ opacity: 1, translateY: 0 }} // Trigger re-render on scroll into view
            viewport={{ once: false }} // Enable repeated re-rendering on scroll
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
              <img src={student.image} alt={student.name} className="student-image mb-2" />
              <h2 className="text-2xl font-bold text-white">{student.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
