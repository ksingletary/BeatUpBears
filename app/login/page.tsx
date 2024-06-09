"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactLoading from 'react-loading';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/account");
    } else if (status === "unauthenticated") {
      signIn("twitter");
    }
  }, [status, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <ReactLoading type="spinningBubbles" color="#FFA500" height={100} width={100} />
        <h1 className="text-2xl text-white mt-4">Redirecting to your account...</h1>
      </div>
    </div>
  );
}