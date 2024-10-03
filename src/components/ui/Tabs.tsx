"use client";

import { TabsProvider, useTabsContext } from "@/contexts/TabsContext";
import React, { Children } from "react";

export default function Tabs({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) {
	return (
		<TabsProvider>
			<div className={className}>{children}</div>
		</TabsProvider>
	);
}

// function TabsContent({ children }: { children: React.ReactNode }) {
// 	return <div>{children}</div>;
// }

Tabs.Link = TabsLink;
Tabs.Panels = TabsPanels;

function TabsLink({
	children,
	activeIndex,
	...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
	activeIndex: number;
}) {
	const { activeTab, setActiveTab } = useTabsContext();
	return (
		<button
			{...props}
			onClick={() => setActiveTab(activeIndex)}
			data-selected={activeTab === activeIndex}
		>
			{children}
		</button>
	);
}

function TabsPanels({
	children,
	...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
	const { activeTab } = useTabsContext();
	return (
		<>
			{Children.toArray(children).map((child, index) => (
				<div
					{...props}
					key={index}
					data-selected={activeTab === index}
				>
					{child}
				</div>
			))}
		</>
	);
}
