function getP(n) {
	var num = 1
	for (var i = 0; i < n; i++) {
		if (i%2 === 0) {
			num -= 1/(2*i + 3)
		} else {
			num += 1/(2*i + 3)
		}
	}
	return num * 4
}

getP(1000000)