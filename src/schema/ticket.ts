import { decimal, integer, pgTable, serial } from "drizzle-orm/pg-core";
import { createdUpdatedFragment, descriptionShortFragment, titleFragment } from "./_fragments";

import { InferModel } from "drizzle-orm";

export const tickets = pgTable("nc_p7s6__Ticket", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    ...descriptionShortFragment,
    events: integer("Events"),
    cost: decimal("DurationOverride"),
    ...createdUpdatedFragment,
});
export type Ticket = InferModel<typeof tickets>;
