"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function LearningTips() {
  const tips =
    [
      {
        id: 1,
        title: "Use the Pomodoro Technique",
        category: "Productivity",
        description:
          "Study in focused 25-minute sessions followed by short breaks to maintain high energy and avoid burnout.",
        icon: "timer",
        color: "from-orange-400 to-red-400",
      },
      {
        id: 2,
        title: "Eliminate Distractions",
        category: "Focus",
        description:
          "Turn off notifications, keep your phone away, and create a dedicated study environment.",
        icon: "focus",
        color: "from-blue-400 to-cyan-400",
      },
      {
        id: 3,
        title: "Teach What You Learn",
        category: "Retention",
        description:
          "Explaining concepts to others helps reinforce your understanding and reveals knowledge gaps.",
        icon: "teach",
        color: "from-purple-400 to-pink-400",
      },
      {
        id: 4,
        title: "Practice with Real Projects",
        category: "Strategy",
        description:
          "Apply what you learn by building projects to gain hands-on experience and confidence.",
        icon: "project",
        color: "from-green-400 to-emerald-400",
      },
      {
        id: 5,
        title: "Use Active Recall",
        category: "Retention",
        description:
          "Test yourself frequently instead of passively rereading notes to improve long-term memory.",
        icon: "brain",
        color: "from-yellow-400 to-orange-400",
      },
      {
        id: 6,
        title: "Stay Consistent Daily",
        category: "Productivity",
        description:
          "Even 30–60 minutes daily beats long, irregular study sessions.",
        icon: "calendar",
        color: "from-indigo-400 to-blue-400",
      },
    ];
  return (
    <>
      <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
        {tips.map((tip) => (
          <SwiperSlide key={tip.id}>
            <div
              className="h-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3">brain</div>

              <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>

              <p className="text-sm">{tip.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
