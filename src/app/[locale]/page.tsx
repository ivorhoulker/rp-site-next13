import "server-only";

import { EventResponse, fetchOneView } from "../api/[locale]/route";

import { getLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { markdownToHtml } from "../../helpers/markdownToHtml";

// export async function test({ slug, table }: { slug: string; table: "Event" | "Tag" }) {
//     const options = {
//         method: "GET",
//         // url: "https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/Event/views/Event",
//         // params: { where: `(Slug,eq,${slug})` },
//         headers: {
//             "xc-token": process.env.NOCO_TOKEN!,
//         },
//         next: { revalidate: 10 },
//     };

//     const res = await fetch(
//         `https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/Event/views/English`,
//         options,
//     );
//     const output = await res.json();
//     console.log({ output });
//     return output;
// }
const inter = Inter({ subsets: ["latin"] });
export const runtime = "experimental-edge";
export default async function Home() {
    // const t = useTranslations("Index");
    const locale = getLocale();

    // pool.connect();

    const test = await fetchOneView({
        slug: "presence-phase-2",
        table: "Event",
        locale,
    });
    const json = (await test.json()) as EventResponse;
    console.log({ json });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen overflow-x-hidden">
            <div className="w-full">
                <h1>{json?.title}</h1>
                <h2>{json?.subtitle}</h2>
                {/* <div>{JSON.stringify(json, null, 2)}</div> */}
                <div>
                    {json?.description ? (
                        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(json?.description) }} />
                    ) : null}
                </div>
                <div>
                    {json?.statement ? (
                        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(json?.statement) }} />
                    ) : null}
                </div>
            </div>
        </main>
    );
}
