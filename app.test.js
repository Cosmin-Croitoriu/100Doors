const oneHundredDoors  = require('./app');
var result = oneHundredDoors();
test ("door 64 is open", () => {
    expect(result[63]).toBe('@');
});
test ("oneHundredDoors to return the state of doors as a string", () => {
    expect(result).toBe('@##@####@######@########@##########@############@##############@################@##################@');
});


