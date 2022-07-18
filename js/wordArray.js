function duplicateEncode(word) {
	word = word.toLowerCase();
	// разбить строку на буквы

	let length = word.length;
	console.log(word.length);
	let wordArray = word.split("");
	console.log(wordArray, length);
	for (let k = 0; k < length; k += 1) {
		console.log(k);
		for (let i = k; i < length; i += 1) {
			if (wordArray[k] === wordArray[i]) {
				wordArray[k] = ")";
				console.log wordArray[k];
			} else {
				wordArray[k] = "(";
			}
		}
	}
	return wordArray.toString();
	// сравнить первую букву со всеми, если есть совпадение, то )
	//иначе (
	//
	//сравнить 2ю букву со всеми, если есть совпадение, то )
	// иначе(  и т.д.
	// каждый раз складывать строку из ( и )
}

console.log(duplicateEncode("din"));
