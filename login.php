<?php

$name_user_play = $_REQUEST['user'];
$pass = $_REQUEST['pass'];
$servername = "localhost";
$usernamedb = "root";
$password = "";
$dbname = "domandb";

$conn = mysqli_connect($servername, $usernamedb, $password, $dbname);
global $conn;
$usuarios;
if (!$conn) {
    die("Conexión Fallida: " . mysqli_connect_error());
}
$sql = "SELECT * FROM play_user WHERE name_user='$name_user_play' AND pass_user='$pass'";
$result = mysqli_query($conn, $sql);
if($row = mysqli_num_rows($result)>0){
    session_start();
    $_SESSION['auth'] = $row;
    header("Location:main.php");
    return true;
}else{
    header("Location:index.php");
    echo "usuario o contraseña incorrectos";
    return false;
}

mysqli_close($conn);
?>