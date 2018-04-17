function make(...args) {
	let values = [];

	function calc(...args) {
		if (typeof args[0] === 'function') {
            const func = args[0];
            return values.reduce((memo, val) => func(memo, val));
        }

        values = values.concat(args);

		return calc;
    }

	return calc.apply(this, args);
}
