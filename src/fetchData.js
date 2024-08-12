// Utility function to fetch JSON data
export async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching JSON data:', error);
		throw error;  // Allows caller to handle the error
	}
}