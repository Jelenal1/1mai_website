import Link from "next/link";

export default function page() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <h1 className="my-2 text-2xl font-bold lg:text-3xl">Page not found</h1>
      <p>The page you are looking for does not exist</p>
      <div className="flex gap-1">
        <span>Back to</span>
        <Link href="/" className="underline hover:text-blue-600">
          Home
        </Link>
      </div>
    </main>
  );
}
