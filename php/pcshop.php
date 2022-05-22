<?php
header('Content-type: text/json');
header('Content-type: aplication/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';

$sQuery = "INSERT INTO artikli (id, naziv, proizvodac, model, cijena, kolicina) SELECT MAX(id) + 1, '".$_POST['naziv']."', '".$_POST['proizvodac']."', '".$_POST['model']."', '".$_POST['cijena']."', '".$_POST['kolicina']."' FROM artikli";
$oRecord = $Connection->query($sQuery);
?>