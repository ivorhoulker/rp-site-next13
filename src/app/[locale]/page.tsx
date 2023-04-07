import { getLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { markdownToHtml } from "../../helpers/markdownToHtml";
import { eventQuery } from "../../queries/eventQuery";
const inter = Inter({ subsets: ["latin"] });
export const runtime = "experimental-edge";
export default async function Home() {
    // const t = useTranslations("Index");
    const locale = getLocale();

    // pool.connect();

    const res = await fetch(`${process.env.BASE_FETCH_URL}/api/${locale}`);
    const json = (await res.json()) as Awaited<ReturnType<typeof eventQuery>>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen overflow-x-hidden">
            <div className="w-full">
                {/* <h1>{t("title")}</h1> */}
                <div>{JSON.stringify(json, null, 2)}</div>
                <div>
                    {json?.[0].events?.descriptionEn ? (
                        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(json?.[0].events.descriptionEn) }} />
                    ) : null}
                </div>
            </div>
        </main>
    );
}
