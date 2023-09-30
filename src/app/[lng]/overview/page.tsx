import Link from "next/link";

import { Navbar } from "@/src/components/Navbar";
import { useTranslation } from "../../i18n";
import { overwievLinks } from "@/src/data";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "home");

  return (
    <main className="flex h-screen relative flex-col gap-10 items-center justify-center ">
      {overwievLinks.map((link) => (
        <Link
          className="flex items-center bg-[#FFFFFF80] hover:bg-white transition-colors rounded-2xl p-2 px-6 gap-4 text-[3.6rem] font-blinker text-black"
          key={link.title}
          href={link.href}
        >
          {link.icon} {link.title}
        </Link>
      ))}
    </main>
  );
}
