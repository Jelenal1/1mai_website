"use client";

import Image from "next/image";
import { useState } from "react";

export default function AdminForm({
  handleFormsData,
}: {
  handleFormsData: (data: FormData) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    date: new Date().toLocaleDateString("de-DE"),
    author: {
      name: "",
      sirname: "",
    },
  });
  return (
    <div className="mt-5 grid h-full w-full grid-cols-2">
      <form action={handleFormsData} className="my-auto flex flex-col gap-1">
        <input
          type="text"
          name="title"
          placeholder="Titel"
          className="rounded-t-xl border-x-2 border-t-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="border-x-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
          onChange={(e) =>
            setFormData({
              ...formData,
              author: {
                name: e.target.value.split(" ")[0] || "",
                sirname: e.target.value.split(" ")[1] || "",
              },
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
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                const imageSrc = event.target?.result as string;
                if (imageSrc) {
                  // Set the image source to display
                  setFormData({ ...formData, image: imageSrc });
                  console.log(imageSrc);
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
          {...handleFormsData}
          className="rounded-b-xl border-x-2 border-b-2 border-black bg-transparent pl-2 text-lg outline-none focus-within:bg-slate-300"
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center">
        <h1 className="text-2xl font-bold lg:text-3xl">{formData.title}</h1>
        <h2 className="text-sm">
          {formData.author.name + " " + formData.author.sirname}
        </h2>
        <h4 className="text-sm">{formData.date}</h4>
        <p>{formData.description}</p>
        <Image
          src={formData.image}
          width={400}
          height={400}
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
