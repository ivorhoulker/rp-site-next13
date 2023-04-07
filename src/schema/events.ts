import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import {
    createdUpdatedFragment,
    descriptionFragment,
    descriptionShortFragment,
    keyVisualFragment,
    subtitleFragment,
    titleFragment,
} from "./_fragments";

import { InferModel } from "drizzle-orm";

export const events = pgTable("nc_p7s6__Event", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    ...subtitleFragment,
    ...descriptionFragment,
    ...descriptionShortFragment,
    ...keyVisualFragment,
    statementEn: text("StatementEn"),
    statementZh: text("StatementZh"),
    acknowledgementEn: text("AcknowledgementEn"),
    acknowledgementZh: text("AcknowledgementZh"),
    // venue: integer('Venue').references(() => venues.id),
    duration: integer("Duration"),
    externalUrl: varchar("ExternalUrl"),
    // tickets: integer("Tickets"),
    // parentEvents: integer("ParentEvents"),
    // childEvents: integer("ChildEvents"),
    ...createdUpdatedFragment,
});

export type Event = InferModel<typeof events>;
