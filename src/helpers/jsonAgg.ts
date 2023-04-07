import { InferModel, sql } from 'drizzle-orm';
import { PgTable, TableConfig } from 'drizzle-orm/pg-core';

//https://gist.github.com/rphlmr/0d1722a794ed5a16da0fdf6652902b15
function jsonAgg<Table extends PgTable<TableConfig>>(table: Table) {
  return sql<InferModel<Table>[]>`coalesce(json_agg(${table}), '[]')`;
}
