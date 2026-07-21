import { apiClient } from "./client";

interface HealthResponse {
	status: string;
}

export function checkApiHealth() {
	return apiClient<HealthResponse>("/health");
}
