/** Return a http response error if there is a problem with the locale */
export const getLocaleErrorResponse = (locale?: string) => {
    if (!locale) {
        return new Response(
            JSON.stringify({
                error: `You must navigate to a valid locale: /en for English or /zh for Chinese are currently supported.`,
            }),
            {
                status: 404,
            },
        );
    }
    if (locale !== "en" && locale !== "zh")
        return new Response(
            JSON.stringify({
                error: `/${locale} is not a valid locale: /en for English or /zh for Chinese are currently supported.`,
            }),
            {
                status: 404,
            },
        );
    return null;
};
