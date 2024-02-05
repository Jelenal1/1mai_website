"use client";

import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function LogoutButton() {
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
