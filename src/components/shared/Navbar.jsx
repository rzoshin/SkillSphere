"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {FolderHouse, House, Person, PersonPlus} from '@gravity-ui/icons';
import { Avatar, Button } from "@heroui/react";
import {GraduationCap} from '@gravity-ui/icons';
import {ArrowRightToSquare} from '@gravity-ui/icons';

import React from 'react';
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/login"); // redirect to login page
      },
    },
  });
}
  return (
    <div className="px-2 font-poppins">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <div className="w-10 md:w-12">
            {" "}
            {/* Control size with a wrapper */}
            <Image
              src="/logo1.png"
              alt="Company Logo"
              width={80} // The actual width of your source file
              height={60} // The actual height of your source file
              sizes="(max-width: 768px) 64px, 192px" // Matches the Tailwind classes above
              className="h-auto w-full"
            />
          </div>
          <h3 className="text-[#1e2e48] text-2xl font-bold tracking-[0.015em] md:text-2xl lg:text-3xl">
            SkillSphere
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-base">
          <li>
            <NavLink href={"/"}><House/> Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-courses"}> <GraduationCap/> All Courses </NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}><Person/>My Profile</NavLink>
          </li>
        </ul>

        <div>
          {!user && (
            <ul className="flex items-center gap-4 text-lg">
              <li>
                <Link href={"/login"}><Button variant="outline" size="lg"> <ArrowRightToSquare /> Login</Button></Link>
              </li>
              <li>
                <Link href={"/register"}><Button variant="outline" size="lg"><PersonPlus/> Register</Button></Link>
              </li>
            </ul>
          )}
          {user && (
            <ul className="flex items-center gap-4 text-sm">
              <Avatar>
                <Avatar.Image
                  alt="{user.name}"
                  src={user.image}
                  referrerPolicy = "no-referrer"
                />
                <Avatar.Fallback>{user.name.split(' ').map(n => n[0]).join('')}</Avatar.Fallback>
              </Avatar>
              <p>Welcome, <br />{user.name}!</p>
              <li>
                <Button variant="danger" onClick={handleSignOut}>SignOut</Button>
              </li>
            </ul>
          )}
            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
