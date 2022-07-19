function duplicateEncode(word) {
	word = word.toLowerCase();
	// разбить строку на буквы

	let length = word.length;
	console.log(word.length);
	let wordArray = word.split("");
	console.log(wordArray);
	let wordArray1 = [];

	for (let k = 0; k < length; k += 1) {
		console.log(`k= ${k}`);
		wordArray1[k] = "(";
		for (let i = 0; i < length; i += 1) {
			console.log(`i= ${i}`);
			console.log(`arrayk= ${wordArray[k]}`);
			console.log(`arrayi= ${wordArray[i]}`);
			if (i === k) {
				console.log("tyu");
				continue;
			}

			if (wordArray[k] === wordArray[i]) {
				wordArray1[k] = ")";
				break;
			}
			console.log(wordArray[k]);
		}
	}

	return wordArray1.join("");
}

console.log(duplicateEncode("resede"));
// console.log(wordArray1.split(""));
