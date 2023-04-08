import { fetchFromNoco } from "./fetchFromNoco";

export async function fetchOneView({ slug, table, locale }: { slug: string; table: "Event" | "Tag"; locale: string }) {
    const path = `${table}/views/${locale}/find-one`;

    const params = {
        where: `(Slug,eq,${slug})`,
        nested: "Tags",
    };

    return fetchFromNoco({ path, params, options: { next: { revalidate: 100 } } });
}
