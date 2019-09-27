const oneHundredDoors  = require('./app');

test ("oneHundredDoors to return false(open) in the first trip", () => {
    expect(oneHundredDoors()).toContain(false);
});

test ("oneHundredDoors to true(closed) in the trip incremented by 2", () => {
    expect(oneHundredDoors()).toContain(true);
});

