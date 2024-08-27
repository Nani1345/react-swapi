// npm modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//services
import { getStarShips } from "../../services/sw-api";

//CSS
import './StarShip.css'


const StarShips = () => {
    const [starShips, setStarShips] = useState([ ])

    useEffect(() => {
        const fetchStarShips = async ()=>{
            const starShipsData = await getStarShips()
            setStarShips(starShipsData.results)
        }
        fetchStarShips()
    }, [])

 
    if (!starShips.length) return <h1>Loading starships...</h1>

    return ( 
        <main className='starship-list'>
        {starShips.map(starShip => {
            const urlArray = starShip.url.split('/').filter(Boolean);
            const id = urlArray[urlArray.length - 1];

            return (
            <div className='link-container' key={id}>
                <Link to={`/starships/${id}`}>{starShip.name} </Link>
            </div>
            );
        })}
        </main>
     );
}
 
export default StarShips