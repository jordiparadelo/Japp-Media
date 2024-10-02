import ClientDashboard from "@/components/ui/ClientDashboard";
import { Suspense } from "react";

export default function ClientesPage() {
	return (
		<div>
			<h1>Clientes</h1>
			<Suspense fallback={<div>Cargando...</div>}>
				<ClientDashboard />
			</Suspense>
		</div>
	);
}
