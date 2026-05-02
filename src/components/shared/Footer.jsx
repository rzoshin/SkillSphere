import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative mt-12 w-full">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-[90%] mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand + Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo1.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                SkillSphere
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              A modern online learning platform where users can explore courses,
              watch lessons, and enroll in skill-based programs.
            </p>

            {/* 🔹 Contact Info */}
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>Email: support@skillsphere.com</p>
              <p>Phone: +880 1234-567890</p>
            </div>

            {/* 🔹 Social Links */}
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:scale-110 transition">
                <Icon icon="mdi:facebook" className="text-xl" />
              </Link>
              <Link href="#" className="hover:scale-110 transition">
                <Icon icon="mdi:twitter" className="text-xl" />
              </Link>
              <Link href="#" className="hover:scale-110 transition">
                <Icon icon="mdi:github" className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Learning
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/all-courses"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/my-learning"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  My Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start Learning
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore courses and build real-world skills today.
            </p>

            <Link
              href="/all-courses"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
    bg-black text-white dark:bg-white dark:text-black 
    text-sm font-medium transition-all duration-200 
    hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Browse Courses
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;