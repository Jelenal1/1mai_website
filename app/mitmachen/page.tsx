"use client";
export default function page() {
  const handleFormData = async (event: FormData) => {
    const prename = event.get("prename")?.valueOf();
    const surname = event.get("sirname")?.valueOf();
    const email = event.get("email")?.valueOf();
    const message = event.get("message")?.valueOf();
    if (typeof window !== "undefined") {
      const mailtoLink = `mailto:${email}?subject=Mitmachen${
        "" + prename + " " + surname
      }&body=${message}`;
      window.location.href = mailtoLink;
    }
  };
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex max-w-[800px] flex-col items-center">
        <h1 className="my-2 text-2xl font-bold lg:text-3xl">Mitmachen</h1>
        <p className="text-justify">
          Willst du nicht nur am 1. Mai dabeisein - sondern uns sogar im Vorfeld
          unterstützen? Oder bist du bereit, am 1. Mai mitzuhelfen?
        </p>
        <h3 className="mt-3 text-xl font-bold lg:text-2xl">
          Schreib uns eine Mail
        </h3>
        <form className="flex w-full flex-col gap-1" action={handleFormData}>
          <label htmlFor="prename" className="pr-0.5 text-lg">
            Vorname<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="prename"
            placeholder="Vorname"
            className="h-8 p-1 focus-within:shadow-xl focus-within:outline-none"
          />
          <label htmlFor="sirname" className="pr-0.5 text-lg">
            Nachname<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="sirname"
            placeholder="Nachname"
            className="h-8 p-1 focus-within:shadow-xl focus-within:outline-none"
          />
          <label htmlFor="email" className="pr-0.5 text-lg">
            E-Mail<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="E-Mail"
            className="h-8 p-1 focus-within:shadow-xl focus-within:outline-none"
          />
          <label htmlFor="message" className="pr-0.5 text-lg">
            Nachricht<span className="text-red-600">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Deine Nachricht"
            rows={10}
            className="h-auto p-1 focus-within:shadow-xl focus-within:outline-none"
          />
          <input
            type="submit"
            value="Senden"
            className="mx-auto mt-1 w-fit border border-black p-1 text-lg hover:cursor-pointer hover:bg-black hover:text-white"
          />
        </form>
      </div>
    </main>
  );
}
