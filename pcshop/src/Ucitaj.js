import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
// import { Link, Outlet } from 'react-router-dom';

const baseURL = "http://localhost/LV7/php/read.php";

function Ucitaj()
{
    const [artikl, setArtikl] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setArtikl(response.data);
        });
    },[]);

    return (
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Naziv</th>
                <th scope="col">Proizvođač</th>
                <th scope="col">Model</th>
                <th scope="col">Cijena</th>
                <th scope="col">Količina</th>
                </tr>
            </thead>
            <tbody>
            {artikl.map(x=>{
                return(<tr key = {x.id.toString()}>
                    <td>{x.id}</td>
                    <td>{x.naziv}</td>
                    <td>{x.proizvodac}</td>
                    <td>{x.model}</td>
                    <td>{x.cijena} kn</td>
                    <td>{x.kolicina}</td>
                </tr>)
            })}
            </tbody>
        </table>
        </>
    )
}

export default Ucitaj;