const fetchData = require('../utils/fetchData')
let API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async () => {
    try {
        const data = await fetchData(API)
        const data2 = await fetchData(`${API}${data.results[0].id}`)
        const data3 = await fetchData(data2.origin.url)
        console.log(data.info.count)
        console.log(data2.name)
        console.log(data3.dimension)
    } catch (error) {
        console.error(error)
    }
    finally{
        console.log("Finalizó anotherFunction")
    }
}

console.log("Antes")
anotherFunction()
console.log("Despues")