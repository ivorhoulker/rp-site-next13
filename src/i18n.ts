import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: headers().get("x-time-zone") ?? "Asia/Hong_Kong",
}));
