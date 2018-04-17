module.exports = function longestConsecutiveLength(array) {
	// not 100% :(
	const NUMMERS_MAP = {};
	array.forEach(el => NUMMERS_MAP[el] = true);
	let quiz = null;
	let maximumSequence = plusBuff = 0;
	for(el in NUMMERS_MAP) {
		if(quiz === el - 1) {
			plusBuff++;
		} else {
			if (plusBuff > maximumSequence) {
				maximumSequence = plusBuff;
			}
			plusBuff = 0;
		}
		quiz = +el;
	}
	if (plusBuff > maximumSequence) {
		maximumSequence = plusBuff;
	}
	return maximumSequence ? ++maximumSequence : maximumSequence;
};
