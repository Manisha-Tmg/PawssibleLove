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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Training & Behavior
          </h2>
          <p className="text-gray-600">
            Learn how to train your pets and understand their behavior for a
            harmonious relationship.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Health & Safety
          </h2>
          <p className="text-gray-600">
            Tips on keeping your pets healthy and safe — from vaccinations to
            toxic foods to avoid.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Local Vet & Shelter Directory
            </h2>
            <p className="text-gray-600">
              Discover trusted veterinary clinics and adoption shelters in your
              area.
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default Resources;
