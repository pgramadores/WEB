<?php

include './system/models.php';

$recibe = json_decode(file_get_contents('php://input'), true);

$img = $recibe['Imagen']; // Your data 'data:image/png;base64,AAAFBfj42Pj4';
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$convertida = base64_decode($img);

$imagen = '../images/trabajos/'.str_replace(' ','',$recibe['Publicador']).'_'.date("YmdHis").'.png';
file_put_contents($imagen, $convertida);

$sql = new SQL();

$data = array('sssisssssss',
	isset($recibe["Cargo"]) ? utf8_decode($recibe["Cargo"]):'',
	isset($recibe["Publicador"]) ? utf8_decode($recibe["Publicador"]):'',
	isset($recibe["Categoria"]) ? utf8_decode($recibe["Categoria"]):'',
	isset($recibe["Renta"]) ? utf8_decode($recibe["Renta"]):'',
	isset($recibe["TipoContrato"]) ? utf8_decode($recibe["TipoContrato"]):'',
	isset($recibe["DescripcionGeneral"]) ? utf8_decode($recibe["DescripcionGeneral"]):'',
	isset($recibe["BeneficiosVentajas"]) ? utf8_decode($recibe["BeneficiosVentajas"]):'',
	isset($recibe["Requisitos"]) ? utf8_decode($recibe["Requisitos"]):'',
	'CL',
	isset($imagen) ? $imagen:'',
	'2016-08-15'
	);



	$sql->query("CALL spIns_Trabajos_CreaOfertaTrabajo(?,?,?,?,?,?,?,?,?,?,?);",$data,True);


// $datos = array(
// 				'IdInsertado' => $sql->IdInsertado,
// 				'CantidadAfectada' => $sql->CantidadRegistros
// 			);
//
// echo json_encode($datos);

var_dump($data);

?>
