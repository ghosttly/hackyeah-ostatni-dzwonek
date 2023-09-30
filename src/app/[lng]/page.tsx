import Link from "next/link";
import { useTranslation } from "../i18n";
import { Navbar } from "@/components/Navbar";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar lng={lng} />

      <Link href={`/${lng}/chat`}>CHAT</Link>
    </main>
  );
}
