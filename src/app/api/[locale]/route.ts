import "server-only";

export type EventResponse = {
    title: string | null;
    descriptionShort: string | null;
    subtitle: string | null;
    description: string | null;
    statement: string | null;
    externalUrl: string | null;
    duration: number | null;
    keyVisualPortrait: string | null;
    keyVisualLandscape: string | null;
};
// export const runtime = "experimental-edge";
// const queryConnection = postgres(process.env.DATABASE_URL!);
// const db = drizzle(queryConnection);
//https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/EntityRole/1/mm/Entities

export async function GET(request: Request, context: { params: { locale: string } }) {
    const { searchParams } = new URL(request.url);

    const options = {
        method: "GET",
        // url: "https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/Event/views/Event",
        params: { offset: "0", limit: "25", where: "" },
        headers: {
            "xc-token": process.env.NOCO_TOKEN!,
        },
    };

    const res = await fetch(
        "https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/Event",
        options,
    );
    const json = await res.json();
    console.log(json);

    // console.log("request", context);
    // const locale = context.params.locale;
    // const res = await eventQuery({ db, entityId: 1 });
    // const event = res?.[0]?.event;
    // const filteredResponse: EventResponse = {
    //     title: locale === "zh" ? event.titleZh : event.titleEn,
    //     descriptionShort: locale === "zh" ? event.descriptionShortZh : event.descriptionShortEn,
    //     subtitle: locale === "zh" ? event.subtitleZh : event.subtitleEn,
    //     description: locale === "zh" ? event.descriptionZh : event.descriptionEn,
    //     statement: locale === "zh" ? event.statementZh : event.statementEn,
    //     externalUrl: event.externalUrl,
    //     duration: event.duration,
    //     keyVisualLandscape: event.keyVisualLandscape,
    //     keyVisualPortrait: event.keyVisualPortrait,
    // };
    // console.log("res", JSON.stringify(res, null, 2));

    return new Response(JSON.stringify(res), {
        status: 200,
        headers: {
            "content-type": "application/json",
        },
    });
}

export async function fetchOne({ slug, table }: { slug: string; table: "Event" | "Tag" }) {
    const options = {
        method: "GET",
        // url: "https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/Event/views/Event",
        params: { where: `(Slug,eq,${slug})` },
        headers: {
            "xc-token": process.env.NOCO_TOKEN!,
        },
    };

    const res = await fetch(
        `https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/${table}/find-one`,
        options,
    );
    const output = await res.json();
    console.log({ output });
    return output;
}

export async function fetchOneView({ slug, table, locale }: { slug: string; table: "Event" | "Tag"; locale: string }) {
    const options = {
        method: "GET",
        // url: "https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/Event/views/Event",
        // params: { where: `(Slug,eq,presence)` },
        headers: {
            "xc-token": process.env.NOCO_TOKEN!,
        },
        // next: { revalidate: 10 },
        caches: "no-cache",
    };

    const res = fetch(
        `https://noco-db-production-9ae6.up.railway.app/api/v1/db/data/noco/p_7sik6axwg0r1hr/${table}/views/${locale}/find-one?` +
            new URLSearchParams({
                where: `(Slug,eq,${slug})`,
                nested: "Tags",
            }),
        options,
    );

    return res;
}
