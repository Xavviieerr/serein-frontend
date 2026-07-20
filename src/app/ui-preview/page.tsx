"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/store";

export default function UiPreviewPage() {
	const isDarkMode = useStore((state) => state.isDarkMode);

	const toggleDarkMode = useStore((state) => state.toggleDarkMode);

	return (
		<main className="min-h-screen bg-background p-10">
			<section className="mx-auto max-w-3xl space-y-8">
				<div>
					<h1 className="text-3xl font-bold">Serein UI Preview</h1>

					<p className="text-muted-foreground">
						Testing design system components
					</p>
				</div>

				<div className="rounded-lg bg-surface-container p-8 shadow-sm">
					<h2 className="mb-4 text-lg font-semibold">Buttons</h2>

					<div className="flex flex-wrap gap-4">
						<Button>Generate Reflection</Button>

						<Button variant="secondary">Secondary</Button>

						<Button variant="outline">Outline</Button>

						<Button variant="ghost">Ghost</Button>

						<Button variant="destructive">Delete</Button>
					</div>
				</div>
				<div className="p-10">
					<p>
						Dark mode:
						{isDarkMode ? " ON" : " OFF"}
					</p>

					<button onClick={toggleDarkMode}>Toggle</button>
				</div>
			</section>
		</main>
	);
}
