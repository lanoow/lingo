import { redirect } from "next/navigation";
import { getIsAdmin } from "@/lib/admin";
import AdminApp from "./export";

export default async function AdminPage() {
	const isAdmin = getIsAdmin();

	if (!isAdmin) {
		redirect("/");
	}

	return <AdminApp />;
}