 function mensaje(){
     alert ("mensaje");
 }
 
 
 window.addEventListener('DOMContentLoaded',()=>{

    document.querySelector("button").addEventListener("click",mensaje)
    document.querySelector("button:nth-child(2)").addEventListener("click",()=>{
        //alert(evt.typer);
        const nombre="pili";
        evt.target.textContent="Hola";
        document.querySelector("div").innerHTML='<span>Texto generado desde JS</span>';


    });

    document.querySelector('');

    

 });