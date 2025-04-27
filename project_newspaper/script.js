function crearNoticias(
  titulo = "",
  descripcion = "",
  categoria = "",
 /*  publico = true */
) {
  /* let noticia = {
        titulo:titulo,
        descripcion: descripcion,
        categoria : categoria,
        publico : publico,
        Fecha : new Date().toLocaleString()
    } */
  const muro = document.getElementById("muroNoticias");
  const crearDivNoticia = document.createElement("div");
  const crearTituloNoticia = document.createElement("h2");
  const crearDescripcionNoticia = document.createElement("p");
  const crearCategoriaNoticia = document.createElement("p");
  const crearTipoDeAcceso = document.createElement("p");
  const crearFechaNoticia = document.createElement("p");
  let fechaHoy = new Date().toLocaleString();



  crearTituloNoticia.textContent=titulo;
  crearDescripcionNoticia.textContent=descripcion;
  crearCategoriaNoticia.textContent=categoria;
  crearFechaNoticia.textContent=fechaHoy;

  crearDivNoticia.classList.add("noticia");





  crearDivNoticia.appendChild(crearTituloNoticia);
  crearDivNoticia.appendChild(crearDescripcionNoticia);
  crearDivNoticia.appendChild(crearCategoriaNoticia);
  crearDivNoticia.appendChild(crearFechaNoticia);

  muro.appendChild(crearDivNoticia);
}



function generarNoticia(event) {
   event.preventDefault();
  const tituloNoticia = document.getElementById("titulo-creacion-formulario");
  const contenidoNoticia = document.getElementById("descripcion");
  const fechaNoticia = document.getElementById("fechaNoticia");
  const categoriaNoticia = document.getElementById("categoria");
  const accesoPublico = document.getElementById("accesoPublico");

  let titulo = tituloNoticia.value,
    contenido = contenidoNoticia.value,
    categoria = categoriaNoticia.value,
    publico = accesoPublico.checked;
   
   console.warn(typeof publico)


  crearNoticias(titulo,contenido,categoria)
}
