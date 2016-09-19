<?php

include './system/models.php';

$sql = new SQL();
$data = array('s',$_GET['Pais']);
$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles(?);",$data,false);

echo json_encode($resultado);

?>