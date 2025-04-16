import React from "react";

const InfoSection = () => {
  const infoItems = [
    {
      number: "500+",
      title: "Happy Clients",
    },
    {
      number: "200+",
      title: "Projects Completed",
    },
    {
      number: "100%",
      title: "Satisfaction Guaranteed",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      {/* Info items */}
      <div className="flex flex-col mt-12 sm:flex-row justify-center items-center gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4 py-6 w-64 bg-gray-100 rounded-lg shadow-lg"
          >
            <div className="bg-black-500 text-black text-4xl font-semibold py-3 px-6 rounded-md mb-4">
              {item.number}
            </div>
            <p className="text-gray-800 font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Subscribe section */}
      <div className="mt-12 w-full px-6 sm:px-0 max-w-xl text-center">
        <h3 className="text-xl sm:text-3xl font-bold mb-4 text-black-500">
          Subscribe and get <span className="text-black-500">20%</span> off
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="py-3 px-4 w-full sm:w-96 border rounded-md"
          />
          <button className="bg-white-400  text-black border-1 text-sm py-3 px-4 font-bold rounded-md hover:bg-white-600">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
