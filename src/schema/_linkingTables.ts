import { integer, pgTable } from "drizzle-orm/pg-core";

import { entities } from "./entities";
import { entityRoles } from "./entityRoles";
import { events } from "./events";
import { roles } from "./roles";

export const eventsToEntityRoles = pgTable("nc_p7s6___EventsToEntityRoles", {
    eventId: integer("table2_id")
        .notNull()
        .references(() => events.id),
    entityRoleId: integer("table1_id")
        .notNull()
        .references(() => entityRoles.id),
});

// nc_p7s6___nc_m2m_imf18sqj7y
export const entityRolesToEntities = pgTable("nc_p7s6___EntityRolesToEntities", {
    entityId: integer("table2_id")
        .notNull()
        .references(() => entities.id),
    entityRoleId: integer("table1_id")
        .notNull()
        .references(() => entityRoles.id),
});

// nc_p7s6___nc_m2m_nblve_2ork
export const entityRolesToRoles = pgTable("nc_p7s6___EntityRolesToRoles", {
    roleId: integer("table2_id")
        .notNull()
        .references(() => roles.id),
    entityRoleId: integer("table1_id")
        .notNull()
        .references(() => entityRoles.id),
});
