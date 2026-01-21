import { useState } from "react";
import {
  Target,
  Users,
  TrendingUp,
  Award,
  Heart,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

function AboutPage() {
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
            🎯 Our Story
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              BUILDING THE FUTURE
            </span>
            <br />
            <span className="text-gray-500 text-5xl md:text-7xl">
              OF CONSISTENT TRAINING
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help people build sustainable fitness habits
            through intelligent training systems that adapt to real life.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30 hover:border-white/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 border border-white/20">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              To empower individuals to achieve their fitness goals by providing
              personalized, science-based training systems that remove guesswork
              and build lasting consistency.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30 hover:border-white/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 border border-white/20">
              <Globe size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              A world where everyone has access to intelligent training guidance
              that adapts to their life, making fitness sustainable and
              enjoyable for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30">
            <div
              className="h-96 bg-[rgba(0,0,0,.5)] bg-cover bg-blend-darken backdrop-blur-xl rounded-2xl border border-white/10 bg-center"
              style={{ backgroundImage: "url(/img/img5.webp)" }}
            />
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                How We Started
              </h2>
              <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                <p>
                  Nexo was born from a simple frustration: inconsistency. Our
                  founders spent years training, trying different programs, and
                  constantly falling off track when life got busy.
                </p>
                <p>
                  We realized the problem wasn't motivation—it was the lack of
                  intelligent systems that could adapt to real life. So we built
                  Nexo: a platform that understands that consistency beats
                  perfection, and that the best training plan is one you can
                  actually stick to.
                </p>
                <p>
                  Today, we're helping thousands of people around the world
                  train smarter, stay consistent, and achieve results they never
                  thought possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "People First",
                description:
                  "We design for real humans with real lives, not perfect robots. Your success is our success.",
              },
              {
                icon: <Shield size={32} />,
                title: "Science-Based",
                description:
                  "Every feature is grounded in proven training principles and real-world data, not trends or gimmicks.",
              },
              {
                icon: <Zap size={32} />,
                title: "Relentless Improvement",
                description:
                  "We're constantly learning, iterating, and evolving to serve you better every single day.",
              },
              {
                icon: <Users size={32} />,
                title: "Community Driven",
                description:
                  "Our users shape our product. We listen, we learn, and we build based on your feedback.",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Long-Term Thinking",
                description:
                  "We optimize for sustainable progress, not quick fixes. Real change takes time, and we're here for it.",
              },
              {
                icon: <Award size={32} />,
                title: "Excellence",
                description:
                  "We sweat the details because quality matters. From design to support, we aim for exceptional.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/30">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              By The Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { value: "10K+", label: "Active Athletes" },
                { value: "500K+", label: "Workouts Completed" },
                { value: "94%", label: "Consistency Rate" },
                { value: "150+", label: "Countries Reached" },
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate individuals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                img: "/img/img1.webp",
                bio: "Former competitive athlete turned entrepreneur",
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-Founder",
                img: "/img/img2.webp",
                bio: "Exercise scientist and software engineer",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Product",
                img: "/img/img4.webp",
                bio: "UX designer with a passion for human behavior",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30 overflow-hidden"
              >
                <div
                  className="h-80 bg-[rgba(0,0,0,.5)] bg-cover bg-blend-darken backdrop-blur-xl bg-center"
                  style={{ backgroundImage: `url(${member.img})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-400 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 shadow-2xl shadow-black/50">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Join us on this journey
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting out or training for years, Nexo
              adapts to you. Start building consistency today.
            </p>
            <button className="group bg-white text-black px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105 active:scale-95">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
