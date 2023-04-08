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
