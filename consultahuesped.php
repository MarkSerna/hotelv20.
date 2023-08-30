
<!DOCTYPE html>
<html lang="en" dir="ltr">
        <head>
        <meta charset="UTF-8">
        <title>Consultar huesped - Hotel Maloca</title>
        <link rel="stylesheet" href="./CSS/main.css">
        <!-- Boxicons CDN Link -->
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
<body>

<!-- MENU SIDEBAR -->
    <div class="sidebar">
        <div class="logo-details">
            <img src="./Assets/hotelmalocalogowhite.png">
            <div class="logo_name">Hotel Maloca</div>
            <i class='bx bx-menu' id="btn" ></i>
        </div>
        <ul class="nav-list">
        <li>
            <i class='bx bx-search' ></i>
            <input type="text" placeholder="Buscar...">
            <span class="tooltip">Buscar</span>
        </li>
        <li>
            <a href="main.html" id="inicio-link">
            <i class='bx bx-grid-alt'></i>
            <span class="links_name">Inicio</span>
            </a>
            <span class="tooltip">Inicio</span>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-user' ></i>
                <span class="links_name">Huéspedes</span>
            </a>
            <div class="submenu">
                <a href="./Huesped.html">Registrar Huésped</a>
                <a href="./consultahuesped.php">Consultar Huésped</a>
            </div>
        </li>
        <li>
        <a href="#">
            <i class='bx bx-notepad' ></i>
            <span class="links_name">Reservas</span>
        </a>
        <div class="submenu">
            <a href="./reservas.html">Realizar reserva</a>
            <a href="#">Consultar reserva</a>
        </div>
        </li>
        <li>
        <a href="#">
            <i class='bx bx-check-square'></i>
            <span class="links_name">Validación</span>
        </a>
        <span class="tooltip">Validación</span>
        </li>
        <li>
        <a href="#">
            <i class='bx bx-cart-alt' ></i>
            <span class="links_name">Pedidos</span>
        </a>
        <span class="tooltip">Pedidos</span>
        </li>
        <li>
        <a href="#">
            <i class='bx bx-bookmark-alt'></i>
            <span class="links_name">Facturación</span>
        </a>
        <span class="tooltip">Facturación</span>
        </li>
        <li>
        <a href="#">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Configuración</span>
        </a>
        <span class="tooltip">Configuración</span>
        </li>
        <li class="profile">
            <div class="profile-details">
            <img src="./Assets/hotelmalocalogowhite.png" alt="profileImg">
            <div class="name_job">
                <div class="name">Cerrar sesión</div>
                <div class="job">Hotel Maloca</div>
            </div>
            </div>
            <i class='bx bx-log-out' id="log_out" ></i>
        </li>
        </ul>
    </div>
<!-- END MENU SIDEBAR -->

<!-- FORMULARIO DE REGISTRO HUESPED-->

    <section class="formulario" id="consultaYDatos">
        <!-- Consulta de cédula -->
        <div class="consulta-container">
        <img src="./Assets/HotelMaloca.png" alt="">
        <form method="POST"> <!-- Use POST method for submitting form -->
            <label>Ingresa la cédula:</label>
            <input type="number" name="cedulaInput" placeholder="Número" required/>
            <button type="submit" name="consultarBtn">Consultar</button>
        </form>
    </div>
        <!-- Datos consultados -->
        <div class="datos-container">
            <h2>Datos del huésped</h2>
            <?php
            include("./PHP/conexion.php"); // Include the database connection file

            if (isset($_POST['consultarBtn'])) {
                $cedula = $_POST['cedulaInput'];
                $query = "SELECT * FROM huesped WHERE cedula = '$cedula'";
                $result = mysqli_query($conexion, $query);

                if ($result && mysqli_num_rows($result) > 0) {
                    $row = mysqli_fetch_assoc($result);
                    echo "<div>";
                    echo "<p><b>Cédula:</b> <span>{$row['cedula']}</span></p>";
                    echo "<p><b>Nombres:</b> <span>{$row['nombre']}</span></p>";
                    echo "<p><b>Apellidos:</b> <span>{$row['apellido']}</span></p>";
                    echo "<p><b>Teléfono:</b> <span>{$row['telefono']}</span></p>";
                    echo "<p><b>Correo:</b> <span>{$row['correo']}</span></p>";
                    echo "<button onclick='habilitarEdicion()'>Editar Datos</button>";
                    echo "<button style='display: none;' onclick='guardarCambios({$row['cedula']})'>Guardar Cambios</button>";
                    echo "<button onclick=\"location.href='consultahuesped.php'\">Cerrar</button>";
                    echo "</div>";
                } else {
                    echo "<p>No se encontraron datos para la cédula ingresada.</p>";
                }

                mysqli_free_result($result);
            }

            mysqli_close($conexion);
            ?>
        </div>
    </section>

    <script src="./JS/script.js"></script>
    <script>
        
    </script>
</body>
</html>
