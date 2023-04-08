import { NextResponse } from "next/server";
import { getBaseUrl } from "../../helpers/getBaseUrl";

export async function GET(request: Request, { params }: { params: { locale: string } }) {
    // const locale = params?.locale;
    // if (!locale) {
    //     return new Response(
    //         JSON.stringify({ error: `You must navigate to a valid locale: /en or /zh are currently supported.` }),
    //         {
    //             status: 404,
    //         },
    //     );
    // }
    // if (locale !== "en" && locale !== "zh")
    //     return new Response(
    //         JSON.stringify({ error: `/${locale} is not a valid locale: /en or /zh are currently supported.` }),
    //         {
    //             status: 404,
    //         },
    //     );
    // const { searchParams } = new URL(request.url);
    // const res = await fetchOneView({ slug: "presence-phase-2", table: "Event", locale });

    return NextResponse.redirect(`${getBaseUrl()}/api/en`);
}
