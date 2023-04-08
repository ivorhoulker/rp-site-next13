const ms = require("ms");
const withNextIntl = require("next-intl/plugin")();
//hktdb.s3.ap-east-1.amazonaws.com
module.exports = withNextIntl({
    experimental: { appDir: true },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hktdb.s3.ap-east-1.amazonaws.com",
                port: "",
                pathname: "/nc/uploads/noco/hktdb/**",
            },
        ],
    },
    swcMinify: true,
    headers() {
        return [
            {
                // Cache all content pages
                source: "/((?!_next|favicon.ico).*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: [`s-maxage=` + ms("1d") / 1000, `stale-while-revalidate=` + ms("1y") / 1000].join(", "),
                    },
                ],

                // If you're deploying on a host that doesn't support the `vary` header (e.g. Vercel),
                // make sure to disable caching for prefetch requests of Server Components.
                // https://github.com/vercel/vercel/discussions/7612#discussioncomment-2434736
                missing: [
                    {
                        type: "header",
                        key: "Next-Router-Prefetch",
                    },
                ],
            },
        ];
    },
});
