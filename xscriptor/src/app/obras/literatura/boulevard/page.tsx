import fs from "fs";
import path from "path";
import XBookReader from "@/app/components/xcomponents/xbookreader/XBookReader";

export default function BoulevardPage() {
  const filePath = path.join(process.cwd(), "src/app/obras/literatura/boulevard/boulevard.mdx");
  const rawText = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      <XBookReader rawText={rawText} />
    </main>
  );
}
