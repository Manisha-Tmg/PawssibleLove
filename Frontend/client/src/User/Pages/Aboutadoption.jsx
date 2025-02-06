import React from "react";

const Aboutadoption = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <PawPrint className="w-4 h-4" />
            <span>Find Your Perfect Companion</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Pet <span className="text-blue-600">Adoption</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover the joy of pet adoption and learn how you can give a loving
            animal a forever home. Our comprehensive guide will walk you through
            every step of the adoption journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutadoption;
