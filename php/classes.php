<?php

class Configuration{
    public $host = "";
    public $dbName = "";
    public $username = "";
    public $password = "";

    public function __construct($host, $dbName, $username, $password) 
    {
        $this->host = $host;
        $this->dbName = $dbName;
        $this->username = $username;
        $this->password = $password;
    }
}

class pcShop{
    public $id = 0;
    public $naziv = "";
    public $proizvodac = "";
    public $model = "";
    public $cijena = "";
    public $kolicina = "";

    public function __construct($id, $naziv, $proizvodac, $model, $cijena, $kolicina) 
    {
        $this->id = $id;
        $this->naziv = $naziv;
        $this->proizvodac = $proizvodac;
        $this->model = $model;
        $this->cijena = $cijena;
        $this->kolicina = $kolicina;
    }
}

?>