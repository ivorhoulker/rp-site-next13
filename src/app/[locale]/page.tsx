import "server-only";

import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchEvent } from "../api/[locale]/route";
import { getLocale } from "next-intl/server";
import { markdownToHtml } from "@/helpers/markdownToHtml";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "experimental-edge";
export default async function Home() {
    // const t = useTranslations("Index");
    const locale = getLocale();
    const data = await fetchEvent(locale);
    // pool.connect();

    // const test = await fetchOneView({
    //     slug: "presence-phase-2",
    //     table: "Event",
    //     locale,
    // });
    // const json = await test.json();
    // console.log({ json });
    const h = data?.keyVisual?.height || 300;
    const w = data?.keyVisual?.width || 400;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen overflow-x-hidden">
            <div className="w-full">
                <h1>{data?.title}</h1>
                <h2>{data?.subtitle}</h2>
                <div>{data?.keyVisual?.title}</div>
                {!!data?.keyVisual?.url && (
                    <div className="relative w-full" style={{ aspectRatio: `${w}/${h}` }}>
                        <Image
                            className="object-cover"
                            style={{ objectPosition: data?.keyVisual?.objectPosition }}
                            fill
                            placeholder={data?.keyVisual.blurHash ? "blur" : undefined}
                            blurDataURL={data?.keyVisual.blurHash ?? undefined}
                            src={data?.keyVisual?.url}
                            alt={""}
                            // width={data?.keyVisualWidth || 400}
                            // height={data?.keyVisualHeight || 300}
                        />
                    </div>
                )}

                {!!data?.description && <div dangerouslySetInnerHTML={{ __html: markdownToHtml(data?.description) }} />}

                {!!data?.statement && <div dangerouslySetInnerHTML={{ __html: markdownToHtml(data?.statement) }} />}
            </div>
        </main>
    );
}
