/**
 * Self Study 1 – TDD Coding Kata “Help ALF“
 *
 * Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac.
 * Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair.
 * Now it's hovering in space. ALF has the technology to bring the spaceship home if he can lock on to its location.
 *
 * The map will be given in the form of a string with \n separating new lines.
 * The bottom left of the map is [0, 0]. X is ALF's spaceship.
 *
 * In this example:
 * findSpaceship(map) => [7, 2]
 * If you cannot find the spaceship, the result should be "Spaceship lost forever."
 */

function Spaceship() {}
Spaceship.prototype.find = function (map) {
    if (isShipLost(map)) {
        // Ship cannot be found
        return 'Spaceship lost forever.';
    }

    let coordinates = findCoordinates(map);
    return 'Ship found at (' + coordinates[0] + ', ' + coordinates[1] + ').';
};

function findCoordinates(map) {
    let rows = map.split('\n');
    let shipPosition = rows.findIndex((row) => hasShip(row));
    if (shipPosition === -1) {
        // Ship cannot be found
        return null;
    }

    let x = rows[shipPosition].indexOf('X'); // Set x to the position of 'X' in the row
    let y = rows.length - shipPosition - 1; // Subtract current index - 1 from the number of total rows
    return [x, y];
}

function isShipLost(map) {
    return !(map && hasShip(map));
}

function hasShip(input) {
    return input.indexOf('X') > -1;
}
