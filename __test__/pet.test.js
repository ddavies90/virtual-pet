const Pet = require("../src/pet");

let pet;

describe("pet", () => {

    beforeEach( ()=> {
        pet = new Pet('Fido');
    });

    it("instantiates a new Pet object with the name Fido", () => {
        expect(pet).toBeInstanceOf(Object);
    });
});  