
let htmlLang = "";
let interval = "";


$(document).ready(function() {
    main();
});

function showNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function main(){
    // establecemos aqui el local Storage para que se mantenga la opcion del idioma aunque lo recarguemos
    htmlLang = localStorage.getItem("lang");

    $('#btn-play').click(()=>{
        setTimeout(()=>{$('#slider').css('margin-left', ''+0+'%')},5000);
        autoplayScroll();
    });

    $('#btn-back').click(()=>{
        window.location.href = './main.php';
    });
     
    // este lo anima para hacer un menú dropdown en la vista pc
    let counterLang = 0

    $('.dropbtn').click(()=> {
        counterLang = 1;
        console.log(counterLang);
        $('.dropdown-content').css({
            "display":"block"
        });
        $('.dropdropbtn').mouseleave(()=> { 
            $('.dropdown-content').css("display", "none");
        });
        $('.dropdown-content').mouseleave(()=> { 
            $('.dropdown-content').css("display", "none");
        });
        if(counterLang == 1){
            $('.dropdropbtn').click(()=> {
                console.log(counterLang);
                counterLang=0
                $('.dropdown-content').css("display", "none");
            });
            $('.dropdown-content').click(()=> { 
                $('.dropdown-content').css("display", "none");
            });
        }
    });
};

// juego slide

//-----------------------------------------------------------------------------------------------------//


function autoplayScroll() {
    // establecemos una bandera para definir que sonido ejecutar
    let flag = 0;
    
    // para que se ejecute una sola vez, desactivamos el botón tanto tiempo como estimamos que dure la secuencia
    $('#btn-play').attr('disabled', true);
    setTimeout(()=>{$('#btn-play').attr('disabled', false);},23000)
    
    // para cada intervalo del juego total (10 imagenes) 
    interval = setInterval(()=>{
        // ejecutamos la función play, para que se escuche el sonido asociado
        play(flag)          
        // creamos un bucle de inserción de la ultima imagen al principio
        $('#slider .slider-section:first').insertAfter('#slider .slider-section:last');
        // establecemos el criterio de parada
        if (flag == 9){
            // limpiamos el intervalos para reiniciarlo cada vez que se quiera
            clearInterval(interval);
            setTimeout(()=>{$('#slider .slider-section:first').insertAfter('#slider .slider-section:last');},3000)
            $('#slider').stop();
        }
        flag++;
    }, 3000);
}

// funcion para ejecutar el sonido asociado a cada una de las imagenes, 
// lo hago en vanilla Javascript, ya que jquery no tiene esa característica
function play(nr){
    var audio = document.getElementById("audio-"+nr);
    audio.play(); 
}

// creación del login dinámicamnete
function showLogin(method){
    $.getJSON('js/lang.json',function(json){
        if(!localStorage.getItem("lang")){
            localStorage.setItem("lang", "es")
        }
    
        //  utilizamos el localstorage para guardar la variable lang y así al recargar la págiuna que se
        //  quede en el idioma que estaba. Por defecto aparecerá en Castellano
    
        let def = localStorage.getItem("lang");
        $('.lang').each((index, value)=> { 
            $(this).text(json[def][$(this).attr('key')]);             
        });
    
        $('.translate').click(()=> {
            let language = $(this).attr("id");
            localStorage.setItem("lang", language)
            $('.lang').each(function(index, value) { 
                $(this).text(json[language][$(this).attr('key')]); 
                           
            });
        });
    
    });
    $("section").children().remove();
    $("#index").removeClass('active');
    $("#contact").removeClass('active');
    $("#login").addClass('active');
    $(".text-form").children().remove();
    $("section").append("<fieldset class='login-fieldset'><div class=\"section-form loginform\"><form method='POST' action='./login.php' class='personal-data'><span class='lang' key='user' >Usuario</span><input name='user' id='user' type='text'><span class='lang' key='pass'> Password</span><input name='pass' id='password' type='password'><button class='button' type='submit'><span class='lang' key='login'>Login</span></button><button class='button' class='lang' key='cancel' onclick='location.reload()' id='cancelbtn' class='button'><span class='lang' key='cancel'>Cancel</span></button></form></div></fieldset>")

}

/*  método de obtención de los idiomas mediante un archivo JSON
    creamos una funcion de validación para cada uno de los campos de Json*/

$.getJSON('js/lang.json',function(json){
    if(!localStorage.getItem("lang")){
        localStorage.setItem("lang", "es")
    }

    /*  utilizamos el localstorage para guardar la variable lang y así al recargar la página que se
        quede en el idioma que estaba. Por defecto aparecerá en Castellano*/

    let def = localStorage.getItem("lang");
    $('.lang').each(function(index, value) { 
        $(this).text(json[def][$(this).attr('key')]);             
    });
    
    $('.translate').click(function() {
        let language = $(this).attr("id");
        localStorage.setItem("lang", language)
        $('.lang').each(function(index, value) { 
            $(this).text(json[language][$(this).attr('key')]);           
        });
    });
    
});

/* Petición ajax para obtener todos los bloques quee tenemos almacenados en base de datos*/
function showAllBlocks(method){
    $('contenedor-slider').hide()
    $.ajax({
        url:'./data.php',
        type:'POST',
        data: {'method': method},
        dataType:'json',
        success: function(response) {
            let template = "";
            response.forEach((element) => {

                template += "<div class=\"block-control\"><img class=\"imageblock\"src='./img/"+element.img+".jpg'><button onclick=\"showElementsOfBlock('showElementsOfBlock',"+element.id_block+", '"+element.description+"')\" class=\"button blockButton\" id=\"btn-"+element.id_block+"\"><span class=\"lang\" key=\"bloqBut\">Bloque</span> "+element.id_block+"</button></div>"  
            });
            $('#blockOpt').html(template);
        }
    });

}
/* Petición Ajax para mostrar todos los elementos de un bloque y poder ejecutar el juego 
    params: 
        method: string para posterior busqueda en data.php
        idBlock: int para mostrar los elementos delbloque asociado
        description: string que mostraremos en la primera iteración del slide
*/
function showElementsOfBlock(method, idBlock , description){
    $('.contenedor-slider').css({'display':'block'});
    $('#blockOpt').empty()
    let counter = 0;
    $.ajax({
        url:'./data.php',
        type:'POST',
        data: {'method': method, 'id_block': idBlock},
        dataType:'json',
        success: function(response) {
            let template = "";
            template +="<section class=\"slider-section\"><p>"+description+"</p></section>"
            response.forEach((element) => {
                template +="<section class=\"slider-section\"><img class=\"slider-img\" src=\"./img/elementos/block-"+idBlock+"/"+element.img+".jpg\"><audio id=\"audio-"+counter+"\" src=\"./img/elementos/block-"+idBlock+"/sounds/"+element.sound+"-es.mp3\"></audio></section>"
                counter++;
            });
            $('#slider').html(template);
        }
    });
    
    $('#btn-stop').css({'display':'block'})
    $('#btn-play').css({'display':'block'})
    $('#btn-back').css({'display':'block'})
    $('#btn-prev').css({'display':'block'})
    $('#btn-next').css({'display':'block'})
}


/* Función para enviar emails de contacto mediante AJAX*/
function sendMail(method){

    let name = $('#fname').val()
    let surname = $('#lname').val()
    let address = $('#address').val()
    let mail = $('#email').val()
    let phoneNumber = $('#phoneNumber').val()
    
    $.ajax({
        url:'./data.php',
        type:'POST',
        data: {'method': method, 'to': mail , 'name': name, 'surname':surname, 'address':address , 'phoneNumber':phoneNumber},
        dataType:'json',
        success: ()=> {
            alert('Se ha enviado el correo Correctamente')
            $("#contactForm")[0].reset();  
        }
    });
}
    












