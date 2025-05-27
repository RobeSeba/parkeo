let contenedorPagos = document.getElementById("contenedorPagosPresencial");
let contenedorPagosVirtual= document.getElementById("contenedorPagosVirtual");
let pagoVirtual = document.getElementById("pago-virtual");
let pagoPresencial = document.getElementById("pago-presencial");

pagoVirtual.addEventListener("click",()=>{
    contenedorPagos.style.display="none";
    contenedorPagosVirtual.style.display="block";
})

pagoPresencial.addEventListener("click",()=>{
    contenedorPagos.style.display="block";
    contenedorPagosVirtual.style.display="none";
})