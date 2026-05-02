"use client";

import { UpdateUserInfo } from "@/components/profile/UpdateUserInfo";
import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if(!user) {
    redirect("/login");
  }
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="w-30 h-30">
          <Avatar.Image
            alt="Raiyan Zannat"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>RZ</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-medium">{user?.name}</h2>
        <p>{user?.email}</p>
        <Link href="/update-user-info"><Button variant="secondary">
        {" "}
        <PencilToSquare /> Update Info
        </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfilePage;
