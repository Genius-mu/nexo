import { useState, useEffect } from "react";
import {
  Play,
  ArrowRight,
  Check,
  Target,
  TrendingUp,
  Zap,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import PricingCard from "../components/Pricing";

function NexoWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Cinematic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Header />
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-gray-300 shadow-lg shadow-black/30">
            ✨ Trusted by 10,000+ athletes worldwide
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              STAY CONSISTENT
            </span>
            <br />
            <span className="text-gray-500 text-5xl md:text-7xl">
              EVEN WHEN MOTIVATION FADES AWAY.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Personalized training and habit systems designed to help you show
            up, track progress, and actually stick with it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3 transform hover:scale-105 active:scale-95">
              Start Training
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "500K+", label: "Workouts Logged" },
              { value: "94%", label: "Consistency Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Preview with Glass Effect */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 group cursor-pointer shadow-2xl shadow-black/50 hover:shadow-white/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-full p-8 border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-black/50">
                <Play size={48} className="text-white" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xl font-semibold mb-2">
                See how Nexo helps you train, track, and stay consistent
              </p>
              <p className="text-sm text-gray-400">2 minute product tour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits with Glass Cards */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for people who want real results, not just another app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: "Structured Training",
                description:
                  "Personalized plans that adapt to your goals and schedule",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Smart Tracking",
                description: "Clear insights without overwhelming metrics",
              },
              {
                icon: <Zap size={32} />,
                title: "Stay Consistent",
                description: "Adaptive systems that work when life gets busy",
              },
              {
                icon: <Users size={32} />,
                title: "24/7 Support",
                description: "Get guidance whenever you need it most",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 cursor-default shadow-lg shadow-black/30"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What Makes Nexo Different
          </h2>

          <div className="space-y-12">
            {[
              {
                title: "Science-led training",
                description:
                  "Every workout is grounded in proven training principles and real-world results. No gimmicks, just what works.",
              },
              {
                title: "Accountability that adapts",
                description:
                  "Life gets busy. Our system adjusts your plan to keep you consistent without the guilt or pressure.",
              },
              {
                title: "Designed for focus",
                description:
                  "No clutter. No distractions. Just clean interfaces that help you train, track progress, and see results.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/30"
              >
                <div className="h-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-gray-500 font-medium group-hover:scale-105 transition-transform duration-500 border border-white/10">
                  Feature Visual {i + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing with Glass Effect */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-400">
              Cancel anytime. No hidden fees. Start free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="0"
              description="Build a consistent training habit"
              features={[
                "Personalized training plan",
                "Workout tracking",
                "Habit reminders",
                "Progress insights",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />

            <PricingCard
              title="Pro"
              price="39"
              description="For measurable progress"
              features={[
                "Everything in Starter",
                "Smart schedule adjustments",
                "Adaptive training plans",
                "Performance analytics",
                "Priority support",
              ]}
              buttonText="Start Training"
              buttonVariant="primary"
              popular={true}
            />

            <PricingCard
              title="Elite"
              price="99"
              description="Full support & guidance"
              features={[
                "Everything in Pro",
                "1-on-1 coaching access",
                "Advanced insights",
                "Priority adjustments",
                "Premium support",
              ]}
              buttonText="Request Access"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* Testimonials with Glass */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Loved by athletes worldwide
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="Before Nexo, I was constantly second-guessing my training. With Nexo, everything feels structured and intentional. I've never been more consistent."
              author="Alex Samuel"
              role="Product Designer"
              rating={5}
            />

            <Testimonial
              quote="Life gets busy, and I don't always hit every workout. Instead of feeling like I failed, the plan adapts and keeps me consistent. It's been a game-changer."
              author="Happiness Adeola"
              role="Business Professional"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA with Premium Glass Effect */}
      <section className="px-6 py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 shadow-2xl shadow-black/50">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Start training with intention.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nexo gives you the structure, flexibility, and support to train
              consistently — even when motivation fades.
            </p>
            <button className="group bg-white text-black px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105 active:scale-95">
              Start Training Free
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Testimonial({ quote, author, role, rating }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex gap-1 mb-6">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-white text-xl">
              ★
            </span>
          ))}
        </div>
        <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NexoWebsite;
