import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: { courseId: number } },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { courseId } = params;

	const data = await db.query.courses.findFirst({
		where: eq(courses.id, courseId),
	});

	if (!data) {
		return new NextResponse("Course not found", { status: 404 });
	}

	return NextResponse.json(data, { status: 200 });
}

export async function PUT(
	req: Request,
	{ params }: { params: { courseId: number } },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { courseId } = params;

	const body = await req.json();

	if (!body) {
		return new NextResponse("Invalid body", { status: 400 });
	}

	const data = await db
		.update(courses)
		.set({
			...body,
		})
		.where(eq(courses.id, courseId))
		.returning();

	if (!data) {
		return new NextResponse("Course not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: number } },
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { courseId } = params;

	const data = await db
		.delete(courses)
		.where(eq(courses.id, courseId))
		.returning();

	if (!data) {
		return new NextResponse("Course not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}
