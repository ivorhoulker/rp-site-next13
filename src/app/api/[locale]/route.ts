import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eventQuery } from "../../../queries/eventQuery";

// export const runtime = "experimental-edge";
const queryConnection = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryConnection);
export async function GET(request: Request, context: { params: { locale: string } }) {
    console.log("request", context);
    const res = await eventQuery({ db, entityId: 1 });
    // console.log("res", JSON.stringify(res, null, 2));
    return new Response(JSON.stringify(res));
}
