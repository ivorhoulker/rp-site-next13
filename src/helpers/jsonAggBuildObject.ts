import { AnyColumn, InferColumnsDataTypes, SQL, sql } from 'drizzle-orm';
import { PgTable, TableConfig } from 'drizzle-orm/pg-core';

// ⚠️ Potential for SQL injections, so you shouldn't allow user-specified key names
export function jsonAggBuildObject<
  T extends Record<string, AnyColumn> | PgTable<TableConfig>,
>(shape: T) {
  const chunks: SQL[] = [];

  Object.entries(shape).forEach(([key, value]) => {
    if (chunks.length > 0) {
      chunks.push(sql.raw(`,`));
    }
    chunks.push(sql.raw(`'${key}',`));
    chunks.push(sql`${value}`);
  });

  return sql<
    //@ts-ignore
    InferColumnsDataTypes<T>[]
  >`coalesce(json_agg(json_build_object(${sql.fromList(chunks)})), '[]')`;
}
