import "./globals.css";

import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description")
  };
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params?.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
