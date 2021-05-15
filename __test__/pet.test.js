const Pet = require("../src/pet");

let pet;

describe("pet", () => {

    beforeEach( ()=> {
        pet = new Pet('Fido');
    });

    it("instantiates a new Pet object with the name Fido", () => {
        expect(pet).toBeInstanceOf(Object);
    });

    it("Has an initial age of 0", () => {
        expect(pet.age).toEqual(0);
    });

    it("Grows up by 1 when function run", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
});  