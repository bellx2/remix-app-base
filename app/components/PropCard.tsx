import { Card, Button, Input, Form } from "antd";

export default function PropCard({ items, clickClose }) {
	const columns = [
		{ title: "ID", dataIndex: "id", key: "id" },
		{ title: "Device", dataIndex: "device", key: "device" },
		{ title: "Plate", dataIndex: "plate", key: "plate" },
		{ title: "Created At", dataIndex: "created_at", key: "created_at" },
	];
	return (
		<div>
			<Card className="m-5">
				<h2>PropCard</h2>
				{/* <div>{JSON.stringify(items)}</div> */}
				<Form
					name="layout-multiple-horizontal"
					layout="horizontal"
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 20 }}
				>
					<Form.Item label="カメラID">
						<Input value={items.device} />
					</Form.Item>
					<Form.Item label="車番">
						<Input value={items.plate} />
					</Form.Item>
					<Form.Item label="日付">
						<Input value={items.created_at} />
					</Form.Item>
					<Button type="primary" onClick={() => clickClose()}>
						Close
					</Button>
				</Form>
			</Card>
		</div>
	);
}
