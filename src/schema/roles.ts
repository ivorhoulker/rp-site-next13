import { createdUpdatedFragment, titleFragment } from "./_fragments";
import { pgTable, serial } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const roles = pgTable("nc_p7s6__Role", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    ...createdUpdatedFragment,
});

export type Role = InferModel<typeof roles>;
