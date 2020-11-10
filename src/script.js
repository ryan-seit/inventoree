// function start() {
// 	// Initializes the client with the API key and the Translate API.
// 	gapi.client
// 		.init({
// 			apiKey: process.env.REACT_APP_API_KEY,
// 			discoveryDocs: [
// 				"https://www.googleapis.com/discovery/v1/apis/translate/v2/rest",
// 			],
// 		})
// 		.then(function () {
// 			// Executes an API request, and returns a Promise.
// 			// The method name `language.translations.list` comes from the API discovery.
// 			return gapi.client.language.translations.list({
// 				q: "hello world",
// 				source: "en",
// 				target: "de",
// 			});
// 		})
// 		.then(
// 			function (response) {
// 				console.log(response.result.data.translations[0].translatedText);
// 			},
// 			function (reason) {
// 				console.log("Error: " + reason.result.error.message);
// 			}
// 		);
// }

// // Loads the JavaScript client library and invokes `start` afterwards.
// gapi.load("client", start);

// // 1. Load the JavaScript client library.
// gapi.load("client", init);

// async function init() {
// 	// 2. Initialize the JavaScript client library.
// 	await gapi.client.init({
// 		discoveryDocs: ["https://discovery.googleapis.com/$discovery/rest"],
// 	});
// 	start();
// }

// const API_QUERY = "android";
// async function start() {
// 	try {
// 		// 3. Make the API request.
// 		const apiRequest = await gapi.client.discovery.apis.list();
// 		const result = JSON.parse(apiRequest.body);

// 		// 4. Log the results of the API request
// 		const androidAPIs = result.items.filter(api =>
// 			api.id.startsWith(API_QUERY)
// 		);
// 		const androidAPITitles = androidAPIs.map(api => api.title);
// 		const uniqueAndroidAPITitles = [...new Set(androidAPITitles).values()];
// 		document.getElementById("result").innerHTML = `${
// 			uniqueAndroidAPITitles.length
// 		} APIs:<br>${uniqueAndroidAPITitles.join("<br/> ")}`;
// 	} catch (e) {
// 		console.error(e);
// 	}
// }
