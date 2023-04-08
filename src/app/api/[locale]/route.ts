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
export const runtime = "experimental-edge";

export async function fetchFromNoco({
    path,
    params,
    options,
}: {
    path: string;
    params?: Record<string, string>;
    options?: RequestInit;
}) {
    const combinedOptions = {
        method: "GET",
        headers: {
            "xc-token": process.env.NOCO_TOKEN!,
        },
        ...options,
    };
    const suffix = params ? `?${new URLSearchParams(params)}` : "";
    return fetch(`${process.env.NOCO_URL}/${path}${suffix}`, combinedOptions);
}

export async function GET(request: Request, { params }: { params: { locale: string } }) {
    const locale = params?.locale;
    if (!locale) {
        return new Response(
            JSON.stringify({ error: `You must navigate to a valid locale: /en or /zh are currently supported.` }),
            {
                status: 404,
            },
        );
    }
    if (locale !== "en" && locale !== "zh")
        return new Response(
            JSON.stringify({ error: `/${locale} is not a valid locale: /en or /zh are currently supported.` }),
            {
                status: 404,
            },
        );
    const { searchParams } = new URL(request.url);
    const res = await fetchOneView({ slug: "presence-phase-2", table: "Event", locale });

    return res;
}

export async function fetchOneView({ slug, table, locale }: { slug: string; table: "Event" | "Tag"; locale: string }) {
    const path = `${table}/views/${locale}/find-one`;

    const params = {
        where: `(Slug,eq,${slug})`,
        nested: "Tags",
    };

    return fetchFromNoco({ path, params, options: { next: { revalidate: 10 } } });
}
