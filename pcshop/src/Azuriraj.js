import { useParams } from "react-router-dom";
import axios from 'axios';
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import React from 'react';

function Azuriraj(id)
{
    let params = useParams();
    let artiklId  = params.EditId;

    const [naziv, setNaziv] = useState('');
    const [proizvodac, setProizvodac] = useState('');
    const [model, setModel] = useState('');
    const [cijena, setCijena] = useState('');
    const [kolicina, setKolicina] = useState('');

    useEffect(() => {
        getArtikl(artiklId);
    }, []);

    async function getArtikl(id)
    {
        try {
            const response = await axios.get('http://localhost/LV7/php/read.php?id='+id);
                setNaziv(response.data[0].naziv)
                setProizvodac(response.data[0].proizvodac)
                setModel(response.data[0].model)
                setCijena(response.data[0].cijena)
                setKolicina(response.data[0].kolicina)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center p-3">
                <div className="d-flex align-items-center flex-column w-50">
                    <InputGroup className="mb-3" onInput={e => setNaziv(e.target.value)}>
                        <InputGroup.Text id="basic-addon1">Naziv</InputGroup.Text>
                        <FormControl
                        defaultValue={naziv}
                        placeholder="Staromodni mobitel"
                        aria-label="Staromodni mobitel"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setProizvodac(e.target.value)}>
                        <InputGroup.Text id="basic-addon2">Proizvođač</InputGroup.Text>
                        <FormControl
                        defaultValue={proizvodac}
                        placeholder="NOKIA"
                        aria-label="NOKIA"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setModel(e.target.value)}>
                        <InputGroup.Text id="basic-addon3">Model</InputGroup.Text>
                        <FormControl
                        defaultValue={model}
                        placeholder="NOKIA 225 4G"
                        aria-label="NOKIA 225 4G"
                        aria-describedby="basic-addon3"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setCijena(e.target.value)}>
                        <FormControl
                        defaultValue={cijena}
                        placeholder="00.00"
                        aria-label="Cijena" />
                        <InputGroup.Text>kn</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3" onInput={e => setKolicina(e.target.value)}>
                        <InputGroup.Text id="basic-addon4">Količina</InputGroup.Text>
                        <FormControl
                        defaultValue={kolicina}
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
                                url: 'http://localhost/LV7/php/update.php',
                                data: {
                                    id: artiklId,
                                    naziv: naziv,
                                    proizvodac: proizvodac,
                                    model: model,
                                    cijena: cijena,
                                    kolicina: kolicina
                                },
                                headers: {"Content-Type": "multipart/form-data"},
                            }).then(function (response) {
                                window.location = "/";
                            }).catch(function (response){
                                console.log(response);
                            });
                        }}>Azuriraj</Button>{' '}
                </div>
            </div>
        </>
    )
}

export default Azuriraj;