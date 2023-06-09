import { cache } from "react";

export const getBaseUrl = cache(() =>
    process.env.VERCEL_URL ? process.env.VERCEL_URL : `http://localhost:${process.env.PORT ?? 3000}`,
);
