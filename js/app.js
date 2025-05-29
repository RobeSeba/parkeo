let contenedorPagos = document.getElementById("contenedor-pagos-Mensual");
let contenedorPagosVirtual= document.getElementById("contenedor-pagos-anual");
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