<?php

include './system/models.php';

$sql = new SQL();
$data = array('i',$_GET["IdTrabajo"]);
$resultado = $sql->query("CALL spRec_Trabajos_DetalleTrabajo(?);",$data,false);

echo json_encode($resultado);

?>