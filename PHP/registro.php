<?php
    include 'conexion.php';
    $cedula=$_POST['cedula'];
    $nombre=$_POST['nombre'];
    $apellidos=$_POST['apellidos'];
    $telefono=$_POST['telefono'];
    $correo=$_POST['correo'];

    $query="INSERT INTO huesped(cedula,nombre,apellido,telefono,correo) values('$cedula','$nombre','$apellidos','$telefono','$correo')";
    $ejecutar=mysqli_query($conexion,$query);
    if($ejecutar){
        echo "
            <script>
                alert('usuario almacenado correctamente');
                window.location.href= '../huesped.html';
            </script>
        ";
    }
?>


