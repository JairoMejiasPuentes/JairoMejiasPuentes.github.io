<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "domandb";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(isset($_REQUEST['idBloque'])){
    $idBloque = $_REQUEST['idBloque'];
}

if (isset($_REQUEST['method'])) {
    $method = $_REQUEST['method'];
    switch ($method) {
        case "showAllBlocks";
            echo json_encode(showAllBlocks());
            break;
        case "showElementsOfBlock";
            echo json_encode(showElementsOfBlock());
            break;
        case "sendMail";
            echo sendMail();
            break;
    }
};

function showAllBlocks(){

    global $conn;
    $elements = [];
    if (!$conn) {
        die("Conexión Fallida: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM elements_block";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_array($result)) {
        array_push($elements, $row);
    }
    mysqli_close($conn);
    return $elements;
}

function showElementsOfBlock(){
    
    global $conn;
    $idBlock = $_REQUEST['id_block'];
    $elements = [];
    if (!$conn) {
        die("Conexión Fallida: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM element WHERE id_block=".$idBlock.";";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_array($result)) {
        array_push($elements, $row);
    }
    mysqli_close($conn);
    return $elements;
}

function sendMail(){
    $from = $_REQUEST['to'];
    $name = $_REQUEST['name'];
    $surname = $_REQUEST['surname'];
    $address = $_REQUEST['address'];
    $phoneNumber = $_REQUEST['phoneNumber'];

    $subject = "Información para ".$name." ".$surname;
    $headers = 'From: '.$from . "\r\n" .
    'Reply-To: '.$from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $messageSend = "Informacion de contacto: \r\n Nombre: ".$name."\r\n Apellidos: ".$surname."\r\n Email de Contacto: " .$from. "\r\n Dirección: " .$address. "\r\n Número de telefono: " .$phoneNumber;
    mail("vertederodepruebas@gmail.com", $subject, $messageSend, $headers);
    return true;
}

?>