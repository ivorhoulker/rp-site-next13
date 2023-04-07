import {
    createdUpdatedFragment,
    descriptionShortFragment,
    keyVisualFragment,
    subtitleFragment,
    titleFragment,
} from "./_fragments";
import { date, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";
import { venues } from "./venues";

export const posts = pgTable("nc_p7s6__Post", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    ...subtitleFragment,
    ...descriptionShortFragment,
    bodyEn: text("BodyEn"),
    bodyZh: text("BodyZh"),
    ...keyVisualFragment,
    statementEn: text("StatementEn"),
    statementZh: text("StatementZh"),
    publicationEn: varchar("PublicationEn"),
    publicationZh: varchar("PublicationZh"),
    publicationDate: date("PublicationDate"),
    venue: integer("Venue").references(() => venues.id),
    duration: integer("Duration"),
    externalUrl: varchar("ExternalUrl"),
    publicationImage: text("PublicationImage"),
    category: text("Category"),
    authors: integer("Authors"),
    events: integer("Events"),
    tags: integer("Tags"),
    ...createdUpdatedFragment,
});

export type Post = InferModel<typeof posts>;
