import { useState } from "react";
import {
  Star,
  Quote,
  TrendingUp,
  Award,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function TestimonialsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Stories" },
    { id: "strength", label: "Strength" },
    { id: "weight-loss", label: "Weight Loss" },
    { id: "endurance", label: "Endurance" },
    { id: "lifestyle", label: "Lifestyle" },
  ];

  const testimonials = [
    {
      category: "strength",
      name: "Marcus Johnson",
      role: "Software Engineer",
      img: "/img/img5.webp",
      rating: 5,
      achievement: "Deadlifted 405 lbs",
      duration: "6 months",
      quote: "Before Nexo, I was constantly second-guessing my training. I never knew if I was doing too much or too little. With Nexo, everything feels structured and intentional. I've made more progress in 6 months than I did in 2 years of random workouts.",
      results: ["Increased deadlift by 120 lbs", "Gained 15 lbs lean muscle", "Improved consistency to 95%"],
    },
    {
      category: "weight-loss",
      name: "Sarah Martinez",
      role: "Marketing Director",
      img: "/img/img4.webp",
      rating: 5,
      achievement: "Lost 45 lbs",
      duration: "10 months",
      quote: "The accountability system changed everything for me. Life gets busy with work and kids, but Nexo adapts my plan instead of making me feel guilty. I've finally found a sustainable approach to fitness that fits my real life.",
      results: ["Lost 45 lbs of fat", "Dropped 4 dress sizes", "Maintained weight for 6+ months"],
    },
    {
      category: "endurance",
      name: "David Chen",
      role: "Financial Analyst",
      img: "/img/img2.webp",
      rating: 5,
      achievement: "Completed first marathon",
      duration: "4 months",
      quote: "I went from barely running a mile to completing a marathon in 16 weeks. The progressive training plan kept me injury-free and the tracking made it easy to see my improvements week by week. Absolutely life-changing.",
      results: ["Ran first marathon: 3:42:15", "Zero injuries during training", "Built lifelong running habit"],
    },
    {
      category: "lifestyle",
      name: "Emily Rodriguez",
      role: "Teacher",
      img: "/img/img1.webp",
      rating: 5,
      achievement: "Built consistent routine",
      duration: "8 months",
      quote: "I've tried so many fitness apps and programs over the years, but nothing stuck. Nexo's focus on consistency over perfection finally clicked for me. I train 4 days a week now without even thinking about it - it's just part of who I am.",
      results: ["240+ consecutive workouts", "Improved energy levels dramatically", "Better sleep and mood"],
    },
    {
      category: "strength",
      name: "James Wilson",
      role: "Entrepreneur",
      img: "/img/img5.webp",
      rating: 5,
      achievement: "Bench pressed 315 lbs",
      duration: "9 months",
      quote: "The science-based approach is what sold me. Every workout has a purpose, every progression makes sense. I'm stronger than I've ever been and I know exactly why and how I got here.",
      results: ["Bench press: 225 → 315 lbs", "Squat: 275 → 405 lbs", "Built sustainable strength habits"],
    },
    {
      category: "weight-loss",
      name: "Lisa Thompson",
      role: "Nurse",
      img: "/img/img4.webp",
      rating: 5,
      achievement: "Transformed health markers",
      duration: "12 months",
      quote: "My doctor recommended I lose weight to improve my health markers. Not only did I lose 50 pounds, but my blood pressure, cholesterol, and energy levels all improved dramatically. Nexo literally changed my life.",
      results: ["Lost 50 lbs", "Blood pressure normalized", "Off cholesterol medication"],
    },
  ];

  const filteredTestimonials = selectedFilter === "all"
    ? testimonials
    : testimonials.filter(t => t.category === selectedFilter);

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
            ⭐ Success Stories
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              REAL PEOPLE
            </span>
            <br />
            <span className="text-gray-500 text-5xl md:text-7xl">
              REAL RESULTS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how thousands of athletes are achieving their goals with Nexo's intelligent training systems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "10K+", label: "Success Stories" },
              { value: "94%", label: "Reach Their Goals" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/30"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 relative z-10 pb-12">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex flex-wrap gap-4 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/30">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="h-[500px] bg-[rgba(0,0,0,.5)] bg-cover bg-blend-darken backdrop-blur-xl rounded-2xl border border-white/10 bg-center"
                style={{ backgroundImage: "url(/img/img5.webp)" }}
              />
              <div>
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-bold mb-6">
                  Featured Story
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-white fill-white" />
                  ))}
                </div>
                <Quote size={48} className="text-white/20 mb-4" />
                <blockquote className="text-2xl text-gray-300 mb-8 leading-relaxed italic">
                  "Nexo didn't just help me get stronger—it completely changed my relationship with fitness. I went from dreading workouts to looking forward to them. The adaptive system kept me consistent even during my busiest months at work."
                </blockquote>
                <div className="mb-8">
                  <p className="text-xl font-bold mb-1">Marcus Johnson</p>
                  <p className="text-gray-400">Software Engineer • 6 months with Nexo</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-3xl font-bold mb-1">405 lbs</div>
                    <div className="text-sm text-gray-400">Deadlift PR</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-3xl font-bold mb-1">95%</div>
                    <div className="text-sm text-gray-400">Consistency Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={20} className="text-white fill-white" />
                    ))}
                  </div>

                  {/* Achievement Badge */}
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-bold mb-4">
                    {testimonial.achievement} • {testimonial.duration}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {testimonial.results.map((result, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle size={16} className="text-white flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div
                      className="w-14 h-14 rounded-full overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${testimonial.img})` }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Watch Their Journeys
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear directly from our community about their transformations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah's 45 lb Journey", duration: "3:24", img: "/img/img4.webp" },
              { name: "James' Strength Story", duration: "2:56", img: "/img/img5.webp" },
              { name: "David's Marathon Prep", duration: "4:12", img: "/img/img2.webp" },
            ].map((video, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30 cursor-pointer"
              >
                <div
                  className="h-64 bg-[rgba(0,0,0,.6)] bg-cover bg-blend-darken backdrop-blur-xl bg-center relative"
                  style={{ backgroundImage: `url(${video.img})` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-xl rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{video.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Metrics */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Community Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp size={32} />, value: "2.5M+", label: "Total Workouts" },
              { icon: <Award size={32} />, value: "15K+", label: "Goals Achieved" },
              { icon: <Target size={32} />, value: "94%", label: "Success Rate" },
              { icon: <Zap size={32} />, value: "180", label: "Day Avg Streak" },
            ].map((metric, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white mx-auto group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
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
              Your success story starts here
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands who have transformed their lives with Nexo. Start your journey today.
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

export default TestimonialsPage;