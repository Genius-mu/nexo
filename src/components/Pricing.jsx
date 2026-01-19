import { Check } from "lucide-react";

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant = "primary",
  popular = false,
}) {
  const variants = {
    primary: "bg-white text-black hover:shadow-xl hover:shadow-white/30",
    outline:
      "border border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-xl",
  };

  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 ${
        popular
          ? "bg-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-2xl shadow-white/10"
          : "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-6 py-2 rounded-full shadow-lg">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm">{description}</p>
      <div className="mb-8">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-gray-400 ml-2">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={18} className="text-white mt-1 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${variants[buttonVariant]}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
