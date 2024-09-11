import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nextui-org/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="font-sans p-4">
			<h1>Welcome to Remix!!!</h1>
			<Button color="primary">
				<i className="ri-admin-line ri-lg" /> Button
			</Button>
			<ul className="list-disc mt-4 pl-6 space-y-2">
				<li>
					<a
						className="text-blue-700 underline visited:text-purple-900"
						target="_blank"
						href="https://remix.run/start/quickstart"
						rel="noreferrer"
					>
						<Button color="primary">5m Quick Start</Button>
					</a>
				</li>
				<li>
					<a
						className="text-blue-700 underline visited:text-purple-900"
						target="_blank"
						href="https://remix.run/start/tutorial"
						rel="noreferrer"
					>
						<Button color="primary">30m Tutorial</Button>
					</a>
				</li>
				<li>
					<a
						className="text-blue-700 underline visited:text-purple-900"
						target="_blank"
						href="https://remix.run/docs"
						rel="noreferrer"
					>
						<Button color="primary">Remix Docs</Button>
					</a>
				</li>
			</ul>
		</div>
	);
}
