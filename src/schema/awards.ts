import { createdUpdatedFragment, titleFragment } from "./_fragments";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const awards = pgTable("nc_p7s6__Award", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    url: varchar("Url"),
    nominees: integer("Nominees"),
    winners: integer("Winners"),
    awardedBy: integer("AwardedBy"),
    year: integer("Year"),
    ...createdUpdatedFragment,
});

export type Award = InferModel<typeof awards>;
