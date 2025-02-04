import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Buddy from "../../assets/rescue2.jpg";
import Mittens from "../../assets/rescue3.jpg";

const SuccessStories = () => {
  const [stories, setStories] = useState([
    {
      name: "Buddy",
      image: Buddy,
      story:
        "Buddy was rescued from a shelter and now lives happily with his new family, enjoying long walks and belly rubs!",
      adopter: "Anjali S.",
      date: "March 2025",
    },
    {
      name: "Mittens",
      image: Mittens,
      story:
        "Mittens was a shy puppy who blossomed into a playful companion. Thanks to Pawssible Love, she's now in a cozy home.",
      adopter: "Ravi K.",
      date: "February 2025",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Success Stories
        </h1>

        {/* Display Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((pet, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{pet.name}</h2>
                <p className="text-gray-700 mt-2">{pet.story}</p>
                <p className="text-sm text-gray-500 mt-4">
                  — {pet.adopter || "Anonymous"}, {pet.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
