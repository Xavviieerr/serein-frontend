interface EmptyStateProps {
	title: string;
	description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
	return (
		<div
			className="
				flex
				flex-col
				items-center
				justify-center
				gap-2
				p-8
				text-center
			"
		>
			<h2 className="font-heading text-lg font-bold">{title}</h2>

			{description && <p className="text-secondary">{description}</p>}
		</div>
	);
}
