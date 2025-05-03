import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ unitId: number }>},
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { unitId } = await params;

	const data = await db.query.units.findFirst({
		where: eq(units.id, unitId),
	});

	if (!data) {
		return new NextResponse("Unit not found", { status: 404 });
	}

	return NextResponse.json(data, { status: 200 });
}

export async function PUT(
	req: Request,
	{ params }: { params: Promise<{ unitId: number }>},
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { unitId } = await params;

	const body = await req.json();

	if (!body) {
		return new NextResponse("Invalid body", { status: 400 });
	}

	const data = await db
		.update(units)
		.set({
			...body,
		})
		.where(eq(units.id, unitId))
		.returning();

	if (!data) {
		return new NextResponse("Unit not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}

export async function DELETE(
	req: Request,
	{ params }: { params: Promise<{ unitId: number }>},
) {
	const isAdmin = await getIsAdmin();

	if (!isAdmin) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const { unitId } = await params;

	const data = await db
		.delete(units)
		.where(eq(units.id, unitId))
		.returning();

	if (!data) {
		return new NextResponse("Unit not found", { status: 404 });
	}

	return NextResponse.json(data[0], { status: 200 });
}
