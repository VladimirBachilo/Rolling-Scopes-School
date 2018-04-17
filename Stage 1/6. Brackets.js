module.exports = function check(str, bracketsConfig) {
	str = str.split("");
	let length = str.length,
		arr = [];

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (str[i] == bracketsConfig[j][1] && arr[arr.length - 1] == bracketsConfig[j][0]) {
				arr.pop();
			} else if (str[i] == bracketsConfig[j][0]) {
				arr.push(str[i]);
			}
		}
	}
	return arr.length == 0 && length % 2 == 0 ? true : false;
}
