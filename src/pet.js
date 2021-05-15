const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGRY = 5;
const UNFIT = 3;

function Pet (name) {
    this.name = name
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
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
Pet.prototype.feed = function() {
    if (this.hunger - 3 < MINIMUM_HUNGER) {
        this.hunger = 0;
    } else {
        this.hunger -= 3;
    };
};
Pet.prototype.checkUp = function() {
    if (this.hunger >= HUNGRY && this.fitness <= UNFIT) {
        return "I am hungry AND I need a walk"
    } else if (this.hunger >= HUNGRY) {
        return "I am hungry";
    } else if (this.fitness <= UNFIT) {
        return "I need a walk";
    } else {
        return "I feel great!";
    };
};

module.exports = {Pet, MAXIMUM_FITNESS, MINIMUM_HUNGER, HUNGRY, UNFIT}; 