import React from "react";

const Aboutadoption = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const adoptionSteps = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Browse & Connect",
      description:
        "Explore our available pets and find one that matches your lifestyle and preferences.",
      details:
        "Use our advanced filters to find pets by age, size, breed, and temperament. Each pet profile includes photos, personality traits, and care requirements.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Application",
      description:
        "Complete our comprehensive adoption application to help us understand your needs.",
      details:
        "Provide information about your living situation, experience with pets, and what you're looking for in a companion.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meet & Greet",
      description:
        "Schedule a visit to meet your potential new family member in person.",
      details:
        "Spend quality time with the pet to ensure compatibility. Bring family members and current pets if applicable.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Home Check",
      description:
        "Our team may conduct a brief home visit to ensure a safe environment.",
      details:
        "We'll verify that your home is pet-ready and address any safety concerns or questions you might have.",
    },
  ];
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
      {/* Why Adopt Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Adoption?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pet adoption is a rewarding experience that benefits both you and
              the animals in need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Adoption Process Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Adoption Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our simple 5-step process ensures the perfect match between pets
              and families.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="space-y-4">
              {adoptionSteps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-full ${
                        activeStep === index
                          ? "bg-white/20"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p
                        className={
                          activeStep === index
                            ? "text-white/90"
                            : "text-gray-600"
                        }
                      >
                        {step.description}
                      </p>
                    </div>
                    <div
                      className={`text-2xl font-bold ${
                        activeStep === index ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Details */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-600 text-white rounded-full">
                  {adoptionSteps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {adoptionSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-600">
                    Step {activeStep + 1} of {adoptionSteps.length}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {adoptionSteps[activeStep].details}
              </p>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setActiveStep(
                      Math.min(adoptionSteps.length - 1, activeStep + 1)
                    )
                  }
                  disabled={activeStep === adoptionSteps.length - 1}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Adoption Requirements
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            To ensure the best outcomes for both pets and families, we have
            established these basic requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-left">{requirement}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about the adoption process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 text-gray-500 rotate-90" />
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Browse our available pets and start your adoption journey today.
            Every pet deserves a loving home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg">
              Browse Available Pets
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutadoption;
