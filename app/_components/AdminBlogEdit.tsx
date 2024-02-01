"use client";

import Image from "next/image";
import { article } from "../blog/page";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function AdminBlogEdit({
  articleData,
}: {
  articleData: article;
}) {
  const [onEdit, setOnEdit] = useState(false);
  const [title, setTitle] = useState(articleData.title);
  const [description, setDescription] = useState(articleData.description);
  const [content, setContent] = useState(articleData.content);
  const [author, setAuthor] = useState(articleData.author);
  const rows = content.split("\n").length;

  async function handleSubmit() {
    console.log(db);
    const docRef = doc(db, "articles", `${articleData.id}`);
    try {
      await updateDoc(docRef, {
        title: title,
        description: description,
        content: content,
        author: author,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="relative flex max-w-[800px] flex-col items-center">
        {onEdit ? (
          <button
            className="absolute -right-2.5 top-5 text-4xl"
            onClick={() => {
              setOnEdit(false);
              handleSubmit();
            }}
          >
            ✅
          </button>
        ) : (
          <button
            className="absolute -right-2.5 top-5 text-4xl"
            onClick={() => setOnEdit(true)}
          >
            ✏️Editieren
          </button>
        )}
        <h1
          className="mt-2 text-2xl font-bold focus-within:outline-none lg:text-3xl"
          contentEditable={onEdit}
          suppressContentEditableWarning
          onInput={(e) => {
            setTitle(e.currentTarget.innerText);
          }}
        >
          {articleData.title}
        </h1>
        <h2
          className="text-sm focus-within:outline-none"
          contentEditable={onEdit}
          suppressContentEditableWarning
          onInput={(e) => {
            setAuthor(e.currentTarget.innerText);
          }}
        >
          {articleData.author}
        </h2>
        <h3
          className="text-sm focus-within:outline-none"
          contentEditable={onEdit}
          suppressContentEditableWarning
          onInput={(e) => {
            setDescription(e.currentTarget.innerText);
          }}
        >
          {articleData.description}
        </h3>
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
        {onEdit ? (
          <textarea
            className="my-2 w-full resize-none border-none bg-transparent focus-within:outline-none"
            value={content}
            rows={parseInt(rows.toString()) + 5}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        ) : (
          content.split("\n").map((paragraph, index) => (
            <p key={index} className="my-2 w-full">
              {paragraph}
            </p>
          ))
        )}
      </div>
    </main>
  );
}
