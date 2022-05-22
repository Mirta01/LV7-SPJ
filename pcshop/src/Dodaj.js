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
                    <InputGroup className="mb-3" onInput={e => setNaziv(e.target.value)}>
                        <InputGroup.Text id="basic-addon1">Naziv</InputGroup.Text>
                        <FormControl
                        placeholder="Staromodni mobitel"
                        aria-label="Staromodni mobitel"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setProizvodac(e.target.value)}>
                        <InputGroup.Text id="basic-addon2">Proizvođač</InputGroup.Text>
                        <FormControl
                        placeholder="NOKIA"
                        aria-label="NOKIA"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setModel(e.target.value)}>
                        <InputGroup.Text id="basic-addon3">Model</InputGroup.Text>
                        <FormControl
                        placeholder="NOKIA 225 4G"
                        aria-label="NOKIA 225 4G"
                        aria-describedby="basic-addon3"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setCijena(e.target.value)}>
                        <FormControl
                        placeholder="00.00"
                        aria-label="Cijena" />
                        <InputGroup.Text>kn</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setKolicina(e.target.value)}>
                        <InputGroup.Text id="basic-addon4">Količina</InputGroup.Text>
                        <FormControl
                        placeholder="1"
                        aria-label="1"
                        aria-describedby="basic-addon4"
                        />
                    </InputGroup>
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