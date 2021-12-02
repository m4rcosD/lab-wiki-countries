import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

function ContriesList() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        async function getData(){
            let response = await axios.get('https://restcountries.com/v3.1/all')
            setCountries(response.data)
        }
    getData()
    }, [])

    return (
        <div>
            <h1>countries</h1> 
{
            countries.map((elem, i) => {
                return(
                    <div style={{display: 'flex'}}>
                        <img src={elem.flags.png} />
                        <Link key={i} to={`/alpha/${elem.cca3}`}> {elem.name.official}  </Link>
                    </div>
                )
            } )
            }
        </div>
    )
}

export default ContriesList

