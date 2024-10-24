import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import IIIT from '../IIIT.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to check if the user has scrolled down the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle About Us button click
  const handleAboutUsClick = () => {
    navigate('/about-us'); // Use the correct path for navigation
  };

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
          isScrolled
            ? "bg-black bg-opacity-60 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-4 container mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <img
              src={IIIT}
              alt="IIIT Logo" // Replace with the actual path to your logo
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-white text-xl font-bold">Student Development Council</h1>
          </div>

          {/* About Us Button */}
          <button
            className="bg-black text-purple-500 hover:bg-purple-500 hover:text-white font-medium py-2 px-4 rounded-lg transition"
            onClick={handleAboutUsClick}
          >
            About Us
          </button>
        </div>
      </header>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="mb-4">Team Members:</p>
            <ul className="list-disc list-inside">
              <li>Abhijit Patil</li>
              <li>Member 2</li>
              <li>Member 3</li>
              {/* Add more names as needed */}
            </ul>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
