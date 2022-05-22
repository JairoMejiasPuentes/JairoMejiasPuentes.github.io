<!DOCTYPE html>
<?php
    session_start();
    if (isset($_SESSION['auth'])){
        $cliente = $_SESSION['auth'];
    }else{
        header('Location: ./index.php');
        die() ;
    }
?>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title class="lang" key="title">Método Doman</title>

    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="./js/jquery-3.6.0.js"></script>
    <script src="./js/functions.js"></script>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/style.css">
      

</head>

<body onload="showAllBlocks('showAllBlocks')">
    <header>
    <div class="middNav">
            <img src="./img/logo.png">
            <div class="navTitle"><span class="lang" key="title">Método Doman</span></div>
        </div>
        <div class="topnav" id="myTopnav">
            <div class="upperNav">
                <a href="index.php" ><span class="lang" key="home">Inicio</span></a>
                <a href="logout.php"><span>Logout</span></a>
                <div class="dropdown">
                    <button class="dropbtn"><span class="lang" key="language">Idioma</span>
                </button>
                <div class="dropdown-content">
                    <a class="translate" id="en" ><img src="./img/united-kingdom.png"><p class="lang" key="en">Inglés</p></a>
                    <a class="translate" id="es"><img src="./img/spain.png"><p class="lang" key="es">Español</p></a>
                    <a class="translate" id="fr" ><img src="./img/francia.png"><p class="lang" key="fr">Francés</p></a>
                </div>
            </div> 
            <a href="contact.php"><span class="lang" key="contact">Contacto</span></a>
            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="showNav()"><span class="material-icons material">menu</span></a>
            <img class="tricky" src="./img/tricky.jpg">
        </div>
    </header>
    <section >
        <div class="blockOpt" id="blockOpt"></div>
            <div class="contenedor-slider" >
                <div id="slider" class="slider"></div>
            </div>

<div class="controls">
    <button class="btn-control button" id="btn-play" ><span class="material-icons materialctrl">play_arrow</span></button>
    <button class="btn-control button" id="btn-back" ><span class="material-icons materialctrl" >close</span></button>
</div>

        </div>
    </section>
        <footer>
            <p class="lang" key="footer-text">El método Dóman es una metodología pedagógica cuyo nombre está registrado </p><br>
            <div class="icon-bar">
                <a href="https://www.facebook.com/jairo.mejiaspuentes" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/sergio-jairo-megías-puentes-743922179" class="linkedin"><i class="fa fa-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UCeNTnIIwfW-y-BvQBpyYLHA" class="youtube"><i class="fa fa-youtube"></i></a>
            </div>
        </footer>
</body>
</html>
