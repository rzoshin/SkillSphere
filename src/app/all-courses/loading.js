import { Spinner } from "@heroui/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return <div className="flex justify-center items-center w-full h-screen">
    <Spinner color="accent" size="xl"/>
    </div>
}