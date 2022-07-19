const sq = 122;
function findNextSquare(sq) {
	let a = Math.sqrt(sq);
	console.log(a);
	Number.isInteger(a) ? (a = Math.pow(a + 1, 2)) : (a = -1);
	// Return the next square if sq is a perfect square, -1 otherwise
	return a;
}
console.log(findNextSquare(sq));
