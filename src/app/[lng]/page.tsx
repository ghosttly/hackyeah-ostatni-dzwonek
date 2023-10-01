import Link from "next/link";
import { useTranslation } from "../i18n";
import { Navbar } from "@/src/components/Navbar";
import Image from "next/image";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "home");

  return (
    <main className="flex h-screen relative flex-col items-center justify-center  lg:pl-[88px] lg:items-start">
      <Navbar lng={lng} />
      <Image
        className="my-[1.4rem]"
        width={201}
        height={91}
        alt="ostatni dzwonek logo"
        src="/images/logo.png"
      />
      <div className="flex  justify-center text-[3rem] sm:text-[4.4rem] text-black mx-5 flex-col lg:mx-0 font-v323 p-6 overflow-hidden relative h-min">
        <h1 className="text-center sm:text-left leading-10 ">
          {t("heroTitle.heading")}
        </h1>
        <h2 className="text-center sm:text-left mb-7">
          {t("heroTitle.subHeading")}
        </h2>
        <p className="font-blinker text-[2rem] sm:text-[3.2rem] text-center sm:text-left flex flex-col">
          <span> {t("heroParagraphSentences.0")}</span>
          <span> {t("heroParagraphSentences.1")}</span>
          <span> {t("heroParagraphSentences.2")}</span>
          <span> {t("heroParagraphSentences.3")}</span>
        </p>

        <div className="absolute top-0 left-0 bg-white w-full h-full -z-10 opacity-50" />
      </div>
      <Link
        className="text-[2rem] sm:text-[3.2rem] mt-9 font-v323 py-8 px-20 bg-button-background border-2 text-black border-black"
        href={`/${lng}/chat`}
      >
        {t("ctaBtn")}
      </Link>
    </main>
  );
}
