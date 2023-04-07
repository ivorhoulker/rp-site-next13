import { createdUpdatedFragment, titleFragment } from "./_fragments";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const videos = pgTable("nc_p7s6__Video", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    url: varchar("Url"),
    aspect: text("Aspect"),
    tags: integer("Tags"),
    events: integer("Events"),
    entities: integer("Entities"),
    ...createdUpdatedFragment,
});

export type Video = InferModel<typeof videos>;
