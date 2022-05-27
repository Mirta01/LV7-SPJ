<?php
include "connection.php";
header('Content-type: text/json');
header('Content-type: aplication/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if(isset($_POST["id"]))
{
    $sQuery = "DELETE FROM artikli WHERE id=".$_POST["id"].";";
    $oRecord = $Connection->query($sQuery);
}

?>