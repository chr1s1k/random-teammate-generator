const helpers = {
	// https://bost.ocks.org/mike/shuffle/
	shuffleArray(array) {
		let arrayCopy = array,
			m = array.length,
			t,
			i

		// While there remain elements to shuffle…
		while (m) {

			// Pick a remaining element…
			i = Math.floor(Math.random() * m--)

			// And swap it with the current element.
			t = arrayCopy[m]
			arrayCopy[m] = array[i]
			arrayCopy[i] = t
		}

		return arrayCopy
	}
}

export default helpers