const oneHundredDoors  = require('./app');

test ("door 64 is open", () => {
   var result = oneHundredDoors();
    expect(result[63]).toBe('@');
});
test ("oneHundredDoors to return the state of doors as a string", () => {
    expect(oneHundredDoors()).toBe('@##@####@######@########@##########@############@##############@################@##################@');
});


