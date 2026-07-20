const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
	throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export async function apiClient(endpoint: string, options?: RequestInit) {
	const response = await fetch(`${API_URL}${endpoint}`, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	});

	if (!response.ok) {
		throw new Error("API request failed");
	}

	return response.json();
}
