"use client";

import Image from "next/image";
import { article } from "../blog/page";
import { useState } from "react";

export default function AdminBlogEdit({
  articleData,
}: {
  articleData: article;
}) {
  const [onEdit, setOnEdit] = useState(false);

  if (onEdit) {
    return (
      <main className="mx-9 mb-10 flex flex-col items-center">
        <div className="relative flex max-w-[800px] flex-col items-center">
          <button
            className="absolute -right-2.5 top-5 text-4xl"
            onClick={() => setOnEdit(false)}
          >
            ✅
          </button>
          <input
            type="text"
            name="title"
            placeholder="Titel"
            className="mt-2 text-2xl font-bold lg:text-3xl"
          />
          <input
            type="text"
            name="author"
            placeholder="Autor"
            className="text-sm"
          />
          <input
            type="text"
            name="image"
            placeholder="Bild"
            className="text-sm"
          />
          <textarea
            name="content"
            defaultValue={articleData.content}
            className="my-2 h-96 w-full rounded-xl border-2 border-black bg-transparent p-2 text-lg outline-none"
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
              const target = e.currentTarget as HTMLTextAreaElement;
              if (target) {
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }
            }}
          />
        </div>
      </main>
    );
  }
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="relative flex max-w-[800px] flex-col items-center">
        <button
          className="absolute -right-2.5 top-5 text-4xl"
          onClick={() => setOnEdit(true)}
        >
          📝
        </button>
        <h1 className="mt-2 text-2xl font-bold lg:text-3xl">
          {articleData.title}
        </h1>
        <h2 className="text-sm">{articleData.author}</h2>
        {articleData.imageurl ? (
          <img
            src={articleData.imageurl}
            alt={articleData.title}
            className="my-2"
          />
        ) : (
          <Image
            src="/alles_fuer_alle_banner.png"
            width={800}
            height={800}
            alt="alles-fuer-alle"
            className="my-2"
          />
        )}
        {articleData.content.split("\n").map((paragraph, index) => (
          <p key={index} className="my-2 w-full">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
