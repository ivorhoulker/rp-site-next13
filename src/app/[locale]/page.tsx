import { Link, useTranslations } from "next-intl";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{t("title")}</h1>
        <div>
          <Link href="/" locale="en">
            Switch to English
          </Link>
        </div>
        <div>
          <Link href="/" locale="zh">
            Switch to Chinese
          </Link>
        </div>
      </div>
    </main>
  );
}
