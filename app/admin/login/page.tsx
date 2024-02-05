"use client";
import { auth } from "@/app/_components/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();
  async function handleLogin(data: FormData) {
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    if (!email || !password) return;
    await signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/admin");
      }
    });
  }, [auth]);

  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="w-full max-w-[800px] items-center">
        <h1 className="my-2 text-center text-2xl font-bold lg:text-3xl">
          Login
        </h1>
        <form action={handleLogin} className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-t-xl border-x-2 border-t-2 border-black bg-transparent pl-2 text-lg outline-none valid:bg-green-300 invalid:bg-red-300 focus-within:bg-slate-300 focus-within:invalid:bg-red-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            autoComplete="current-password"
            required
            minLength={8}
            className="border-x-2 border-black bg-transparent pl-2 text-lg outline-none valid:bg-green-300 invalid:bg-red-300 focus-within:bg-slate-300"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
