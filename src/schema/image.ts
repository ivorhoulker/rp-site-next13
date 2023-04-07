import { createdUpdatedFragment, titleFragment } from "./_fragments";
import { date, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const images = pgTable("nc_p7s6__Image", {
    id: serial("id").primaryKey(),
    ...titleFragment,
    file: text("File"),
    captureDate: date("CaptureDate"),
    copyrightEn: varchar("CopyrightEn"),
    copyrightZh: varchar("CopyrightZh"),
    lens: varchar("Lens"),
    rating: varchar("Rating"),
    rawFileName: varchar("RawFileName"),
    tags: integer("Tags"),
    entities: integer("Entities"),
    events: integer("Events"),
    ...createdUpdatedFragment,
});
export type Image = InferModel<typeof images>;
