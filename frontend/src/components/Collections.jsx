import React from "react";

const Collection = () => {
  const collectionItems = [
    {
      src: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 1",
    },
    {
      src: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 2",
    },
    {
      src: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 3",
    },
    {
      src: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 4",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 5",
    },
    {
      src: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 6",
    },
    {
      src: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 7",
    },
    {
      src: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Item 8",
    },
  ];

  return (
    <div className="p-4 bg-white">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-left text-5xl md:text-4xl font-bold leading-snug">
          <span className="text-black">Discover Stylish Spaces and</span><br />
          <span className="text-black"> Inspiring Details</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collectionItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
