import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Designing Your Next Chapter.",
      description: "We Believe Every Home Tells a Story",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Designing Your Next Chapter.",
      description: "We believe Every Home Tells a Story",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 text-white z-10">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl mb-6 max-w-xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {project.description}
              </motion.p>
            </div>

            {/* Animated Explore Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <motion.button
                onClick={() => navigate("/projects")}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black border border-black text-xl px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all duration-300"
              >
                Explore Collections
                <HiArrowNarrowRight className="ml-1" />
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
