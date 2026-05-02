"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UpdateUserInfo = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name: name,
      image: image,
    });
  };
  return (
    <Card className="border mx-auto w-180 py-10 mt-4">
      <h1 className="text-center text-3xl font-bold my-5 text-[#002f5f]">
        Update Profile
      </h1>
      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField className="w-full" name="image" type="url">
          <Label>Image URL</Label>
          <Input placeholder="Enter the image URL" />
        </TextField>
        <div>
            <Link href="/profile">
          <Button variant="secondary">
            Cancel
          </Button>
          </Link>
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </Card>
  );
};

export default UpdateUserInfo;
