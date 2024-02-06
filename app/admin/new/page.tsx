"use client";
import AdminForm from "@/app/_components/AdminForm";
import { auth } from "@/app/_components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        redirect("/admin/login");
      }
    });
  }, [auth]);
  return (
    <main className="mx-2 mb-10 min-h-screen">
      <AdminForm />
    </main>
  );
}
