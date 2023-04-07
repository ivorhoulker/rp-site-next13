import { entityRolesToEntities, entityRolesToRoles, eventsToEntityRoles } from "../schema/_linkingTables";

import { eq } from "drizzle-orm/expressions";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { jsonAggBuildObject } from "../helpers/jsonAggBuildObject";
import { entities } from "../schema/entities";
import { entityRoles } from "../schema/entityRoles";
import { events } from "../schema/events";
//@ts-ignore
import { placeholder } from "drizzle-orm";
import { roles } from "../schema/roles";

export async function eventQuery({ db, entityId }: { db: PostgresJsDatabase; entityId: number }) {
    const query = db
        .select({
            events,
            expand: {
                entityRoles: jsonAggBuildObject({
                    ...entityRoles,
                    ...entities,
                    entitySlug: entities.slug,
                    roleTitleEn: roles.titleEn,
                    roleTitleZh: roles.titleZh,
                }),
            },
        })
        .from(events)
        .where(eq(events.id, placeholder("id")))
        .leftJoin(eventsToEntityRoles, eq(events.id, eventsToEntityRoles.eventId))
        .leftJoin(entityRoles, eq(eventsToEntityRoles.entityRoleId, entityRoles.id))
        .leftJoin(entityRolesToEntities, eq(entityRoles.id, entityRolesToEntities.entityRoleId))
        .leftJoin(entities, eq(entities.id, entityRolesToEntities.entityId))
        .leftJoin(entityRolesToRoles, eq(entityRoles.id, entityRolesToRoles.entityRoleId))
        .leftJoin(roles, eq(roles.id, entityRolesToRoles.roleId))
        .groupBy(events.id);

    const res = query.execute({ id: entityId });
    return res;
}
