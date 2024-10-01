import type { MetaFunction } from "@remix-run/node";
import { json, LoaderFunction } from "@remix-run/node";
import { Button, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Post, PrismaClient } from "@prisma/client";
import { useLoaderData, useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "LPR Dashboard" },
		{ name: "description", content: "LPR Dashbord by EyeTech" },
	];
};
export const loader: LoaderFunction = async () => {
	const prisma = new PrismaClient();
	const devices = await prisma.devices.findMany();
	return json(devices);
};

export default function Index() {
	const devices = useLoaderData<Post[]>();
	const navigate = useNavigate();
	const columns: TableProps<Post>["columns"] = [
		{ title: "シリアル番号", dataIndex: "serial", key: "serial", width: 200 },
		{
			title: "ステータス",
			dataIndex: "status",
			key: "status",
			width: 100,
			render: (r) => (
				<>
					{" "}
					{r === 0 ? (
						<Tag color="red">停止</Tag>
					) : r === 1 ? (
						<Tag color="green">稼働中</Tag>
					) : null}{" "}
				</>
			),
		},
		{ title: "カメラ名称", dataIndex: "name", key: "name" },
	];
	// console.log(devices);
	return (
		<div className="font-sans p-4">
			<Button>
				<i className="ri-admin-line ri-lg" /> Button
			</Button>
			<Table
				dataSource={devices}
				columns={columns}
				size="small"
				rowKey="id"
				onRow={(record, rowIndex) => {
					return {
						onClick: () => {
							console.log(record, rowIndex);
							navigate(`/device/${record.serial}`);
						},
					};
				}}
			/>
		</div>
	);
}
