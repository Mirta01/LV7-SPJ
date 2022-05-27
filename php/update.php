<?php
header('Content-type: text/json');
header('Content-type: aplication/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';

if(isset($_POST["id"]))
{
    $sQuery = "UPDATE artikli SET naziv='".$_POST['naziv']."', proizvodac='".$_POST['proizvodac']."', model='".$_POST['model']."', cijena=".$_POST['cijena'].", kolicina=".$_POST['kolicina']." WHERE id=".$_POST["id"].";";
    $oRecord = $Connection->query($sQuery);
}
?>