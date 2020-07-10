/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
	port: 8080,
	basePath: "/",
	ipWhitelist: [], 	// Set [] to allow all IP addresses
	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		{
			module: "currentweather",
			position: "bottom_left",
			config: {
				location: "Richmond, VA",
				locationID: "4781708", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c885fec96ffad83404202ee6068ca7d2"
			}
		},
		{
			module: "calendar",
			header: "Greg's Calendar",
			position: "top_center",
			config: {
				calendars: [
					{
						symbol: "calendar",
						url: "webcal://p44-caldav.icloud.com/published/2/MTA4NjQ3MzUyMTA4NjQ3M0nX6EeTxRO59dorTc67bm1WEyUGeWEdN2MqNgLZCqbi",
					}
				]
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				location: "Richmond, VA",
				locationID: "4781708", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c885fec96ffad83404202ee6068ca7d2"
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "MMM-HTMLSnippet",
			position: "top_bar",
			config: {
				html: `
				<link rel="stylesheet" type="text/css" href="css/main.css">
				<link rel="stylesheet" type="text/css" href="fonts/roboto.css">
				<style>body {margin:0px}</style>
				<script>
					document.addEventListener('DOMContentLoaded', function () {
						let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date()).getDay()];
						document.getElementsByTagName("body")[0].innerHTML = '<h1 class="bright" style="text-align: center; position: relative; bottom: 0px; margin: 5% auto;">'+dow+'</h1>';
					});
				</script>`,
				// width: "1px",
				//height: "128px",
				backgroundColor: "#fff",
				updateInterval: 3600000,
			},
		},
		{
			module: "clock",
			position: "middle_center",
			config: {
				timeFormat: 12, //	Use 12 or 24 hour format.
				displaySeconds: true, // Display seconds. Possible values: *true* or false
				showPeriod: true, // Show the period (am/pm) with 12 hour format. *true* or false
				showPeriodUpper: false, // Show the period (AM/PM) with 12 hour format as uppercase. true or *false*
				clockBold: false, // Remove the colon and bold the minutes to make a more modern look. true or *false*
				showDate: true, // Turn off or on the Date section. *true* or false
				showWeek: true, // Turn off or on the Week section. true or *false*
				showSunTimes: false, // Turn off or on the section showing sunrise and sunset times (digital clock only). true or *false*
				showMoonTimes: false, //	Turn off or on the section showing moonrise and moonset times (digital clock only).
				//lat:	Latitude for sun/moon calculations. Default value: 47.630539
				//lon:	Longitude for sun/moon calculations. Default value: -122.344147
				dateFormat: "dddd, LL", //	Configure the date format as you like. Default value: "dddd, LL"
				displayType: "both", // Display a *digital*, analog, both.
				analogSize: "200PX", // Specific to the analog clock. Defines how large the analog display is. Default 200px
				analogFace: "simple", // Specific to the analog clock. Specifies which clock face to use. *simple*, none, face-000 ... face-012
				secondsColor: "#800", // Specific to the analog clock. Specifies what color to make the 'seconds' hand.
				analogPlacement: "bottom", // Specific to the analog clock. (requires displayType set to 'both') Specifies where the analog clock is in relation to the digital clock, top, right, *bottom*, or left
				analogShowDate: "top", // Specific to the analog clock. If the clock is used as a separate module and set to analog only, this configures whether a date is also displayed with the clock. false, *top*, bottom
				timezone: "America/New_York", // Specific a timezone to show clock. https://momentjs.com/timezone/docs/#/data-formats/packed-format/
			}
		},

		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
		// {
		// 	module: 'MMM-BinaryClock',
		// 	position: "top_center",

		// },
		// {
		// 	module: "MMM-HTMLSnippet",
		// 	position: "bottom_center",
		// 	config: {
		// 		html: `<script>document.location='https://reelheroes.net';</script>`, //insert your script or html codes here.
		// 		width: "600px",
		// 		height: "300px",
		// 		backgroundColor: "#888",
		// 		updateInterval: 60000,
		// 	},
		// },
	]
};

// "top_bar", 
// "top_left", 
// "top_center", 
// "top_right", 

// "upper_third", 
// "middle_center", 
// "lower_third", 

// "bottom_left", 
// "bottom_center", 
// "bottom_right", 
// "bottom_bar", 

// "fullscreen_above", 
// "fullscreen_below"

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
