var count = setInterval(function () {
	var countdownNow = countdown(Date.now(), new Date(2015, 03, 03), countdown.ALL).toString();
	console.log(countdownNow);
	$("#center-div p").html(countdownNow);
}, 1000);



