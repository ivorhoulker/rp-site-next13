import "server-only";

import { getEntries } from "@/helpers/getEntries";
import { getBaseUrl } from "../../../helpers/getBaseUrl";
import { getLocaleErrorResponse } from "../../../helpers/getLocaleErrorResponse";
import { removeLanguageFromEndOfString } from "../../../helpers/removeLanguageFromKey";
import { toLowerFirst } from "../../../helpers/toLowerFirst";
import { fetchOneView } from "../_nocodb/fetchOneView";

export type EventTranslatedKeys = {
    title: string | null;
    subtitle: string | null;
    descriptionShort: string | null;
    description: string | null;
    statement: string | null;
};

export type Attachment = {
    url: string;
    mimetype: string;
    size: number;
    title: string;
};
export type Event = {
    externalUrl: string | null;
    duration: number | null;

    keyVisual?: {
        file: Attachment | null;
        url: string;
        mimetype: string;
        size: number;
        title: string;
        objectPosition: string;
        blurHash: string | null;
        width: number | null;
        height: number | null;
    };
} & EventTranslatedKeys;

export const runtime = "experimental-edge";

export async function GET(request: Request, { params }: { params: { locale: string } }) {
    const locale = params?.locale;

    const localeError = getLocaleErrorResponse(locale);
    if (localeError) return localeError;

    // const { searchParams } = new URL(request.url);
    console.log({ locale });
    const res = await fetchOneView({ slug: "presence-phase-2", table: "Event", locale });

    const json = await res.json();
    let keyVisualObject: Record<string, string> = {};
    const transformed = getEntries(json).reduce((prev, [key, value], idx, arr) => {
        key = removeLanguageFromEndOfString(key);
        key = toLowerFirst(key);
        if (key.includes("keyVisual")) {
            const simpleKey = toLowerFirst(key.replace("keyVisual", ""));
            if (key === "keyVisualFile" && !!value[0]) {
                keyVisualObject = { ...keyVisualObject, ...value[0] };
            } else {
                keyVisualObject[simpleKey] = value;
            }
            return prev;
        }

        prev[key] = value;
        return prev;
    }, {} as Record<string, string | object>);
    transformed.keyVisual = keyVisualObject;
    console.log("transformed json", JSON.stringify(transformed));
    return new Response(JSON.stringify(transformed), { status: 200 });
}

export async function fetchEvent(locale: string) {
    const res = await fetch(`${getBaseUrl()}/api/${locale}`);
    const json = await res.json();
    return json as Event;
}
