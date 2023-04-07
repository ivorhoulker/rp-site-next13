import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import {
    aboutFragment,
    createdUpdatedFragment,
    descriptionFragment,
    descriptionShortFragment,
    keyVisualFragment,
    subtitleFragment,
    titleFragment,
} from "./_fragments";

import { InferModel } from "drizzle-orm";

export const entities = pgTable("nc_p7s6__Entity", {
    id: serial("id").primaryKey(),
    slug: varchar("Slug"),
    ...titleFragment,
    ...subtitleFragment,
    ...descriptionShortFragment,
    ...descriptionFragment,
    ...aboutFragment,
    ...keyVisualFragment,
    category: text("Category"),
    gender: text("Gender"),
    externalUrl: varchar("ExternalUrl"),

    ...createdUpdatedFragment,
});

export type Entity = InferModel<typeof entities>;
