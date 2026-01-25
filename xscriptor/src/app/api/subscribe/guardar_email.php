<?php
// Habilitar reporte de errores (solo en desarrollo)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//debe ir almacenado en /php/guardar_email.php dentro de public_html
// Cargar las credenciales de la base de datos
$dbConfig = include($_SERVER['DOCUMENT_ROOT'] . '/config/database.php');

// Conexión a la base de datos
$conn = new mysqli($dbConfig['host'], $dbConfig['user'], $dbConfig['pass'], $dbConfig['name']);

// Verificar la conexión
if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Error de conexión a la base de datos: " . $conn->connect_error]);
    exit;
}

// Comprobar si se recibió el email
if (isset($_POST['email'])) {
    $email = $conn->real_escape_string($_POST['email']);

    // Validar formato de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "error" => "Correo electrónico no válido."]);
        exit;
    }

    // Contar el número de registros para la fecha actual
    $fechaHoy = date('Y-m-d');
    $query = "SELECT COUNT(*) AS total FROM NewsletterSubscriber WHERE DATE(date) = '$fechaHoy'";
    $result = $conn->query($query);

    if ($result) {
        $row = $result->fetch_assoc();
        $totalRegistrosHoy = (int) $row['total'];

        // Verificar si se han alcanzado los 100 registros
        if ($totalRegistrosHoy >= 100) {
            echo json_encode(["success" => false, "error" => "Se ha alcanzado el límite de 100 registros por día."]);
            exit;
        }
    } else {
        echo json_encode(["success" => false, "error" => "Error al consultar la base de datos."]);
        exit;
    }

    // Realizar la inserción si no se alcanzó el límite
    $sql = "INSERT INTO NewsletterSubscriber (email) VALUES ('$email')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "¡Gracias por suscribirte!"]);
    } else {
        echo json_encode(["success" => false, "error" => "Error al guardar en la base de datos: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "error" => "No se recibió ningún correo electrónico."]);
}

// Cerrar la conexión
$conn->close();
?>
