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
      router.push("/account/create");
    } else if (status === "unauthenticated") {
      signIn("twitter");
    }
  }, [status, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blackLight">
      <div className="text-center">
        <ReactLoading type="bars" color="#FFA500" height={100} width={100} className="ml-24" />
        <h1 className="text-2xl text-white mt-4 ml-6 font-apercuBold">Linking your account...</h1>
      </div>
    </div>
  );
}