//filtro

function aplicarFiltro() {
  const filtro = document.querySelector('select[name="filtro"]').value;
  const noticias = document.querySelectorAll('.noticia');

  noticias.forEach(noticia => {
    const categoria = noticia.id;
    if (categoria === filtro) {
      noticia.style.display = 'grid';
    } else {
      noticia.style.display = 'none';
    }
  });
}

// Opción para el botón "Restablecer"
document.getElementById('restablecer1').addEventListener('click', function () {
  const noticias = document.querySelectorAll('.noticia');
  noticias.forEach(noticia => {
    noticia.style.display = 'grid';
  });
});



// Crear noticias

// Crear noticias


function crearNoticias(
  titulo = "",
  descripcion = "",
  categoria = "",
  accesoPublico = ""
) {
  const muro = document.getElementById("muroNoticias");
  const crearDivNoticia = document.createElement("div");


  // Elementosx
  const crearTituloNoticia = document.createElement("h2");
  const crearDescripcionNoticia = document.createElement("p");
  const crearCategoriaNoticia = document.createElement("p");
  const crearFechaNoticia = document.createElement("p");
  const crearContenedorBotones = document.createElement('div');
  const crearIBotones = document.createElement('i');
  const crearSpan1Botones = document.createElement('span');
  const crearIBotones2 = document.createElement('i');
  const crearSpan2Botones = document.createElement('span');

  let fechaHoy = new Date().toLocaleString();

  // Contenido
  crearTituloNoticia.textContent = titulo;
  crearDescripcionNoticia.textContent = descripcion;
  crearCategoriaNoticia.textContent = categoria;
  crearFechaNoticia.textContent = fechaHoy;

  // Clases
  crearDivNoticia.classList.add("noticia");
  crearTituloNoticia.classList.add("titulo_noticia");
  crearDescripcionNoticia.classList.add("contenido");
  crearCategoriaNoticia.classList.add("categoriaNoticia");
  crearFechaNoticia.classList.add("fechaNoticia");
  crearContenedorBotones.classList.add("botones-reaccion");

  // Botones like/dislike
  crearIBotones.classList.add("fa", "fa-thumbs-up", "like");
  crearSpan1Botones.classList.add("contador", "like-count");
  crearSpan1Botones.textContent = "0";
  
  crearIBotones2.classList.add("fa", "fa-thumbs-down", "dislike");
  crearSpan2Botones.classList.add("contador", "dislike-count");
  crearSpan2Botones.textContent = "0";

  crearDivNoticia.id = categoria;

  // Construir la estructura
  crearContenedorBotones.appendChild(crearIBotones);
  crearContenedorBotones.appendChild(crearSpan1Botones);
  crearContenedorBotones.appendChild(crearIBotones2);
  crearContenedorBotones.appendChild(crearSpan2Botones);

  crearDivNoticia.appendChild(crearTituloNoticia);
  crearDivNoticia.appendChild(crearDescripcionNoticia);
  crearDivNoticia.appendChild(crearCategoriaNoticia);
  crearDivNoticia.appendChild(crearFechaNoticia);
  crearDivNoticia.appendChild(crearContenedorBotones);

  if(accesoPublico === true){
    muro.appendChild(crearDivNoticia);
  }
  

  // Asignar eventos de like y dislike para la noticia nueva
  crearIBotones.addEventListener('click', () => {
    let count = parseInt(crearSpan1Botones.textContent);
    crearSpan1Botones.textContent = count + 1;
    crearIBotones.style.color = 'lightgreen';
  });

  crearIBotones2.addEventListener('click', () => {
    let count = parseInt(crearSpan2Botones.textContent);
    crearSpan2Botones.textContent = count + 1;
    crearIBotones2.style.color = 'lightcoral';
  });
  
  const noticia = {
    titulo,
    descripcion,
    categoria,
    fecha: fechaHoy
  };

  let noticiasGuardadas = JSON.parse(localStorage.getItem("noticias")) || [];
  noticiasGuardadas.push(noticia);
  localStorage.setItem("noticias", JSON.stringify(noticiasGuardadas));

}
function cargarNoticias() {
  const noticiasGuardadas = JSON.parse(localStorage.getItem("noticias")) || [];
  noticiasGuardadas.forEach(noticia => {
    crearNoticias(noticia.titulo, noticia.descripcion, noticia.categoria,true);
  });
}
function generarNoticia(event) {
  event.preventDefault();

  const tituloNoticia = document.getElementById("titulo-creacion-formulario");
  const contenidoNoticia = document.getElementById("descripcion");
  const categoriaNoticia = document.getElementById("categoria");
  const accesoPublico = document.getElementById("accesoPublico");

  let titulo = tituloNoticia.value;
  let contenido = contenidoNoticia.value;
  let categoria = categoriaNoticia.value;
  let acceso = accesoPublico.checked;
  console.info(acceso);
  
  crearNoticias(titulo, contenido, categoria, acceso);

  // Opcional: limpiar el formulario después de crear la noticia
  tituloNoticia.value = "";
  contenidoNoticia.value = "";
  categoriaNoticia.value = "";
  accesoPublico.checked = false;
}


//Eventos para el like

document.querySelectorAll('.noticia').forEach(noticia => {
  const likeIcon = noticia.querySelector('.like');
  const dislikeIcon = noticia.querySelector('.dislike');
  const likeCount = noticia.querySelector('.like-count');
  const dislikeCount = noticia.querySelector('.dislike-count');

  likeIcon.addEventListener('click', () => {
    let count = parseInt(likeCount.textContent) ;
    likeCount.textContent = count + 1 ; 
    likeIcon.style.color = 'lightgreen';
  });

  dislikeIcon.addEventListener('click', () => {
    let count = parseInt(dislikeCount.textContent) ;
    dislikeCount.textContent = count + 1 ;
    dislikeIcon.style.color = 'lightcoral';
  });
  
}); 

document.addEventListener('DOMContentLoaded', cargarNoticias);