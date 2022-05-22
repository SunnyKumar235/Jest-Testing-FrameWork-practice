const axios = require('axios');

const fetchData =async (id)=>{
    try{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(result.data);
        //return 
    }catch(e){
        throw new Error(e);
    }
}
fetchData(1);
//module.exports =  ;