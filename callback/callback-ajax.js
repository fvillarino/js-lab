const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL}`
const opts = { crossDomain: true}

function obtenerPersonaje(id){
    return new Promise((resolve,reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        console.log(url)
        $
            .get(url, opts, function(data){
                console.log('algo')
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7,8,9,10]
    var promises = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promises)
        console.log(personajes)
    }    
    catch(id){
        onError(id)
    }
}

console.log("Llamada a la funcion asincrónica...")
obtenerPersonajes()
console.log("La está llamando...")