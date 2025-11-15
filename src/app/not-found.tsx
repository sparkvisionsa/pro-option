import Link from "next/link";
import Image from "next/image";
import logo from "./logo.jpeg";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl w-full p-8 text-center">
        <div className="mx-auto w-20 h-20 mb-6">
          <Image src={logo} alt="Pro Option Logo" width={80} height={80} className="rounded-full object-cover" />
        </div>
        <h1 className="text-3xl font-headline font-bold mb-4">404 — Page Not Found</h1>
        <p className="text-muted-foreground mb-6">The page you are looking for does not exist.</p>
        <Link href="/" className="inline-block rounded bg-primary px-4 py-2 text-primary-foreground font-semibold">Return Home</Link>
      </div>
    </main>
  );
}
