import "./globals.css";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata() {
    const t = await getTranslations("Metadata");

    return {
        title: t("title"),
        description: t("description"),
    };
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    // Show a 404 error if the user requests an unknown locale

    return (
        <html lang={locale}>
            <body className="bg-white text-black">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <nav>
                        <LanguageSwitcher />
                    </nav>

                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
