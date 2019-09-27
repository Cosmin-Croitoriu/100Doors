const oneHundredDoors = () => {

    var doors = [];
    for (var i = 0; i < 100; i++) {
        doors[i] = false;
    }

    for (var i = 0; i < 100; i+=2) {
        doors[i] = true;
    }

    for (var i = 0; i < 100; i+=3) {
        doors[i] = false;
    }
    console.log(doors)
    return doors;
    
}


module.exports = oneHundredDoors;

