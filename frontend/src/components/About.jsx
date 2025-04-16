import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-600 text-black">

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div
            className="bg-cover bg-center bg-no-repeat relative z-10 text-white py-32 px-6 text-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')`,
            }}
          >
            <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are redefining the real estate experience — making it transparent, simple, and human.
            </p>
          </div>
        </section>

        {/* Image + Text Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6 gap-12">
          <div className="md:w-1/2 px-6">
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Founder"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-black-600">Meet Our Founder</h2>
            <p className="text-gray-700 text-lg">
              Eliza, our visionary founder, began this journey with a mission to simplify the property landscape. Her passion and leadership are at the heart of everything we do.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-black-600">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To provide a seamless, tech-enabled property experience that empowers buyers, sellers, and renters with real solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-black-600">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become the go-to platform for trusted real estate services and guidance, globally.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;
