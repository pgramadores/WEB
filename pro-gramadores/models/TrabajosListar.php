<?php

include './system/models.php';

//var_dump(Utiles::PaisIP());

$sql = new SQL();
$data = array('s',$_GET['Pais']);
$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles(?);",$data,false);

echo json_encode($resultado);

?>