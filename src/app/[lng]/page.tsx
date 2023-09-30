import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>

      <Link href={`/${lng}/chat`}>CHAT</Link>
    </main>
  );
}
