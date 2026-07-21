"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	state: ErrorBoundaryState = {
		hasError: false,
	};

	static getDerivedStateFromError(): ErrorBoundaryState {
		return {
			hasError: true,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Application error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex min-h-screen items-center justify-center">
					<div className="text-center">
						<h1 className="font-heading text-xl font-bold">
							Something went wrong
						</h1>

						<p className="text-secondary">
							Please refresh the page and try again.
						</p>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
