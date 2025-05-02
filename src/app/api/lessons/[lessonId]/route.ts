import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: { lessonId: number } },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { lessonId } = params;

	const data = await db.query.lessons.findFirst({
		where: eq(lessons.id, lessonId),
	});

	if (!data) {
		return new NextResponse("Lesson not found", { status: 404 });
	}

	return NextResponse.json(data, { status: 200 });
}

export async function PUT(
	req: Request,
	{ params }: { params: { lessonId: number } },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { lessonId } = params;

	const body = await req.json();

	if (!body) {
		return new NextResponse("Invalid body", { status: 400 });
	}

	const data = await db
		.update(lessons)
		.set({
			...body,
		})
		.where(eq(lessons.id, lessonId))
		.returning();

	if (!data) {
		return new NextResponse("Lesson not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}

export async function DELETE(
	req: Request,
	{ params }: { params: { lessonId: number } },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { lessonId } = params;

	const data = await db
		.delete(lessons)
		.where(eq(lessons.id, lessonId))
		.returning();

	if (!data) {
		return new NextResponse("Lesson not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}
