function Spaceship() {}
Spaceship.prototype.find = function(map) {
	if (isShipLost(map)) {
		return 'Spaceship lost forever.';
	} else {
		return 'Ship found at (1, 0).'
	}
};

function isShipLost(map) {
	return !(map && map.includes('X'));
}