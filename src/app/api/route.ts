import { getBaseUrl } from "@/helpers/getBaseUrl";
import { NextResponse } from "next/server";
export const runtime = "experimental-edge";
export async function GET(_request: Request, { params: _params }: { params: { locale: string } }) {
    return NextResponse.redirect(`${getBaseUrl()}/api/en`);
}
