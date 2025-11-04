const contenedor = document.getElementById("contenedor")
const navbar = document.querySelector(".navbar")
const personal = document.getElementById("personal")
const perfil = document.getElementById("perfil")
const educacion = document.getElementById("educacion")
const experiencia = document.getElementById("experiencia")
const proyectos = document.getElementById("proyectos")
const herramientas = document.getElementById("herramientas")
const herramientasTitulo = document.getElementById("herramientasTitulo")
const herramientasIzq = document.getElementById("herramientasContenedorIzq")
const herramientasMed = document.getElementById("herramientasContenedorMed")
const herramientasDer = document.getElementById("herramientasContenedorDer")
const pie = document.getElementById("pie")

//document.body.appendChild();
const tl = gsap.timeline(); // Crear línea de tiempo

function esMovil() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (esMovil()) {
  console.log("movil");
  contenedor.style.width = "100%"
  document.querySelectorAll('h1').forEach(h1 => {
    h1.style.fontSize = "14px";
  });
  document.querySelectorAll('h2').forEach(h1 => {
    h1.style.fontSize = "13px";
  });
  document.querySelectorAll('h3').forEach(h1 => {
    h1.style.fontSize = "12px";
  });
  document.querySelectorAll('h5').forEach(h1 => {
    h1.style.fontSize = "10px";
  });
  document.querySelectorAll('h6').forEach(h1 => {
    h1.style.fontSize = "9px";
  });
  document.querySelectorAll('span').forEach(h1 => {
    h1.style.fontSize = "8px";
  });
  document.querySelectorAll('p').forEach(h1 => {
    h1.style.fontSize = "8px";
  });
  cabezera.style.width = "99%"
  cabezera.style.height = "50px"
  cabezera.children[1].style.right = "10px"
  cabezera.children[1].style.top = "1px"
  personal.style.marginTop = "75px"
  personal.style.height = "200px"
  educacion.style.height = "365px"  
  experiencia.style.height = "330px"  
  proyectos.style.height = "125px"  
  herramientas.style.height = "370px"
} else {
  console.log("compu");
}
personal.remove()
perfil.remove();
educacion.remove();
experiencia.remove();
proyectos.remove();
herramientas.remove();
pie.remove();

tl
.to(cabezera, {
  opacity: 1,
  duration: 0
})
.from(cabezera, {
  y:-110,
  duration: 3
}, "+=1")
.add(() => { contenedor.appendChild(personal) },"+=0.1")
.to(personal, {
  opacity: 1,
  duration: 1
}, "+=0.1")
.add(() => { contenedor.appendChild(perfil) }, "+=0.1")
.add(() => { contenedor.appendChild(educacion) }, "+=0.1")

.to(perfil, {
  opacity: 1,
  duration: 1
}, "+=0.1")
.add(() => { contenedor.appendChild(experiencia) }, "+=0.1")

.to(educacion, {
  opacity: 1,
  duration: 0
}, "+=0.1")
.from(educacion,{
  x: 800,
  duration:1
}, "+=0.1")
.add(() => { contenedor.appendChild(proyectos) }, "+=0.1")
.to(experiencia, {
  opacity: 1,
  duration: 0
}, "+=0.1")
.from(experiencia,{
  x: -800,
  duration:1
}, "+=0.1")
.add(() => { contenedor.appendChild(herramientas) }, "+=0.1")
.to(proyectos, {
  opacity: 1,
  duration: 1
}, "+=0.1")
.add(() => { contenedor.appendChild(pie) }, "+=0.1")
.to(herramientas, {
  opacity: 1,
  duration: 0
}, "+=0.1")
.to(herramientasTitulo, {
  opacity: 1,
  duration: 1
}, "+=0.1")
.from(herramientasMed, {
  y:500,
  duration: 1
}, "<")
.from(herramientasIzq, {
  x:-300,
  duration: 1
}, "+=0.1")
.from(herramientasDer, {
  x: 300,
  duration: 1
}, "<")
.to(pie, {
  opacity: 1,
  duration: 0
}, "+=0.1")
.from(pie, {
  x: -500,
  y: 100,
  duration: 1
}, "+=0.1")
