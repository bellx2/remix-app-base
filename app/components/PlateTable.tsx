import { Table } from "antd";
import dayjs from "dayjs";
import { type lprlogs } from "@prisma/client";

export default function PlateTable({ items, onRowAction }) {
	const columns = [
		{
			title: "日付",
			dataIndex: "created_at",
			key: "created_at",
			render: (r) => <>{dayjs(r).format("YYYY/MM/DD HH:mm:ss")}</>,
			width: 200,
		},
		{ title: "車番", dataIndex: "plate", key: "plate" },
		{ title: "カメラ", dataIndex: "device", key: "device" },
	];
	return (
		<>
			<Table
				columns={columns}
				dataSource={items}
				size="small"
				onRow={(record, rowIndex) => {
					return {
						onClick: () => {
							console.log(record, rowIndex);
							onRowAction(record.id);
						},
					};
				}}
			/>
			{/* <Table
				aria-label="Detected PlateList table"
				onRowAction={(rows) => onRowAction(rows)}
			>
				<TableHeader>
					<TableColumn key="created_at">日付</TableColumn>
					<TableColumn key="plate">車番</TableColumn>
					<TableColumn key="device">カメラ</TableColumn>
				</TableHeader>
				<TableBody items={items} emptyContent={"データが見つかりません."}>
					{(item) => (
						<TableRow key={item.id}>
							<TableCell>
								{dayjs(item.created_at)
									.subtract(9, "hour")
									.format("YYYY/MM/DD HH:mm:ss")}
							</TableCell>
							<TableCell>{item.plate}</TableCell>
							<TableCell>{item.device}</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table> */}
		</>
	);
}
