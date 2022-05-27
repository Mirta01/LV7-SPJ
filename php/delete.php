<?php
include "connection.php";
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');

isset($_POST["id"]);

$sQuery = "DELETE FROM artikli WHERE id=${id}";
$oRecord = $Connection->query($sQuery);
			
?>