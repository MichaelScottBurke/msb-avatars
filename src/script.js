import { fetchData } from './fetchData.js';
import { ngForJs } from './ngForJs.js';

(async function () {
	const itemList = document.querySelector("#item-list");

	// use fetchData module to load data from json file
	try {
		itemList.items = await fetchData('./people-data.json');
	} catch (error) {
		console.error("Failed to fetch json items:", error);
		return;
	}

	async function init() {
		console.log('people data loaded');
		ngForJs(itemList);
	}

	if (document.readyState !== "loading") {
		init();
	} else {
		document.addEventListener("DOMContentLoaded", init);
	}
})();