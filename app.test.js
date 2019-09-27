const oneHundredDoors  = require('./app');

test ("oneHundredDoors to return doors", () => {
    expect(oneHundredDoors()).toContain(false);
});



