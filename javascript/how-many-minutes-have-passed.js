let seconds = 0;
let minutes = 0;
const s = "How many minutes have passed since you started this program?\n";
function count() {
	seconds += 1;
	if (seconds > 59) {
		minutes += 1;
		seconds = 0;
		}
	if (seconds < 10) {
		console.log(s + minutes + ":0" + seconds + "\n\nPress Ctrl+C to exit");
		}
	else {
		console.log(s + minutes + ":" + seconds + "\n\nPress Ctrl+C to exit");
		}
	function c() {
		console.clear();
		}
	setInterval(c,1000);
	}
setInterval(count,1000);
