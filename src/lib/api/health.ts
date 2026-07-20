import { apiClient } from "./client";

export function checkApiHealth() {
	return apiClient("/health");
}
