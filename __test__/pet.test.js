const {Pet, MAXIMUM_FITNESS, MINIMUM_HUNGER, HUNGRY, UNFIT} = require("../src/pet");

let pet;

describe("pet", () => {

    beforeEach( ()=> {
        pet = new Pet('Fido');
    });

    it("instantiates a new Pet object with the name Fido", () => {
        expect(pet).toBeInstanceOf(Object);
    });

    //Can I check initial age, hunger and fitness in one test? Expect can only take one argument but it can take multiple expects ?is this the best way?
    it("Has an initial age of 0, hunger of 0 and fitness of 10", () => {
        expect(pet.age).toEqual(0);
        expect(pet.hunger).toEqual(0);
        expect(pet.fitness).toEqual(10);
    });

    it("When growUp is run: age increases by 1, hunger increases by 5 and fitness decreases by 3", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });

    it("When walk function is called, fitness is increased by 4 to a maximum of 10", () => {
        pet.fitness = 5;
        pet.walk();
        expect(pet.fitness).toEqual(9);

        pet.walk();
        expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
    });

    it("When feed function is called, hunger is decreased by 3 to a minimum of 0", () => {
        pet.hunger = 4;
        pet.feed();
        expect(pet.hunger).toEqual(1);

        pet.feed();
        expect(pet.hunger).toEqual(0);
    });

    it("When checkUp function is called returns how the pet is feeling and what it needs", () => {
        expect(pet.checkUp()).toBe('I feel great!');

        pet.hunger = HUNGRY;
        pet.fitness = MAXIMUM_FITNESS;
        expect(pet.checkUp()).toBe('I am hungry');

        pet.fitness = UNFIT;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');

        pet.hunger = MINIMUM_HUNGER;
        expect(pet.checkUp()).toBe('I need a walk');
    });
});  