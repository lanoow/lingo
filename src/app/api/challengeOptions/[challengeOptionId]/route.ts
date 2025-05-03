import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
	req: Request,
	{ params }: { params: Promise<{ challengeOptionId: number }>},
) => {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { challengeOptionId } = await params;

	const data = await db.query.challengeOptions.findFirst({
		where: eq(challengeOptions.id, challengeOptionId),
	});

	if (!data) {
		return new NextResponse("ChallengeOption not found", { status: 404 });
	}

	return NextResponse.json(data, { status: 200 });
}

export const PUT = async (
	req: Request,
	{ params }: { params: Promise<{ challengeOptionId: number }>},
) => {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { challengeOptionId } = await params;

	const body = await req.json();

	if (!body) {
		return new NextResponse("Invalid body", { status: 400 });
	}

	const data = await db
		.update(challengeOptions)
		.set({
			...body,
		})
		.where(eq(challengeOptions.id, challengeOptionId))
		.returning();

	if (!data) {
		return new NextResponse("ChallengeOption not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}

export const DELETE = async (
	req: Request,
	{ params }: { params: Promise<{ challengeOptionId: number }>},
) => {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { challengeOptionId } = await params;

	const data = await db
		.delete(challengeOptions)
		.where(eq(challengeOptions.id, challengeOptionId))
		.returning();

	if (!data) {
		return new NextResponse("ChallengeOption not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}
