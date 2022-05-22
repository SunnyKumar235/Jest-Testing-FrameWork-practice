const sum = require('./sum');

describe("Example test cases", () => {
    it("It should add 1 + 3 to equal 4", () => {
        const result = sum(1, 3);
        expect(result).toBe(4);

    });

    it("Check object", () => {
        const obj = {};
        expect(obj).toEqual({});
    });

    it("Check trusty or falsy", () => {
        const n = null;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
        expect(n).not.toBeUndefined();
    });

    test("Chek truthy or falsy", () => {
        const n = 0;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
    });


});

describe("Check numbers", () => {
    it("2 + 2 equal 4", () => {
        const n = 2 + 2;
        expect(n).toEqual(4);
        expect(n).toBeGreaterThan(3);
        expect(n).toBeGreaterThanOrEqual(4);
        expect(n).toBeLessThan(7);
        expect(n).toBeLessThanOrEqual(4);
    });
})

describe("Check floating", () => {
    it("floating", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3);
    })
})

describe("testing strigs", () => {
    it("There is no I in Sunny", () => {
        expect("Sunny").not.toMatch(/I/);
    })
});

describe("Array", () => {
    it("shppoing list contain some items", () => {
        const shoppingList = [
            'diapers', 'trash bag', 'paper towels', 'milk'
        ]
        expect(shoppingList).toContain("paper towels");

    })
})

function runAndroidCode() {
    throw new Error("you are using the wrong JDK");
}
describe("exceptions", () => {
    it("check exception for android SDK", () => {
        expect(() => runAndroidCode()).toThrow('you are using the wrong');
    })

})
