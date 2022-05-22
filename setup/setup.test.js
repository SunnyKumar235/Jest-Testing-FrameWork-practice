let animal = ["zibra", 'dog', 'tiger', 'lion'];


describe("adding animal to array and checking", () => {
    beforeAll(()=>{
        animal = ["zibra", 'dog', 'tiger', 'lion'];
    });
    
    afterAll(()=>{
        animal = ["zibra", 'dog', 'tiger', 'lion'];
    })
    
    beforeEach(() => {
        animal = ["zibra", 'dog', 'tiger', 'lion'];
    })
    
    afterEach(()=>{
        animal = ["zibra", 'dog', 'tiger', 'lion'];
    })
    it("adding animal in last index of array", () => {
        animal.push("cat");
        expect(animal[animal.length - 1]).toBe("cat");
    })
    it("adding animal in first index", () => {
        animal.unshift("frog");
        expect(animal[0]).toBe("frog");
    })
    it("checking the inital lenght of animal array", () => {
        expect(animal.length - 1).toBe(3);
    })
})
describe("Not running beforeEach or afterEach",()=>{
    it("check if true is true",()=>{
        expect(true).toBeTruthy();
    })
  
})