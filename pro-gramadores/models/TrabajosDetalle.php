<?php

include '../ModelClass.php';

$sql = new SQL();
$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles();",'',false);

echo json_encode($resultado);

?>