"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function LogoutButton() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/admin/login";
    }
  });

  return (
    <button
      onClick={async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.log(error);
        }
        window.location.href = "/admin/login";
      }}
    >
      Logout
    </button>
  );
}
