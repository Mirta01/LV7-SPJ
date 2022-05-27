import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap'


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
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
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
                    <td>
                        <Button variant='outline-danger' onClick={()=>{deleteConform(x.id)}}>Delete</Button>
                    </td>
                    <td>
                        <Link to={"/azuriraj/"+x.id}>
                            <Button variant='outline-dark'>Edit</Button>
                        </Link>
                    </td>
                </tr>)
            })}
            </tbody>
        </table>
        </>
    )

}

function deleteConform(id) {
    if (window.confirm("Are you sure?")) {
        deleteArtikl(id);
    }
}

async function deleteArtikl(id)
{
    try {
        await axios.post("http://localhost/LV7/php/delete.php", {
            id: id,
        },
        {
            headers : {
                "Content-Type": "multipart/form-data"
        }});
        window.location.reload(false);
    }
    catch (error)
    {
        console.log(error);
    }
}

export default Ucitaj;