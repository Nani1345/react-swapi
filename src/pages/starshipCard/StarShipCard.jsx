// npm modules
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//css
import './StarShipCard.css'

//services
import { getStarshipDetail } from "../../services/sw-api";

const StarShipCard = () => {

    
    const [details, setDetails] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetchDetails = async ()=>{
            const starShipsData = await getStarshipDetail(id)
            setDetails(starShipsData)
        }
        fetchDetails()
    }, [id])

    return (
        <main className="details">
            <h2>NAME: {details.name}</h2> 
            <h2>MODEL: {details.model}</h2> 
            <Link to={`/`}>RETURN</Link>
        </main>
     )
}
 
export default StarShipCard