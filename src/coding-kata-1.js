function Spaceship() {}
Spaceship.prototype.find = function(map) {
	if (isShipLost) {
		return 'Spaceship lost forever.';
	}
};

function isShipLost() {
	return !(map && map.includes('X'));
}
