import React from 'react';
import axios from 'axios';
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {useState, useEffect} from 'react';

const baseURL = "http://localhost/LV7/php/pcshop.php";

function Dodaj()
{
    const [naziv, setNaziv] = useState('');
    const [proizvodac, setProizvodac] = useState('');
    const [model, setModel] = useState('');
    const [cijena, setCijena] = useState('');
    const [kolicina, setKolicina] = useState('');

    return (
        <>
            <div className="d-flex justify-content-center p-3">
                <div className="d-flex align-items-center flex-column w-50">
                    <Button
                        variant="primary"
                        className="w-25"
                        onClick={()=>{
                            axios({
                                method: 'post',
                                url: 'http://localhost/LV7/php/pcshop.php',
                                data: {
                                    naziv: naziv,
                                    proizvodac: proizvodac,
                                    model: model,
                                    cijena: cijena,
                                    kolicina: kolicina
                                },
                                headers: {"Content-Type": "multipart/form-data"},
                            }).then(function (response) {
                                //handle success
                                console.log(response);
                            }).catch(function (response){
                                //handle error
                                console.log(response);
                            });
                        }}>Dodaj</Button>{' '}
                </div>
            </div>
        </>
    )
}

export default Dodaj;