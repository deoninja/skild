// import ClerkProvider from "../integrations/clerk/provider";
// import { ClerkProvider } from "@clerk/tanstack-react-start";

import { ClerkProvider } from "@clerk/tanstack-react-start";
import { PostHogProvider } from "@posthog/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
	useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Crosshair from "#/components/Crosshair";
import Navbar from "#/components/Navbar";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Skild - The Registry for Agentic Intelligence",
			},
			{
				name: "description",
				content:
					"Discover, publish, and operate reusable agent capabilities from a route-driven workspace.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: () => (
		<div className="flex flex-col items-center justify-center py-32 gap-4">
			<h1 className="text-4xl font-bold">404</h1>
			<p className="text-muted-foreground">Page not found</p>
		</div>
	),
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const routerState = useRouterState();
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				<PostHogProvider
					apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN}
					options={{
						api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
						defaults: "2026-01-30",
					}}
				>
				<ClerkProvider routerContext={routerState}>
					<div id="root-layout">
						<header>
							<div className="frame">
								<Navbar />
								<Crosshair />
								<Crosshair />
							</div>
						</header>
						<main>
							<div className="frame">{children}</div>
						</main>
					</div>
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
					<Scripts />
				</ClerkProvider>
				</PostHogProvider>
			</body>
		</html>
	);
}
