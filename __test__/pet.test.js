const {Pet, MAXIMUM_FITNESS, MINIMUM_HUNGER, HUNGRY, UNFIT} = require("../src/pet");

let pet;

beforeEach( ()=> {
    pet = new Pet('Fido');
});

describe("constructor", () => {
    it("instantiates a new Pet object with the name Fido", () => {
        expect(pet).toBeInstanceOf(Object);
    });

    it("Has an initial age of 0, hunger of 0 and fitness of 10", () => {
        expect(pet.age).toEqual(0);
        expect(pet.hunger).toEqual(0);
        expect(pet.fitness).toEqual(10);
    });
});

describe("growUp", () => {
    it("When growUp is run: age increases by 1, hunger increases by 5 and fitness decreases by 3", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
    it("Throws an error if pet is dead due to old age", () => {
        pet.age = 30;
        expect( () => {
            pet.growUp();
        }).toThrow('Your pet is no longer alive :(');
    });
    it("Throws an error if pet is dead due to starvation", () => {
        pet.hunger = 12;
        expect( () => {
            pet.growUp();
        }).toThrow('Your pet is no longer alive :(');
    });
    it("Throws an error if pet is dead due to poor fitness", () => {
        pet.fitness = -2;
        expect( () => {
            pet.growUp();
        }).toThrow('Your pet is no longer alive :(');
    });
});


describe("walk", () => {
    it("When walk function is called, fitness is increased by 4 to a maximum of 10", () => {
        pet.fitness = 5;
        pet.walk();
        expect(pet.fitness).toEqual(9);

        pet.walk();
        expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
    });
    it("Throws an error if pet is dead due to old age", () => {
        pet.age = 31;
        expect( () => {
            pet.walk();
        }).toThrow('Your pet is no longer alive :(');
    });
    it("Throws an error if pet is dead due to starvation", () => {
        pet.hunger = 10;
        expect( () => {
            pet.walk();
        }).toThrow('Your pet is no longer alive :(');
    });
    it("Throws an error if pet is dead due to poor fitness", () => {
        pet.fitness = -12900;
        expect( () => {
            pet.walk();
        }).toThrow('Your pet is no longer alive :(');
    });
});
    
describe("feed", () => {
    it("When feed function is called, hunger is decreased by 3 to a minimum of 0", () => {
        pet.hunger = 4;
        pet.feed();
        expect(pet.hunger).toEqual(1);

        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    it("Throws an error if pet is dead due to old age", () => {
        pet.age = 36;
        expect( () => {
            pet.feed();
        }).toThrow('Your pet is no longer alive :(');
    });
    it("Throws an error if pet is dead due to starvation", () => {
        pet.hunger = 4000;
        expect( () => {
            pet.feed();
        }).toThrow('Your pet is no longer alive :(');
    });
    it("Throws an error if pet is dead due to poor fitness", () => {
        pet.fitness = 0;
        expect( () => {
            pet.feed();
        }).toThrow('Your pet is no longer alive :(');
    });
});

describe("checkUp", () => {
    it("When checkUp function is called returns how the pet is feeling and what it needs", () => {
        expect(pet.checkUp()).toBe('I feel great!');

        pet.hunger = HUNGRY;
        pet.fitness = MAXIMUM_FITNESS;
        expect(pet.checkUp()).toBe('I am hungry');

        pet.fitness = UNFIT;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');

        pet.hunger = MINIMUM_HUNGER;
        expect(pet.checkUp()).toBe('I need a walk');

        pet.age = 30;
        expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
    });
});

describe("isAlive", () => {
    it("Has a function to check whether pet is alive. Returns true on a pet with age <30, hunger <10 and fitness >0", () => {
        expect(pet.isAlive).toBe(true);
        pet.age = 28, pet.hunger = 9, pet.fitness = 23;
        expect(pet.isAlive).toBe(true);
    });

    it("isAlive returns false when age >=30", () => {
        pet.age = 30;
        expect(pet.isAlive).toBe(false);
        pet.age = 42;
        expect(pet.isAlive).toBe(false);
        pet.age = 90080;
        expect(pet.isAlive).toBe(false);
    });

    it("isAlive returns false when hunger >=10", () => {
        pet.hunger = 10;
        expect(pet.isAlive).toBe(false);
        pet.hunger = 12;
        expect(pet.isAlive).toBe(false);
        pet.hunger = 3000000;
        expect(pet.isAlive).toBe(false);
    });

    it("isAlive returns false when fitness <=0", () => {
        pet.fitness = 0;
        expect(pet.isAlive).toBe(false);
        pet.fitness = -2;
        expect(pet.isAlive).toBe(false);
        pet.fitness = -10000000;
        expect(pet.isAlive).toBe(false);
    });
});

