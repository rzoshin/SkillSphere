"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const icons = {
  timer: "⏱",
  focus: "🎯",
  teach: "🧑‍🏫",
  project: "🛠",
  brain: "🧠",
  calendar: "📅",
};

const tips = [
  {
    id: 1,
    title: "Use the Pomodoro Technique",
    category: "Productivity",
    description: "Break your study sessions into 25-minute focused blocks followed by a 5-minute break. After four cycles, take a longer 20–30 minute rest. This rhythm prevents mental fatigue, keeps you sharp, and makes large topics feel manageable. Over time, you'll be surprised how much ground you can cover in a single afternoon.",
    icon: "timer",
    bg: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    accent: "text-orange-500",
  },
  {
    id: 2,
    title: "Eliminate Distractions",
    category: "Focus",
    description: "Before every study session, put your phone in another room, close unrelated browser tabs, and let people around you know you need uninterrupted time. A distraction-free environment doesn't just help you focus — it also reduces the mental cost of constantly switching attention, which drains energy faster than the studying itself.",
    icon: "focus",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    accent: "text-blue-500",
  },
  {
    id: 3,
    title: "Teach What You Learn",
    category: "Retention",
    description: "One of the most powerful learning strategies is to explain a concept out loud as if you're teaching someone else — even if no one is in the room. This forces your brain to organize information clearly, exposes gaps in your understanding, and dramatically improves long-term retention compared to passive reading or rewatching lectures.",
    icon: "teach",
    bg: "bg-purple-50",
    badge: "bg-purple-100 text-purple-700",
    accent: "text-purple-500",
  },
  {
    id: 4,
    title: "Practice with Real Projects",
    category: "Strategy",
    description: "Tutorials give you a foundation, but real projects give you mastery. Once you've learned a concept, find a small project that forces you to apply it without hand-holding. You'll encounter real bugs, make real decisions, and build real confidence. Your portfolio grows at the same time — a double win that passive study can never match.",
    icon: "project",
    bg: "bg-green-50",
    badge: "bg-green-100 text-green-700",
    accent: "text-green-600",
  },
  {
    id: 5,
    title: "Use Active Recall",
    category: "Retention",
    description: "Instead of rereading notes, close them and try to recall everything you know about a topic from memory. Then check. This effortful retrieval process strengthens neural pathways far more than passive review. Use flashcards, write summaries from memory, or quiz yourself with practice problems. The struggle to remember is where real learning happens.",
    icon: "brain",
    bg: "bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-700",
    accent: "text-yellow-600",
  },
  {
    id: 6,
    title: "Stay Consistent Daily",
    category: "Productivity",
    description: "Consistency beats intensity every time. Studying 45 minutes every day will outperform a 6-hour weekend cram session in both retention and skill-building. Build a simple daily habit — same time, same place — and protect it. Even on hard days, showing up for just 20 minutes keeps your momentum alive and your brain primed for learning.",
    icon: "calendar",
    bg: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
    accent: "text-indigo-500",
  },
];

export default function LearningTips() {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <p className="text-center text-indigo-400 font-medium text-sm uppercase tracking-widest mb-2">
        Study Smarter
      </p>
      <h2 className="text-4xl text-center font-bold mb-2 text-[#002f5f]">
        Learning Tips
      </h2>
      <p className="text-center text-gray-400 text-sm mb-10">
        Swipe through tips to level up your learning game
      </p>

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-80 h-[460px]"
        style={{ margin: "0 auto" }}
      >
        {tips.map((tip) => (
          <SwiperSlide key={tip.id}>
            <div className={`h-full ${tip.bg} border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm`}>

              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                  {icons[tip.icon]}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tip.badge}`}>
                  {tip.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className={`text-xl font-bold ${tip.accent} leading-snug`}>
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>

              {/* Bottom dots */}
              <div className="flex gap-1.5">
                {tips.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i === tip.id - 1
                        ? "w-6 bg-gray-400"
                        : "w-3 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="text-center text-gray-400 text-xs mt-6">
        Drag or swipe to explore all {tips.length} tips
      </p>
    </div>
  );
}