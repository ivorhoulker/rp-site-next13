import { createdUpdatedFragment, titleFragment } from "./_fragments";
import { pgTable, serial } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const venues = pgTable("nc_p7s6__Venue", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    ...createdUpdatedFragment,
});

export type Venue = InferModel<typeof venues>;
