import { date, integer, pgTable, serial } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";
import { createdUpdatedFragment } from "./_fragments";

export const ticketedDates = pgTable("nc_p7s6__TicketedDate", {
    id: serial("id").primaryKey(),
    dateTime: date("DateTime"),
    durationOverride: integer("DurationOverride"),

    ...createdUpdatedFragment,
});

export type TicketedDate = InferModel<typeof ticketedDates>;
