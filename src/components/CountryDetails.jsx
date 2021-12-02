import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios'
import React, { Component } from 'react'

function CountryDetails() {
    const { id } = useParams()
    const [detail, setDetail] = useState(null)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        async function getData() {
            let response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
            const { capital, borders, flags, name} = response.data[0]
            let country = {
                name: name.common,
                capital: capital,
                borders: borders,
                flags: flags
            }
            console.log(response)
            setDetail(country)
        }
        getData()
    }, [id])
    if (!detail) {
        return <p><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" /> </p>
    }
    return (
        <>
            <h1> country details </h1>
            <img src={detail.flags.png} alt="" />
            <h1> Capital: {detail.capital}</h1>
            <h1> Name's: {detail.name}</h1>
            <h1> {detail.borders}</h1>
        </>
    )
}

export default CountryDetails
