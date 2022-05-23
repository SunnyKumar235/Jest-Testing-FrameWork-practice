const { default: axios } = require("axios");

const ForEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

const fetchData =async (id)=>{
    try{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return result.data
    }catch(e){
        throw new Error(e);
    }
}

describe("test mocks", () => {
    it("test the call back mock", () => {
        const mockCallback = jest.fn(x => x + 42);
        ForEach([1, 0], mockCallback);
        expect(mockCallback.mock.calls.length).toBe(2);
        expect(mockCallback.mock.calls[0][0]).toBe(1);
        expect(mockCallback.mock.calls[1][0]).toBe(0);
        expect(mockCallback.mock.results[0].value).toBe(43);
        expect(mockCallback.mock.results[1].value).toBe(42);
    })

    it("mock return value", () => {
        const mock = jest.fn();
        mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hi");
        const result = mock();
        const result2 = mock();
        const result3 = mock();
        expect(result).toBe(true);
        expect(result2).toBe(false);
        expect(result3).toBe("Hi");

    })
    it("mock the axios",async()=>{
        jest.spyOn(axios,'get').mockReturnValueOnce({
            data:{
                id:1,
                todo:"get one"
            }
        });
        const result = await fetchData(1);
        expect(result.todo).toBe("get one");
    })

})