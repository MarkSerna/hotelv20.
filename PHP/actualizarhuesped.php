<?php
include("./PHP/conexion.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cedula = $_POST['cedula'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];

    $query = "UPDATE huesped SET nombre='$nombre', apellido='$apellido', telefono='$telefono', correo='$correo' WHERE cedula='$cedula'";
    $result = mysqli_query($conexion, $query);

    if ($result) {
        $response = ['success' => true];
    } else {
        $response = ['success' => false];
    }

    echo json_encode($response);
}
?>