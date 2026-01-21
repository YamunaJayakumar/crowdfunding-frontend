import React from "react";
import { MapPin, Heart, Users, Handshake } from "lucide-react";

function AboutSection() {
  const howWeWorkSteps = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Discover Causes",
      description:
        "Browse campaigns for education, health, emergencies, and community initiatives.",
      bg: "bg-orange-500",
    },
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      title: "Donate or Share",
      description:
        "Support with donations, volunteering, or spreading the word to amplify impact.",
      bg: "bg-yellow-500",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Track Progress",
      description:
        "See how your support transforms lives with transparent updates from campaigns.",
      bg: "bg-red-500",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Empower Communities",
      description:
        "Every contribution helps rebuild, grow, and inspire hope in communities worldwide.",
      bg: "bg-purple-500",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Who We Are */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Who We Are
          </h2>
          <p className="text-gray-400 mb-4">
            We are a <span className="font-semibold text-orange-600">crowdfunding platform</span> where anyone can raise funds for any cause, and everyone can contribute. 
            Our mission is simple: <span className="font-semibold">enable hope, generosity, and community impact</span> around the world.
          </p>
          <p className="text-gray-400">
            With a focus on <span className="font-semibold text-orange-600">transparency, trust, and accessibility</span>, we ensure that every campaign is verified and every donor can track their impact.
          </p>
          <img src="/Charity.gif" alt="" />
        </div>

        {/* How We Work */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">
            How We Work
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {howWeWorkSteps.map((step) => (
              <div
                key={step.title}
                className="flex items-start gap-4 bg-white rounded-3xl p-6"
              >
                <div
                  className={`p-4 rounded-xl flex items-center justify-center ${step.bg}`}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
