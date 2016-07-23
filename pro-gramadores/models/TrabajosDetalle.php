<?php

include './system/models.php';

$sql = new SQL();
$data = array('i',$_GET["IdTrabajo"]);
$resultado = $sql->query("CALL spRec_Trabajos_DetalleTrabajo(?);",$data,false);

$saneado = array();
foreach ($resultado[0] as $key => $value) {
	$saneado[$key] = html_entity_decode(utf8_encode($value));
}

echo json_encode($saneado);

?>