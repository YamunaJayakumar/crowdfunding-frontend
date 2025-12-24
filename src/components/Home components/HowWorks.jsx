import {
  HeartHandshake,
  UserPlus,
  CreditCard,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    title: "Start a Campaign",
    desc: "Create a fundraiser in minutes by sharing your story and setting a goal.",
    icon: <UserPlus size={24} />,
  },
  {
    title: "Campaign Review",
    desc: "Our team reviews your campaign to ensure authenticity and transparency.",
    icon: <CheckCircle size={24} />,
  },
  {
    title: "Receive Donations",
    desc: "Supporters donate securely and track progress in real time.",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Make an Impact",
    desc: "Funds are used to support real causes and change lives.",
    icon: <HeartHandshake size={24} />,
  },
];

function HowItWorks() {
  return (
    <section className="bg-orange-50 py-16 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900">
          How FundRise Works
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          A simple and transparent way to raise funds and support causes that matter.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-200 transform -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="bg-white w-full md:w-[45%] p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-linear-to-br from-orange-400 to-orange-600 text-white p-2 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 w-5 h-5 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
