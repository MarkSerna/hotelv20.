<?php
    include ('conexion.php');
    $usuario = $_POST['username'];
    $contrasena = $_POST['password'];
    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario' and contrasena='$contrasena'");

        if(mysqli_num_rows($validar_login)>0){
            header("location:../main.html");
        } else {
            echo "
                <script>
                    alert('Acceso denegado, verifique los datos e inténtelo de nuevo');
                    window.location=('../login.html');
                </script>
            ";
        };
?>