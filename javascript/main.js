
//DOM 
//  querySelector / querySelectorAll
/*let links = document.querySelectorAll("a");

links.forEach( function(link){
    console.log(link);
});*/

let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        // Quitarle las clases de animacion que ya tiene
        content.classList.remove("fadeInDown");

        // Agregar clases para animar su salida  
        content.classList.add("fadeOutUp");


        //lo realiza en cierto tiempo una sola vez
        setTimeout(function () {
            location.href = "/";
        }, 1000);
        //lo realiza en cierto tiempo constantemente
        //setInterval

        return false;
    });
});

