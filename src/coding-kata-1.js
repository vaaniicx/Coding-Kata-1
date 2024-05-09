function Spaceship() {}
Spaceship.prototype.find = function(map) {
	if (isShipLost(map)) {
		return 'Spaceship lost forever.';
	} else {
		let coordinates = findCoordinates(map);
		return 'Ship found at (' + coordinates[0] + ', ' + coordinates[1] + ').';
	}
};

function isShipLost(map) {
	return !(map && map.includes('X'));
}

function findCoordinates(map) {
	let rows = map.split('\n');

	for (let index = 0; index < rows.length; index++) {
		if (rows[index].indexOf('X') > -1) {
			return [rows[index].indexOf('X'), (rows.length - index) - 1];
		}
	}
}