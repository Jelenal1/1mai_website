"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { article, author } from "../blog/page";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";

export default function AdminForm({
  handleFormsData,
}: {
  handleFormsData: (data: FormData) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    date: "",
  } as article);

  const [currentUid, setCurrentUid] = useState("");
  const [authorData, setAuthorData] = useState({
    name: "",
    sirname: "",
  });

  useEffect(() => {

    async function getAuthorData() {
      const q = query(collection(db, "authors"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.forEach((doc) => {
        const uid = doc.data().uid;
        console.log(uid);
        console.log(currentUid);
        if (doc.data().uid.toString() === currentUid) {
          return doc.data();
        }
      });
      console.log(data);
    }
    getAuthorData();
  }, [auth]);
  return (
    <div className="mt-5 grid h-full w-full grid-cols-2 rounded-xl">
      <form action={handleFormsData} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          placeholder="Titel"
          className="rounded-t-xl border-x-2 border-t-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          name="description"
          placeholder="Beschreibung"
          className="border-x-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <textarea
          name="content"
          cols={30}
          placeholder="content"
          rows={10}
          {...handleFormsData}
          className="rounded-b-xl border-x-2 border-b-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="h-full w-full border-l-2 border-black">
        <h1 className="mt-2 text-2xl font-bold lg:text-3xl">
          {formData.title}
        </h1>
        <h2 className="text-sm">
          {authorData.name + " " + authorData.sirname}
        </h2>
        <Image
          src="/alles_fuer_alle_banner.png"
          width={800}
          height={800}
          alt="alles-fuer-alle"
          className="my-2"
        />
        {formData.content.split("\\n" || "\n").map((paragraph, index) => (
          <p key={index} className="my-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
