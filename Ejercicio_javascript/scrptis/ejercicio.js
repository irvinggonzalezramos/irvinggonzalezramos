

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "blue";
    console.log(variable_album);
}

/*function cambiartamano(){
    var image=document.getElementsByClassName("image");
    image.style.width="450px";
    image.style.height = "350px";
    document.getElementsByClassName("image").innerHTML=document.getElementsByClassName("image").style.width;
}*/

function cambiartamano(){
    const tamano=document.getElementsByClassName("image");
    const tamano1= tamano[0];
    tamano1.style.width="50px";
    tamano1.style.height="auto";
    console.log(tamano1);
    }
