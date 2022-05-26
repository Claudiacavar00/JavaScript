 //function mensaje(){
   //  alert ("mensaje");
 //}
 
 window.addEventListener('DOMContentLoaded')
    console.log(location.href);
        //location.href="http://www.google.es";
    setTimeout(()=>{ location.assign("http://www.google.es")},5000); //espera 5 segundos y cambia de pagina


 window.addEventListener('DOMContentLoaded',()=>{

    document.querySelector("button").addEventListener("click",mensaje)
    document.querySelector("button:nth-child(2)").addEventListener("click",()=>{
        //alert(evt.typer);
        const nombre="pili";
        evt.target.textContent="Hola";
        document.querySelector("div").innerHTML='<span>Texto generado desde JS</span>';


    });

    document.querySelector('button:nth-of-type(3)').addEventListener("click",function (evt){
        evt.target.style.backgroundColor="yellow";
        evt.target.style.width="w";
    });

   //const primero= document.querySelector('article#primero');
   // primero.querySelector("div");
    
   document.querySelector('button:last-of-type ()').addEventListener("click",()=>{
        evtelement.classList.toggle('estilos');
   });




 });