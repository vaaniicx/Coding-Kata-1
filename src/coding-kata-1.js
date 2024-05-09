function Spaceship() {}
Spaceship.prototype.find = function(map) {
	if (!map || !map.includes('X')) {
		return 'Spaceship lost forever.';
	}
};
