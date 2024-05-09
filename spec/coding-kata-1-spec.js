describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();
	});

	it('Should return "Spaceship lost forever." for empty map', function() {
		expect(spaceship.find(''))
			.toEqual('Spaceship lost forever.');
	});

	it('Should return "Spaceship lost forever." for given map', function() {
		expect(spaceship.find('..\n..'))
			.toEqual('Spaceship lost forever.');
	});

    it('Should return [1,0] for given map', function() {
        expect(spaceship.find('...\n.X.'))
            .toEqual('Ship found at (1, 0).');
    });
});
