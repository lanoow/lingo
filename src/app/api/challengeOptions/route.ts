import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { getIsAdmin } from "@/lib/admin";
import { challengeOptions } from "@/db/schema";

export async function GET() {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const data = await db.query.challengeOptions.findMany();

	return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const body = await req.json();

	const data = await db.insert(challengeOptions).values({
		...body,
	}).returning();

	return NextResponse.json(data[0], { status: 200 });
}
