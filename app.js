const oneHundredDoors = () => {
    var doors = '';
    for(var i = 1; i <=100; i++) {
        if(Number.isInteger(Math.sqrt(i))){
             doors += '@';
        }else{
            doors += '#';
        }
    }
     return doors;   

}
oneHundredDoors();

module.exports = oneHundredDoors;
