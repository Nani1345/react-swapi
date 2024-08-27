const baseUrl = 'https://swapi.dev/api'

export async function getStarShips(){
    const res = await fetch(`${baseUrl}/starships`)
    return res.json()
}

export async function getStarshipDetail(id){
    const res = await fetch(`${baseUrl}/starships/${id}`)
    return res.json()
}