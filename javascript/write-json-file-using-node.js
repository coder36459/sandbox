const a = ["A", "B", "C"];
const b = JSON.stringify(a);
const fs = require("fs");
fs.writeFile("test.json", b, err => {if (err) throw error;});
