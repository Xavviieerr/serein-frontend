interface ErrorStateProps {
	message: string;
}

export function ErrorState({ message }: ErrorStateProps) {
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
			<h2 className="font-heading text-lg font-bold text-error">
				Something went wrong
			</h2>

			<p className="text-secondary">{message}</p>
		</div>
	);
}
