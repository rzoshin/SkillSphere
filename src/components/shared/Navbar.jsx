"use client";
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
} from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center group">
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

        {/* Nav links */}
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

        {/* Auth area */}
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
                    <ArrowRightToSquare /> Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <Button
                    size="sm"
                    className="flex items-center gap-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 py-2 transition-colors"
                  >
                    <PersonPlus /> Register
                  </Button>
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5">
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
                <div className="leading-tight">
                  <p className="text-xs text-gray-400">Welcome back</p>
                  <p className="text-sm font-semibold text-[#1e2e48]">
                    {user.name.split(" ")[0]}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="default"
                className="text-sm font-medium border border-red-100 text-red-500 hover:bg-red-50 rounded-xl px-4 py-2 transition-colors"
                onClick={handleSignOut}
              >
                Sign out
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
