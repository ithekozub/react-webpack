import * as React from "react";
import axios from "axios";
import "../styles/Countries.css";
import Table from "react-bootstrap/Table";

import Country from "./Country";


function Countries() {
    const [countries, setCountries] = React.useState([]);
    let name : string;
    let capital : string;

    if (!countries.length) {
        axios.get("https://restcountries.com/v2/all").then(res => {
            setCountries(res.data);
        }).catch(function () {
            console.log("Error");
        });
    }



    return (
        <Table striped bordered hover className={"countries"}>
            <thead>
            <tr>
                <th>Name</th><th>Capital</th>
            </tr>
            </thead>
            <tbody>
                {countries.map(country => country.capital ? <Country key={country.alpha3Code} country={country.name}
                                                   capital={country.capital}/> :
                    <Country key={country.alpha3Code}
                             country={country.name}
                />)}
            </tbody>
        </Table>
    )
}

export default Countries;