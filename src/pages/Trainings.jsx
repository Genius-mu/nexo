import { useState } from "react";
import {
  Dumbbell,
  Zap,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Flame,
  Activity,
  Heart,
} from "lucide-react";

function TrainingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "strength", label: "Strength" },
    { id: "cardio", label: "Cardio" },
    { id: "flexibility", label: "Flexibility" },
    { id: "hybrid", label: "Hybrid" },
  ];

  const programs = [
    {
      category: "strength",
      title: "Foundation Strength",
      level: "Beginner",
      duration: "8 weeks",
      frequency: "3x/week",
      description:
        "Build a solid strength foundation with compound movements and progressive overload.",
      img: "/img/img5.webp",
      features: [
        "Full body workouts",
        "Video demonstrations",
        "Progress tracking",
      ],
    },
    {
      category: "strength",
      title: "Advanced Powerbuilding",
      level: "Advanced",
      duration: "12 weeks",
      frequency: "5x/week",
      description:
        "Maximize strength and muscle with high-intensity powerbuilding protocols.",
      img: "/img/img2.webp",
      features: [
        "Periodized training",
        "Custom adjustments",
        "Nutrition guide",
      ],
    },
    {
      category: "cardio",
      title: "Endurance Builder",
      level: "Intermediate",
      duration: "10 weeks",
      frequency: "4x/week",
      description:
        "Improve cardiovascular fitness and endurance through progressive training.",
      img: "/img/img4.webp",
      features: [
        "Zone-based training",
        "Recovery protocols",
        "Performance metrics",
      ],
    },
    {
      category: "hybrid",
      title: "Athletic Performance",
      level: "Intermediate",
      duration: "12 weeks",
      frequency: "5x/week",
      description:
        "Combine strength, power, and conditioning for peak athletic performance.",
      img: "/img/img1.webp",
      features: [
        "Sport-specific work",
        "Mobility training",
        "Recovery strategies",
      ],
    },
    {
      category: "flexibility",
      title: "Mobility & Movement",
      level: "All Levels",
      duration: "6 weeks",
      frequency: "Daily",
      description:
        "Enhance flexibility, mobility, and movement quality for better performance.",
      img: "/img/img5.webp",
      features: ["Daily routines", "Injury prevention", "Movement assessments"],
    },
    {
      category: "strength",
      title: "Bodyweight Mastery",
      level: "Beginner",
      duration: "8 weeks",
      frequency: "4x/week",
      description:
        "Master bodyweight exercises and build functional strength anywhere.",
      img: "/img/img2.webp",
      features: ["No equipment needed", "Skill progressions", "Home friendly"],
    },
  ];

  const filteredPrograms =
    selectedCategory === "all"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

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
            💪 Training Programs
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              TRAIN SMARTER
            </span>
            <br />
            <span className="text-gray-500 text-5xl md:text-7xl">
              NOT HARDER
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Science-backed training programs designed to help you achieve your
            goals with consistency and precision.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              How Training Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A simple, proven process to transform your fitness
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Target size={32} />,
                number: "01",
                title: "Set Your Goals",
                description:
                  "Tell us what you want to achieve and we'll create your roadmap",
              },
              {
                icon: <Calendar size={32} />,
                number: "02",
                title: "Get Your Plan",
                description:
                  "Receive a personalized training program that fits your schedule",
              },
              {
                icon: <Dumbbell size={32} />,
                number: "03",
                title: "Start Training",
                description:
                  "Follow your workouts with clear instructions and demonstrations",
              },
              {
                icon: <TrendingUp size={32} />,
                number: "04",
                title: "Track Progress",
                description:
                  "Monitor your improvements and adjust as you grow stronger",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-16 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/30 inline-flex mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30 overflow-hidden"
              >
                {/* Program Image */}
                <div
                  className="h-56 bg-[rgba(0,0,0,.5)] bg-cover bg-blend-darken backdrop-blur-xl bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${program.img})` }}
                >
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-xl text-black text-xs font-bold rounded-full">
                    {program.level}
                  </div>
                </div>

                {/* Program Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={16} className="text-white" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar size={16} className="text-white" />
                      <span>{program.frequency}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle size={16} className="text-white" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    Start Program
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Every Program Includes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Activity size={32} />,
                title: "Personalized Training Plans",
                description:
                  "Tailored workouts that adapt to your fitness level, goals, and available equipment.",
                img: "/img/img5.webp",
              },
              {
                icon: <Heart size={32} />,
                title: "Recovery & Wellness",
                description:
                  "Built-in recovery protocols, mobility work, and wellness guidance for sustainable progress.",
                img: "/img/img4.webp",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Progress Tracking",
                description:
                  "Detailed analytics and insights to monitor your improvements and stay motivated.",
                img: "/img/img2.webp",
              },
              {
                icon: <Users size={32} />,
                title: "Expert Support",
                description:
                  "Access to certified trainers and a supportive community to keep you accountable.",
                img: "/img/img1.webp",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/30"
              >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div
                    className="h-64 bg-[rgba(0,0,0,.5)] bg-cover bg-blend-darken backdrop-blur-xl rounded-2xl border border-white/10 bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${feature.img})` }}
                  />
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-4 text-white border border-white/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Real Results From Real People
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Thompson",
                result: "Lost 30 lbs in 12 weeks",
                program: "Foundation Strength",
                img: "/img/img5.webp",
                quote:
                  "The structured approach made all the difference. I finally found consistency.",
              },
              {
                name: "Lisa Park",
                result: "Deadlifted 2x bodyweight",
                program: "Advanced Powerbuilding",
                img: "/img/img4.webp",
                quote:
                  "I never thought I could get this strong. The progressive overload worked perfectly.",
              },
              {
                name: "David Martinez",
                result: "Ran first marathon",
                program: "Endurance Builder",
                img: "/img/img2.webp",
                quote:
                  "Went from couch to marathon in 10 weeks. The program kept me injury-free.",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30 overflow-hidden"
              >
                <div
                  className="h-64 bg-[rgba(0,0,0,.5)] bg-cover bg-blend-darken backdrop-blur-xl bg-center"
                  style={{ backgroundImage: `url(${story.img})` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Flame size={20} className="text-white" />
                    <span className="text-white font-bold">{story.result}</span>
                  </div>
                  <p className="text-gray-300 italic mb-4">"{story.quote}"</p>
                  <div>
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-gray-500 text-sm">{story.program}</p>
                  </div>
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
              Ready to start your journey?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of athletes who are training smarter and achieving
              their goals with Nexo.
            </p>
            <button className="group bg-white text-black px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105 active:scale-95">
              Browse All Programs
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

export default TrainingsPage;
