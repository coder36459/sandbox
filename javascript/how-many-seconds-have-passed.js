let seconds = 0;
const s = "How many seconds have passed since you started this program?\n";
function count() {
	seconds += 1;
	console.log(s + seconds + "\n\nPress Ctrl+C to exit");
	function c() {
		console.clear();
		}
	setInterval(c,1000);
	}
setInterval(count,1000);
