// app/login/page.jsx
import { Suspense } from "react";
import LoginPage from "./LoginPage"; // move your current component here

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}