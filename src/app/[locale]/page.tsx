import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const t = useTranslations("Index");
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>{t("title")}</h1>
                <div>
                    <LanguageSwitcher />
                </div>
            </div>
        </main>
    );
}
