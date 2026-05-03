"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  House,
  Person,
  PersonPlus,
  GraduationCap,
  ArrowRightToSquare,
  Bars,
  Xmark,
} from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  const closeDrawer = () => setDrawerOpen(false);

  const drawer =
    mounted &&
    createPortal(
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-100 bg-black/50 transition-opacity duration-300 md:hidden ${
            drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeDrawer}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 z-101 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <Link href="/" className="flex gap-2 items-center" onClick={closeDrawer}>
              <div className="w-8">
                <Image
                  src="/logo1.png"
                  alt="SkillSphere"
                  width={60}
                  height={40}
                  className="h-auto w-full"
                />
              </div>
              <span className="text-[#1e2e48] text-lg font-bold tracking-tight">
                SkillSphere
              </span>
            </Link>
            <button
              onClick={closeDrawer}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Xmark className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer nav links */}
          <ul className="flex flex-col gap-1 p-3 text-sm font-medium">
            <li>
              <NavLink href="/" onClick={closeDrawer}>
                <House /> Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/all-courses" onClick={closeDrawer}>
                <GraduationCap /> All Courses
              </NavLink>
            </li>
            <li>
              <NavLink href="/profile" onClick={closeDrawer}>
                <Person /> My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </>,
      document.body
    );

  return (
    <>
      {drawer}

      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4">
        <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

          {/* Left: Hamburger (mobile) + Logo */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Bars className="w-5 h-5" />
            </button>

            <Link href="/" className="flex gap-2 items-center">
              <div className="w-9 md:w-10">
                <Image
                  src="/logo1.png"
                  alt="SkillSphere"
                  width={60}
                  height={40}
                  className="h-auto w-full"
                />
              </div>
              <span className="text-[#1e2e48] text-xl font-bold tracking-tight md:text-2xl">
                SkillSphere
              </span>
            </Link>
          </div>

          {/* Center: Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            <li>
              <NavLink href="/">
                <House /> Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/all-courses">
                <GraduationCap /> All Courses
              </NavLink>
            </li>
            <li>
              <NavLink href="/profile">
                <Person /> My Profile
              </NavLink>
            </li>
          </ul>

          {/* Right: Auth area */}
          <div>
            {!user && (
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1.5 text-sm font-medium border border-gray-200 rounded-xl px-4 py-2 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                    >
                      <ArrowRightToSquare />
                      <span className="hidden sm:inline">Login</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <Button
                      size="sm"
                      className="flex items-center gap-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 py-2 transition-colors"
                    >
                      <PersonPlus />
                      <span className="hidden sm:inline">Register</span>
                    </Button>
                  </Link>
                </li>
              </ul>
            )}

            {user && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-2.5 py-1.5 md:px-3">
                  <Avatar className="w-8 h-8">
                    <Avatar.Image
                      alt={user.name}
                      src={user.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback className="text-xs bg-indigo-100 text-indigo-700 font-semibold">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="leading-tight hidden sm:block">
                    <p className="text-xs text-gray-400">Welcome back</p>
                    <p className="text-sm font-semibold text-[#1e2e48]">
                      {user.name.split(" ")[0]}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="default"
                  className="text-sm font-medium border border-red-100 text-red-500 hover:bg-red-50 rounded-xl px-3 py-2 md:px-4 transition-colors"
                  onClick={handleSignOut}
                >
                  <span className="hidden sm:inline">Sign out</span>
                  <ArrowRightToSquare className="sm:hidden w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;