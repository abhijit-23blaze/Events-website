import React, { useEffect } from "react";
import './AboutUs.css';
import { motion } from 'framer-motion';

const AboutUs = () => {
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
      name: "Aadi",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Abhi",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jan",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Rito",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sam",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Lily",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mark",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="about-us-page container mx-auto py-16">
      <h1 className="text-center text-4xl font-bold mb-12">About Us</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {students.map((student, index) => (
          <motion.div
            className={`student reveal p-4 bg-black rounded-lg shadow-md ${index === 6 ? 'col-span-2 flex justify-center' : ''}`}
            key={index}
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
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
