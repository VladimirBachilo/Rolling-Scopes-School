function sumOfOther(arr) {
	const sum = arr.reduce((memo, num) => memo + num, 0);
	return arr.map(num => sum - num);
}
