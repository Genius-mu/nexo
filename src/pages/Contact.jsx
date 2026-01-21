import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  Clock,
  HelpCircle,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Cinematic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-gray-300 shadow-lg shadow-black/30">
            💬 Get In Touch
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              LET'S CONNECT
            </span>
            <br />
            <span className="text-gray-500 text-5xl md:text-7xl">
              WE'RE HERE TO HELP
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Have questions about training, features, or partnerships? Our team
            is ready to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: <Mail size={28} />,
                title: "Email Us",
                info: "hello@nexo.com",
                description: "We'll respond within 24 hours",
              },
              {
                icon: <MessageSquare size={28} />,
                title: "Live Chat",
                info: "Available 24/7",
                description: "Get instant support",
              },
              {
                icon: <Phone size={28} />,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                description: "Mon-Fri, 9AM-6PM EST",
              },
              {
                icon: <MapPin size={28} />,
                title: "Visit Us",
                info: "San Francisco, CA",
                description: "123 Fitness Street",
              },
            ].map((method, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white mx-auto group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-white font-semibold mb-1">{method.info}</p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
              <h2 className="text-4xl font-bold mb-6">Send us a message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4 mx-auto border border-white/30">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white"
                    >
                      <option value="general" className="bg-gray-900">
                        General Inquiry
                      </option>
                      <option value="support" className="bg-gray-900">
                        Technical Support
                      </option>
                      <option value="training" className="bg-gray-900">
                        Training Question
                      </option>
                      <option value="partnership" className="bg-gray-900">
                        Partnership
                      </option>
                      <option value="feedback" className="bg-gray-900">
                        Feedback
                      </option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="group w-full bg-white text-black px-8 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95"
                  >
                    Send Message
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              )}
            </div>

            {/* FAQ & Additional Info */}
            <div className="space-y-8">
              {/* Quick Answers */}
              <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <HelpCircle size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Quick Answers</h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      question: "How do I get started?",
                      answer:
                        "Sign up for free and complete our quick onboarding to get your personalized training plan.",
                    },
                    {
                      question: "Can I cancel anytime?",
                      answer:
                        "Yes! You can cancel your subscription at any time with no penalties or fees.",
                    },
                    {
                      question: "Do you offer refunds?",
                      answer:
                        "We offer a 30-day money-back guarantee if you're not satisfied with Nexo.",
                    },
                    {
                      question: "Is there a mobile app?",
                      answer:
                        "Yes! Nexo is available on iOS and Android with full feature parity.",
                    },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="pb-6 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <h4 className="font-semibold mb-2 text-white">
                        {faq.question}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/FAQ"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mt-6 font-medium"
                >
                  View all FAQs
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Office Hours */}
              <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <Clock size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Support Hours</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-semibold">
                      10:00 AM - 4:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-semibold text-gray-500">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-semibold">Note:</span> Live
                    chat support is available 24/7 for urgent matters.
                  </p>
                </div>
              </div>

              {/* Community */}
              <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <Users size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Join the Community</h2>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Connect with thousands of athletes, share your journey, and
                  get support from our community.
                </p>

                <div className="space-y-3">
                  <a
                    href="#"
                    className="block px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 font-medium text-center"
                  >
                    Discord Community
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 font-medium text-center"
                  >
                    Facebook Group
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 font-medium text-center"
                  >
                    Reddit Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Average Response Times
              </h2>
              <p className="text-gray-400">
                We're committed to getting back to you quickly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap size={32} />,
                  type: "Live Chat",
                  time: "< 2 minutes",
                  description: "Instant support for urgent questions",
                },
                {
                  icon: <Mail size={32} />,
                  type: "Email Support",
                  time: "< 24 hours",
                  description: "Detailed responses to your inquiries",
                },
                {
                  icon: <Phone size={32} />,
                  type: "Phone Support",
                  time: "< 5 minutes",
                  description: "Speak directly with our team",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white mx-auto border border-white/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.type}</h3>
                  <div className="text-3xl font-bold mb-3">{item.time}</div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
            <div className="h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl flex items-center justify-center border-b border-white/10">
              <div className="text-center">
                <MapPin size={48} className="text-white/30 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Interactive Map</p>
                <p className="text-gray-600 text-sm mt-2">
                  123 Fitness Street, San Francisco, CA 94102
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
