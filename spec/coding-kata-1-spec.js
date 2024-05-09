describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();
	});

	it('Should return "Spaceship lost forever." for given map', function() {
		expect(spaceship.find(''))
			.toEqual('Spaceship lost forever.');
	})
});
