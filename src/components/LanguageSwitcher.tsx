"use client";

import { Link, useLocale } from "next-intl";

import { usePathname } from "next-intl/client";

export default function LanguageSwitcher() {
    // const t = useTranslations("LanguageSwitcher");
    const locale = useLocale();
    const path = usePathname();
    const otherLocale = locale === "en" ? "zh" : "en";

    return (
        <Link className="text-black h-10 w-44" href={path || ""} locale={otherLocale}>
            {otherLocale}
        </Link>
    );
}
