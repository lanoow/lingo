import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ challengeId: number }> },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { challengeId } = await params;

	const data = await db.query.challenges.findFirst({
		where: eq(challenges.id, challengeId),
	});

	if (!data) {
		return new NextResponse("Challenge not found", { status: 404 });
	}

	return NextResponse.json(data, { status: 200 });
}

export async function PUT(
	req: Request,
	{ params }: { params: Promise<{ challengeId: number }>},
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { challengeId } = await params;

	const body = await req.json();

	if (!body) {
		return new NextResponse("Invalid body", { status: 400 });
	}

	const data = await db
		.update(challenges)
		.set({
			...body,
		})
		.where(eq(challenges.id, challengeId))
		.returning();

	if (!data) {
		return new NextResponse("Challenge not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}

export async function DELETE(
	req: Request,
	{ params }: { params: Promise<{ challengeId: number }>},
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { challengeId } = await params;

	const data = await db
		.delete(challenges)
		.where(eq(challenges.id, challengeId))
		.returning();

	if (!data) {
		return new NextResponse("Challenge not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}
