import { Suspense } from "react";
import PostClient from "./PostClient";

export default function Page() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-3xl px-4 py-10">Cargando…</main>}>
      <PostClient />
    </Suspense>
  );
}
