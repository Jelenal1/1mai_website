"use client";

import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useState } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AdminForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    imageSrc: "",
    date: new Date().toLocaleDateString("de-DE"),
    author: "",
  });

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/admin/login";
    }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { title, description, content, author, date } = formData;
    if (title === "" || description === "" || content === "" || author === "") {
      return alert("Bitte alle Felder ausfüllen");
    }
    const storage = getStorage();
    const file = e.target.image.files[0];
    console.log(file);
    if (!file) {
      const docRef = await addDoc(collection(db, "articles"), {
        title: title,
        description: description,
        content: content,
        date: date,
        author: author,
        imageurl: "",
      });
      console.log("Document written with ID: ", docRef.id);
      window.location.href = "/admin";
      return;
    }
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);

    const docRef = await addDoc(collection(db, "articles"), {
      title: title,
      description: description,
      content: content,
      date: date,
      author: author,
      imageurl: imageUrl,
    });
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "/admin";
  };

  return (
    <div className="mt-5 grid h-full w-full grid-cols-2">
      <div className="relative">
        <form
          onSubmit={handleSubmit}
          className="absolute left-5 top-10 my-auto flex w-full flex-col gap-1"
        >
          <input
            type="text"
            name="title"
            placeholder="Titel"
            className="rounded-t-xl border-x-2 border-t-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="border-x-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
            onChange={(e) =>
              setFormData({
                ...formData,
                author: e.target.value,
              })
            }
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
          <input
            type="file"
            accept="image/*"
            name="image"
            placeholder="Bild"
            className="border-x-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
            onChange={(e) => {
              const file = e.target.files?.[0];
              console.log(file);
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  const imageSrc = event.target?.result as string;
                  if (imageSrc) {
                    // Set the image source to display
                    setFormData({ ...formData, imageSrc: imageSrc });
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <textarea
            name="content"
            cols={30}
            placeholder="content"
            rows={10}
            className="rounded-b-xl border-x-2 border-b-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
              const target = e.currentTarget as HTMLTextAreaElement;
              if (target) {
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }
            }}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center">
        <h1 className="text-2xl font-bold lg:text-3xl">{formData.title}</h1>
        <h2 className="text-sm">{formData.author}</h2>
        <h4 className="text-sm">{formData.date}</h4>
        <p>{formData.description}</p>
        {formData.imageSrc ? (
          <Image
            src={formData.imageSrc}
            width={400}
            height={400}
            alt={formData.title}
            className="my-2"
          />
        ) : (
          <img src="/1Mai_Banner_24.png" alt="Winti den Menschen nicht dem Profit Banner" className="my-2" />
        )}
        {formData.content.split("\n").map((paragraph, index) => (
          <p key={index} className="my-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
