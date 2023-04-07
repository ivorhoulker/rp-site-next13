import "server-only";

import { fetchOneView } from "../../../api/[locale]/route";
import { getLocale } from "next-intl/server";
import { markdownToHtml } from "../../../../helpers/markdownToHtml";
import { toUpperFirst } from "../../../../helpers/toUpperFirst";

export const runtime = "experimental-edge";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const locale = getLocale();
    const { slug } = params;
    const test = await fetchOneView({
        slug,
        table: "Event",
        locale,
    });
    const json = await test.json();
    const En = toUpperFirst(locale);
    return {
        title: json[`Title${En}`],
        description: json[`DescriptionShort${En}`],
    };
}

export default async function Home({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { slug } = params;
    // const t = useTranslations("Index");
    const locale = getLocale();

    // pool.connect();

    const test = await fetchOneView({
        slug,
        table: "Event",
        locale,
    });
    const json = await test.json();
    console.log({ json });
    const En = toUpperFirst(locale);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen overflow-x-hidden">
            <div className="w-full">
                {/* <div>{JSON.stringify(json, null, 2)}</div> */}
                <h1>{json[`Title${En}`]}</h1>
                <h2>{json[`Subtitle${En}`]}</h2>
                {/* <div>{JSON.stringify(json, null, 2)}</div> */}
                {/* <div>
                    {json?.description ? (
                        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(json?.DescriptionShortZh) }} />
                    ) : null}
                </div> */}

                {json[`Statement${En}`] ? (
                    <article dangerouslySetInnerHTML={{ __html: markdownToHtml(json[`Statement${En}`]) }} />
                ) : null}
            </div>
        </main>
    );
}
