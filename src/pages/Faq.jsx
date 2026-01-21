import { useState } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Zap,
  CreditCard,
  Users,
  Settings,
  Shield,
  Smartphone,
  MessageCircle,
} from "lucide-react";

function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: "all", label: "All Questions", icon: <HelpCircle size={20} /> },
    {
      id: "getting-started",
      label: "Getting Started",
      icon: <Zap size={20} />,
    },
    {
      id: "billing",
      label: "Billing & Pricing",
      icon: <CreditCard size={20} />,
    },
    { id: "training", label: "Training", icon: <Users size={20} /> },
    { id: "technical", label: "Technical", icon: <Settings size={20} /> },
    { id: "account", label: "Account & Privacy", icon: <Shield size={20} /> },
  ];

  const faqs = [
    {
      category: "getting-started",
      question: "How do I get started with Nexo?",
      answer:
        "Getting started is simple! Sign up for a free account, complete our quick 5-minute onboarding questionnaire about your fitness goals and experience level, and you'll receive your personalized training plan immediately. You can start your first workout right away or schedule it for later.",
    },
    {
      category: "getting-started",
      question: "Do I need any equipment to use Nexo?",
      answer:
        "No! Nexo offers both equipment-based and bodyweight-only training programs. During onboarding, you'll tell us what equipment you have access to (if any), and we'll tailor your workouts accordingly. You can also update your equipment availability anytime in your settings.",
    },
    {
      category: "getting-started",
      question: "What makes Nexo different from other fitness apps?",
      answer:
        "Nexo focuses on sustainable consistency rather than perfection. Our intelligent system adapts your training plan when life gets busy, uses science-based programming for real results, provides clear progress tracking without overwhelming metrics, and offers 24/7 support from certified trainers. We're built for real people with real lives.",
    },
    {
      category: "billing",
      question: "What are the pricing options?",
      answer:
        "We offer three tiers: Starter (Free) includes basic personalized plans and workout tracking. Pro ($39/month) adds smart schedule adjustments, adaptive training, and performance analytics. Elite ($99/month) includes everything plus 1-on-1 coaching access and advanced insights. All paid plans can be canceled anytime with no penalties.",
    },
    {
      category: "billing",
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes! You can cancel your subscription at any time with no penalties, fees, or questions asked. Simply go to Settings > Subscription > Cancel Subscription. You'll retain access until the end of your current billing period.",
    },
    {
      category: "billing",
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid subscriptions. If you're not satisfied within the first 30 days, contact our support team and we'll issue a full refund. After 30 days, we don't offer refunds for partial months, but you can cancel anytime to stop future charges.",
    },
    {
      category: "billing",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All payments are processed securely through Stripe, and we never store your payment information on our servers.",
    },
    {
      category: "training",
      question: "How are training plans personalized?",
      answer:
        "Your plan is customized based on your fitness goals (strength, weight loss, endurance, etc.), current fitness level, available training days per week, equipment access, any injuries or limitations, and past training history. The plan adapts over time based on your progress, consistency, and feedback.",
    },
    {
      category: "training",
      question: "What if I miss a workout?",
      answer:
        "No problem! Life happens, and Nexo is designed for it. If you miss a workout, our adaptive system will intelligently adjust your upcoming schedule. We don't just push everything back – we recalibrate based on your goals and available time to keep you on track without overwhelming you.",
    },
    {
      category: "training",
      question: "Can I change my training program?",
      answer:
        "Absolutely! You can switch programs anytime from your dashboard. Go to Settings > Training Program > Change Program. You can choose a different focus (strength, endurance, weight loss, etc.) or update your schedule. We'll create a smooth transition plan to avoid overtraining or gaps.",
    },
    {
      category: "training",
      question: "How often should I train?",
      answer:
        "This depends on your goals and recovery capacity. Most people see great results with 3-5 training sessions per week. Beginners often start with 3 days, while more advanced athletes might train 5-6 days. Our system recommends a frequency based on your experience level and automatically builds in rest days for recovery.",
    },
    {
      category: "training",
      question: "Do you provide nutrition guidance?",
      answer:
        "Yes! Pro and Elite members receive nutrition guidance including macro calculators, meal planning templates, and general nutrition education. However, we're not a meal-tracking app. We provide principles and frameworks to support your training, not rigid meal plans. Elite members can also get personalized nutrition coaching.",
    },
    {
      category: "technical",
      question: "Is there a mobile app?",
      answer:
        "Yes! Nexo is available on iOS (App Store) and Android (Google Play). The mobile app has full feature parity with the web version, including workout logging, progress tracking, plan adjustments, and community features. You can sync seamlessly between web and mobile.",
    },
    {
      category: "technical",
      question: "Can I use Nexo offline?",
      answer:
        "Yes! Once you've downloaded your workouts, you can access them offline in the mobile app. Your workout data will sync automatically when you reconnect to the internet. The web version requires an internet connection.",
    },
    {
      category: "technical",
      question: "Does Nexo integrate with fitness trackers?",
      answer:
        "Yes! We integrate with Apple Health, Google Fit, Fitbit, Garmin, and Whoop. You can sync your workouts, heart rate data, sleep metrics, and recovery scores. These integrations help our system better understand your recovery needs and adjust your training accordingly.",
    },
    {
      category: "technical",
      question: "What devices are supported?",
      answer:
        "Nexo works on iPhone (iOS 14+), Android phones (Android 8+), iPad and Android tablets, and all modern web browsers (Chrome, Safari, Firefox, Edge). We recommend using the latest version of your device's operating system for the best experience.",
    },
    {
      category: "account",
      question: "How do I change my email or password?",
      answer:
        "Go to Settings > Account Settings. Click 'Change Email' or 'Change Password' and follow the prompts. For email changes, you'll need to verify the new email address. For password changes, you'll need to enter your current password first for security.",
    },
    {
      category: "account",
      question: "Is my data secure?",
      answer:
        "Yes! We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're SOC 2 Type II certified, GDPR compliant, and undergo regular security audits. We never sell your personal data to third parties. You can read our full privacy policy for details.",
    },
    {
      category: "account",
      question: "Can I delete my account?",
      answer:
        "Yes. Go to Settings > Account Settings > Delete Account. This will permanently delete all your data including workout history, progress photos, and personal information. This action cannot be undone. If you're having issues, contact support first – we're here to help!",
    },
    {
      category: "account",
      question: "How do I export my data?",
      answer:
        "You can export all your data anytime from Settings > Privacy > Export Data. We'll send you a comprehensive file (CSV and JSON formats) containing your workout history, progress metrics, and personal information. This usually arrives within 24 hours.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
            ❓ Frequently Asked Questions
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              HOW CAN WE
            </span>
            <br />
            <span className="text-gray-500 text-5xl md:text-7xl">
              HELP YOU TODAY?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Nexo training, features,
            billing, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
              size={24}
            />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500 text-lg shadow-lg shadow-black/30"
            />
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Questions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                question: "How do I get started?",
                category: "getting-started",
              },
              {
                question: "What are the pricing options?",
                category: "billing",
              },
              { question: "Is there a mobile app?", category: "technical" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCategory(item.category);
                  setSearchQuery(item.question);
                }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 text-left group"
              >
                <HelpCircle
                  size={24}
                  className="text-white mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="font-semibold group-hover:text-gray-300 transition-colors">
                  {item.question}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/30">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center p-16 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10">
              <Search size={48} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No results found</h3>
              <p className="text-gray-400">
                Try adjusting your search or browse by category
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/30 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300 hover:bg-white/5"
                  >
                    <span className="font-semibold text-lg pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-8 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/10">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Support */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Still need help?</h2>
              <p className="text-gray-400 text-lg">
                Our support team is here for you 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle size={32} />,
                  title: "Live Chat",
                  description: "Get instant answers",
                  action: "Start Chat",
                },
                {
                  icon: <Smartphone size={32} />,
                  title: "In-App Support",
                  description: "Help within the app",
                  action: "Open App",
                },
                {
                  icon: <HelpCircle size={32} />,
                  title: "Contact Us",
                  description: "Send us a message",
                  action: "Get in Touch",
                },
              ].map((support, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 text-white mx-auto border border-white/20">
                    {support.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{support.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    {support.description}
                  </p>
                  <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105">
                    {support.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Additional Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="#"
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                Training Guides
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Comprehensive guides on form, technique, and training principles
                to maximize your results.
              </p>
              <span className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Browse Guides
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
              </span>
            </a>

            <a
              href="#"
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                Video Tutorials
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Step-by-step video tutorials covering exercises, app features,
                and training strategies.
              </p>
              <span className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Watch Videos
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
              </span>
            </a>

            <a
              href="#"
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                Community Forum
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Join discussions, ask questions, and connect with other athletes
                on their fitness journey.
              </p>
              <span className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Join Forum
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
              </span>
            </a>

            <a
              href="#"
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/30"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                Blog & Updates
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Latest insights on training, nutrition, recovery, and product
                updates from our team.
              </p>
              <span className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Blog
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
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
