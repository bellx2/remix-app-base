import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient, type lprlogs } from "@prisma/client";
import PlateTable from "~/components/PlateTable";
import PropCard from "~/components/PropCard";
import { useState, useEffect } from "react";
import { Card } from "antd";

export const loader: LoaderFunction = async ({ params }) => {
	const id = params.id;
	const prisma = new PrismaClient();
	const logs = await prisma.lprlogs.findMany({
		where: { device: id },
		orderBy: { recorded_at: "desc" },
		take: 100,
		select: {
			id: true,
			device: true,
			plate: true,
			image: true,
			created_at: true,
		},
	});
	return json({ id, logs });
};

export default function Device() {
	const { id, logs } = useLoaderData<{ id: string; logs: lprlogs[] }>();
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [previewData, setPreviewData] = useState<lprlogs | null>(null);

	useEffect(() => {
		if (selectedId) {
			const data = logs.find((log) => log.id === Number(selectedId));
			// console.log(data);
			setPreviewData(data);
		}
	}, [selectedId]);

	return (
		<>
			<h1>カメラID: {id}</h1>
			<br />
			<Card>
				<div className={`grid ${previewData ? "grid-cols-2" : "grid-cols-1"}`}>
					<div>
						<PlateTable
							items={logs}
							onRowAction={(key) => setSelectedId(key)}
						/>
					</div>
					{previewData && (
						<PropCard
							items={previewData}
							clickClose={() => setPreviewData(null)}
						/>
					)}
				</div>
			</Card>
		</>
	);
}
