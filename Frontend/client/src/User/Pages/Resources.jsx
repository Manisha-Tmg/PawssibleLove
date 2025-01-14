import React from "react";
import Navbar from "../Components/Navbar";

const Resources = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-700">
          🐾 Pet Care Resources
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Pet Care Guides
          </h2>
          <p className="text-gray-600">
            Everything you need to know about daily care, grooming, feeding, and
            bonding with your furry friends.
          </p>
        </section>
      </div>
    </>
  );
};

export default Resources;
