const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGRY = 5;
const UNFIT = 3;


function Pet (name) {
    this.name = name
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
    growUp() {
        if (!this.isAlive) {
            throw new Error(`${this.name} is dead! RIP`);
        };
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },
    walk() {
        if (!this.isAlive) {
            throw new Error(`${this.name} is dead! RIP`);
        };
        if (this.fitness + 4 > MAXIMUM_FITNESS) {
            this.fitness = 10;
        }
        else {
            this.fitness += 4;
        };
    },
    feed() {
        if (!this.isAlive) {
            throw new Error(`${this.name} is dead! RIP`);
        };
        if (this.hunger - 3 < MINIMUM_HUNGER) {
            this.hunger = 0;
        } else {
            this.hunger -= 3;
        };
    },
    checkUp() {
        if (!this.isAlive) {
            return `${this.name} is dead! RIP`;
        } else if (this.hunger >= HUNGRY && this.fitness <= UNFIT) {
            return "I am hungry AND I need a walk"
        } else if (this.hunger >= HUNGRY) {
            return "I am hungry";
        } else if (this.fitness <= UNFIT) {
            return "I need a walk";
        } else {
            return "I feel great!";
        };
    },
    haveBaby(childName) {
        if (!this.isAlive) {
            throw new Error(`${this.name} is dead! RIP`);
        } else {
        const child = new Pet(childName);
        this.children.push(child);
        return child;
        };
    }
};


module.exports = {Pet, MAXIMUM_FITNESS, MINIMUM_HUNGER, HUNGRY, UNFIT}; 