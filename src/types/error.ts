export type ErrorCode =
	| "UNAUTHORIZED"
	| "NOT_FOUND"
	| "VALIDATION_ERROR"
	| "NETWORK_ERROR"
	| "UNKNOWN_ERROR";

export interface AppError {
	code: ErrorCode;
	message: string;
}
