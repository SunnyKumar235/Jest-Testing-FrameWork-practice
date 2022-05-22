const fetchData = require('./async');

describe("testing todo",()=>{
    it("Should return correct todo",async()=>{
        const result = await fetchData(1);
        expect(result.userId).toEqual(1);        
    })
})