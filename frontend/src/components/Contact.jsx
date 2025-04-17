import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message submitted (but no backend logic here).");

    // Clear form data after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you. Whether you have a question about properties, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-black text-xl" />
                <span>123 Dream Avenue, Property City, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-black text-xl" />
                <span>info@easyhomes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-black text-xl" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-black mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-black-50 text-white font-semibold py-3 rounded-md transition duration-300"
              >
                Submit Message
              </button>
              {status && <p className="text-center text-sm text-gray-700 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
