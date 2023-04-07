import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";
import { createdUpdatedFragment } from "./_fragments";

export const entityRoles = pgTable("nc_p7s6__EntityRole", {
    id: serial("id").primaryKey(),
    slug: varchar("Slug"),
    suffixEn: varchar("SuffixEn"),
    suffixZh: varchar("SuffixZh"),
    ...createdUpdatedFragment,
});
export type EntityRole = InferModel<typeof entityRoles>;
