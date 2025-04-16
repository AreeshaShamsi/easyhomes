import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const projects = [
  {
    name: "Sunset Residency",
    description: "Luxury apartments in the heart of the city with modern amenities.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    oldPrice: "₹90,00,000",
    newPrice: "₹75,00,000"
  },
  {
    name: "Green Valley Villas",
    description: "Independent villas surrounded by nature and peace with beautiful view.",
    image: "https://images.pexels.com/photos/5353883/pexels-photo-5353883.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    oldPrice: "₹1,20,00,000",
    newPrice: "₹98,00,000"
  },
  {
    name: "Cityscape Towers",
    description: "Modern high-rise apartments with stunning city views.",
    image: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    oldPrice: "₹1,00,00,000",
    newPrice: "₹87,50,000"
  }
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12 px-6 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-black-500 mb-12">Our Projects</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-2">
                    <span className="text-gray-400 line-through mr-2">{project.oldPrice}</span>
                    <span className="text-green-600 font-bold text-lg">{project.newPrice}</span>
                  </div>
                  {/* Button aligned to the left */}
                  <button className="mt-4 bg-gray-100 text-black px-6 py-3 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
