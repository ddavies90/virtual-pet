const MAXIMUM_FITNESS = 10;

function Pet (name) {
    this.name = name
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};
Pet.prototype.walk = function () {
    if (this.fitness + 4 > MAXIMUM_FITNESS) {
        this.fitness = 10;
    }
    else {
        this.fitness += 4;
    };
};

module.exports = {Pet, MAXIMUM_FITNESS}; 