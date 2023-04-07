import { createdUpdatedFragment, titleFragment } from "./_fragments";
import { integer, pgTable, serial } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const tags = pgTable("nc_p7s6__Tag", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    images: integer("Images"),
    events: integer("Events"),
    videos: integer("Videos"),
    posts: integer("Posts"),
    ...createdUpdatedFragment,
});
export type Tag = InferModel<typeof tags>;
