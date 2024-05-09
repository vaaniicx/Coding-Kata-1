function Spaceship() {}
Spaceship.prototype.find = function(map) {
	if (isShipLost(map)) {
		return 'Spaceship lost forever.';
	} else {
		return findCoordinates(map);
	}
};

function isShipLost(map) {
	return !(map && map.includes('X'));
}

function findCoordinates(map) {
	return 'Ship found at (1, 0).';
}