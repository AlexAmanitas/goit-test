function duplicateEncode(word) {
	word = word.toLowerCase();
	// разбить строку на буквы

	let length = word.length;
	console.log(word.length);
	let wordArray = word.split("");
	console.log(wordArray);
	let wordArray1 = wordArray;

	for (let k = 0; k < length; k += 1) {
		console.log(`k= ${k}`);

		for (let i = 0; i < length; i += 1) {
			console.log(`i= ${i}`);
			console.log(`arrayk= ${wordArray[k]}`);
			console.log(`arrayi= ${wordArray[i]}`);
			if (i === k) {
				continue;
			}
			wordArray1[k] = "(";
			if (wordArray[k] === wordArray[i]) {
				wordArray1[k] = ")";
				// console.log(wordArray[k]);
			}
		}
	}
	return wordArray1.toString();
	// сравнить первую букву со всеми, если есть совпадение, то )
	//иначе (
	//
	//сравнить 2ю букву со всеми, если есть совпадение, то )
	// иначе(  и т.д.
	// каждый раз складывать строку из ( и )
}

console.log(duplicateEncode("diin"));
