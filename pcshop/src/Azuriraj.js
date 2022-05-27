import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import React from 'react';

const baseURL = "http://localhost/LV7/php/pcshop.php";

function Azuriraj(id)
{
    // const navigate = useNavigate();
    // let params = useParams();
    // let artiklId  = params.EditId;
    // console.log(artiklId);

    // const [naziv, setNaziv] = useState('');
    // const [proizvodac, setProizvodac] = useState('');
    // const [model, setModel] = useState('');
    // const [cijena, setCijena] = useState('');
    // const [kolicina, setKolicina] = useState('');

    // useEffect(() => {
    //     getArtikl(artiklId);
    //     }, []);

    // async function getArtikl(id)
    // {
    //     try {
    //         const response = await axios.get('http://localhost/LV7/php/pcshop.php?id=${id}');
    //             setNaziv(response.data[0].naziv)
    //             setProizvodac(response.data[0].proizvodac)
    //             setModel(response.data[0].model)
    //             setCijena(response.data[0].cijena)
    //             setKolicina(response.data[0].kolicina)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const azurirajArtikl = async(event) => {
    //     try {
    //         event.preventDefault();
    //         await updateArtikl(azuriraniArtikl);
    //         navigate("/");

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }



    return (
        <>
        </>
    )
}

export default Azuriraj;