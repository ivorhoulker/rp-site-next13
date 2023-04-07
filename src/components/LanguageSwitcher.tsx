import { Link, useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
    const t = useTranslations("LanguageSwitcher");
    const locale = useLocale();
    const otherLocale = locale === "en" ? "zh" : "en";

    return (
        <Link href="/" locale={otherLocale}>
            {t("switchLocale", { locale: otherLocale })}
        </Link>
    );
}
