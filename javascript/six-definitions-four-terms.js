"use strict";
let 	a = ["definition A", "term A", "definition B", "term B", "definition C", "term C", "definition D", "term D", "definition E", "term E", "definition F", "term F"];
function randomTerms(arr, qua) {
	let arrayTerms = arr, quantityDef = qua, i = 0, j = 0, k = 0, def = [], term = [], rand = [], r;
	
	while (i < arrayTerms.length) {
		if (i % 2) {
			term.push(arrayTerms[i])
		}
		else {
			def.push(arrayTerms[i])
		}
		i += 1;
	}
	
	while (j < 10e3) {
		r = Math.floor(Math.random() * def.length);
		if (rand.includes(def[r]) == false) {
			if (rand.length < quantityDef) {
				rand.push(def[r]);
				rand.push([term[r]]);
			}
		}
		j += 1;
	}
	
	while (k < rand.length) {
		if (k % 2) {
			let u = 0;
			while (u < 10e3) {
				r = Math.floor(Math.random() * term.length);
				if (rand[k].includes(term[r]) == false) {
					if (rand[k].length < 4) {
						rand[k].push(term[r]);
					}
				}
				u += 1;
			}
			rand[k].sort();
		}
		k += 1;
	}
	console.log(rand)
}
randomTerms(a, a.length);
