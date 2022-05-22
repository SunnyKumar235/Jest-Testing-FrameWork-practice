const axios = require('axios');

const fetchData =async (id)=>{
    try{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return result.data
    }catch(e){
        throw new Error(e);
    }
}

module.exports = fetchData;