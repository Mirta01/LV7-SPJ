<?php
header('Content-type: text/json');
header('Content-type: aplication/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include 'connection.php';
//include 'pcshop.php';

$sQuery = "SELECT * FROM artikli";
$oRecord = $Connection->query($sQuery);
$aArtikli = array();
while($oRow=$oRecord->fetch(PDO::FETCH_BOTH)){
    $id = $oRow['id'];
    $naziv = $oRow['naziv'];
    $proizvodac = $oRow['proizvodac'];
    $model = $oRow['model'];
    $cijena = $oRow['cijena'];
    $kolicina = $oRow['kolicina'];

    $oArtikl = new pcShop($id, $naziv, $proizvodac, $model, $cijena, $kolicina);
    array_push($aArtikli, $oArtikl);
}

echo json_encode($aArtikli);
?>