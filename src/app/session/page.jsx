"use client";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Show a loading state while fetching the session
    return <p>Loading...</p>;
  }

  if (!session) {
    // User is not logged in
    return <p>You are not logged in. Please log in to access this page.</p>;
  }

  // User is logged in
  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <p>Your email: {session.user.email}</p>
    </div>
  );
}
