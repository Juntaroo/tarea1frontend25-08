const form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const datos = new FormData(e.target);

    const datosingresados = Object.fromEntries(datos.entries());

    console.log(datosingresados)
})
