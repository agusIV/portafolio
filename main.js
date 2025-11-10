const contenedor = document.getElementById("contenedor")
const cabezera = document.getElementById("cabezera")
const sombra = document.getElementById("sombra")
const botonBarra = document.getElementById("botonBarra")
const cerrarBarra = document.getElementById("cerrarBarra")
const seccionCaja = document.getElementById("seccionCaja")
const seccion = document.getElementById("seccion")
const seccionElemento = document.getElementsByClassName("seccionElemento")
const inicio = document.getElementById("inicio")
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
const github = document.getElementById("github")
const final = document.getElementById("final")
const controladorAnimaciones = [false, false, false, false, false]
const tl = gsap.timeline();

let cabezeraAbierta = "570px"
let sombraAbierta = "475px"
let seccionCajaAbierta = "550px"
let seccionCajaAbiertaMargen = "140px"
let sombraAbiertaMargen = "60px"
let menu = false
let animando = false;

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
  sombra.style.height = "40px"
  sombra.style.width = "320px"
  sombra.style.marginLeft = "8px"
  sombra.style.marginTop = "12px"
  
  personal.style.marginTop = "75px"
  personal.style.height = "200px"

  perfil.style.marginBottom = "20px"
  
  educacion.style.height = "365px"  

  experiencia.style.height = "330px"  
  experiencia.style.marginTop = "-20px"
  experiencia.style.marginBottom = "10px"

  proyectos.style.height = "125px"  
  proyectos.style.marginBottom = "10px"

  herramientas.style.height = "370px"
  herramientas.style.marginBottom = "10px"
}

let cabezeraCerrada = window.getComputedStyle(cabezera).height
let seccionCajaCerrada = window.getComputedStyle(seccionCaja).height
let sombraCerrada = window.getComputedStyle(sombra).height
let sombraCerradaMargen = window.getComputedStyle(sombra).marginTop
let seccionDesplazamiento = ["10px", "-50px", "-110px", "-170px", "-230px", "-290px", "-350px", "-410px"]
let ultimaSeccion = seccionDesplazamiento[0]

personal.remove()
perfil.remove();
educacion.remove();
experiencia.remove();
proyectos.remove();
herramientas.remove();
github.remove();
final.remove()

function scrollElemento(elementoId) {
  const elemento = document.getElementById(elementoId);
  if (elemento) {
    elemento.scrollIntoView({
      block: 'center', // Centra verticalmente
    });
  }
}

botonBarra.addEventListener('click', function() {
  if (!menu && !animando){
    Array.from(seccionElemento).forEach(child => {
      child.classList.add('decorarSeccion');
      child.addEventListener("click", function(){
        scrollElemento(this.dataset.nombre)
        ultimaSeccion = seccionDesplazamiento[this.dataset.seccion] 
      })
    });
    menu = true;
    animando = true
    const tlAbrir = gsap.timeline({
      onComplete: () => {
        animando = false;
      }
    });

    tlAbrir
    .to(botonBarra, {
      scale: 0,
      duration: 0.25,
      onComplete: function() {
        botonBarra.remove();
      }
    })
    .to(cabezera,{
      height: cabezeraAbierta,
      duration: 1
    }, "+=0")
    .to(sombra,{
      height: sombraAbierta,
      marginTop: sombraAbiertaMargen,
      duration: 1
    }, "<")
    .to(seccionCaja,{
      marginTop: seccionCajaAbiertaMargen,
      height: seccionCajaAbierta,
      duration: 1
    }, "<")
    .to(seccion, {
      marginTop: "0px",
      duration: 1
    }, "<")
    .to(cerrarBarra, {
      cursor: "pointer",
      scale: 1,
      opacity: 1,
      duration: 1
    }, "<")
  }
});
  
cerrarBarra.addEventListener('click', function() {
  if (menu && !animando){
    animando = true
    const tlCerrar = gsap.timeline({
      onComplete: () => {
        menu = false;
        animando = false;
        document.body.classList.remove('stop-scrolling');
        Array.from(seccionElemento).forEach(child => {
          child.classList.remove('decorarSeccion');
        });
      }
    });

    tlCerrar
    .add(() => {
      cabezera.appendChild(botonBarra)
    })
    .to(cerrarBarra, {
      cursor: "",
      scale: 0,
      opacity: 0,
      duration: 0.5
    }, "<")
    .to(cabezera,{
      height: cabezeraCerrada,
      duration: 1,
    }, "+=0")
    .to(seccionCaja, {
      marginTop: "0px",
      height: seccionCajaCerrada,
      duration: 0.5
    }, "<")
    .to(sombra, {
      height: sombraCerrada,
      marginTop: sombraCerradaMargen,
      duration: 1
    }, "<")
    .to(seccion, {
      marginTop: ultimaSeccion,
      duration: 1
    }, "<")
    
    .to(botonBarra, {
      scale: 1,
      opacity: 1,
      top: 25,
      duration: 1,
    }, "+=0")
  }
})

function observarElementoCentro(elemento, callback) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // Verificar si el elemento está intersectando
        if (entry.isIntersecting) {
          callback(true, entry);
        } else {
          callback(false, entry);
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: '-50% 0px -50% 0px', // Solo el centro vertical
      threshold: 0 // Cualquier intersección cuenta
    }
  );

  observer.observe(elemento);
  return observer;
}

observarElementoCentro(inicio, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[0]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[0],
        duration: 0.5,
      })
    }
  }
});

tl
.to(inicio, {
  opacity: 1,
  duration: 1
})
.set(inicio.children[1],{
  x:-210,
  y:-190,
  duration: 0
}, "<")
.to(inicio.children[1], {
  text: "bienvenido a mi portafolio!!",
  duration: 2
}, "+=1")
.set(inicio.children[2],{
  x:220,
  y:-190,
  duration: 0
}, "<")
.to(inicio.children[2], {
  text: "aca te voy a mostrar mas sobre mi",
  duration: 2
}, "+=1")
.to(cabezera, {
  opacity: 1,
  duration: 0
}, "+=1")
.to("#sombra", {
  opacity: 1,
  duration: 0
}, "<")
.from(cabezera, {
  y:-110,
  duration: 3
}, "+=1")
.from("#sombra", {
  y:-110,
  duration: 3
}, "<")
.add(() => { contenedor.appendChild(final)}, "+=0.1")
.to(contenedor, {
  height: "3100px",
  duration: 0
}, "<")
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

observarElementoCentro(personal, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[1]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[1],
        duration: 0.5,
      })
    }
  }
});

observarElementoCentro(perfil, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[2]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[2],
        duration: 0.5,
      })
    }
  }
});

function esperarAVisible(elemento) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          obs.disconnect()
          resolve(true)
        }
      })
    },{ threshold: 0.5 })
    observer.observe(elemento)
  })
}

if (await esperarAVisible(educacion)) {
    tl
    .add(() => { contenedor.appendChild(experiencia) })
    .to(educacion, {
      opacity: 1,
      duration: 0
    }, "+=0.1")
    .from(educacion,{
      x: 800,
      duration:1
    }, "+=0.1")
    controladorAnimaciones[0] = true      
}
observarElementoCentro(educacion, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[3]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[3],
        duration: 0.5,
      })
    }
  }
});
if (await esperarAVisible(experiencia)) {
  tl
  .add(() => { contenedor.appendChild(herramientas) }, "+=0.1")
  .to(experiencia, {
    opacity: 1,
    duration: 0
  }, "+=0.1")
  .from(experiencia,{
    x: -800,
    duration:1
  }, "+=0.1")
  controladorAnimaciones[1] = true
}
observarElementoCentro(experiencia, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[4]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[4],
        duration: 0.5,
      })
    }
  }
});

if (await esperarAVisible(herramientas)) {
  tl
  .add(() => { contenedor.appendChild(proyectos) }, "+=0.1")
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
  controladorAnimaciones[2] = true
}
observarElementoCentro(herramientas, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[5]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[5],
        duration: 0.5,
      })
    }
  }
});

if (await esperarAVisible(proyectos)) {
  tl
  .add(() => { contenedor.appendChild(github) }, "+=0.1")
  .to(proyectos, {
    opacity: 1,
    duration: 1
  }, "+=0.1")
  controladorAnimaciones[3] = true
}
observarElementoCentro(proyectos, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[6]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[6],
        duration: 0.5,
      })
    }
  }
});

if (await esperarAVisible(github)) {
  controladorAnimaciones[4] = true
  tl
  .to(github, {
    opacity: 1,
    duration: 0
  }, "+=0.1")
  .from(github, {
    x: -500,
    y: 100,
    duration: 1
  }, "+=0.1")
  .set(final.children[1],{
  x:-210,
  y:-190,
  duration: 0
  }, "<")
  .to(final.children[1], {
    text: "ojala te haya gustado!!",
    duration: 2
  }, "+=1")
  .set(final.children[2],{
    x:220,
    y:-190,
    duration: 0
  }, "<")
  .to(final.children[2], {
    text: "espero tu contacto",
    duration: 2
  }, "+=1")
}
observarElementoCentro(github, (estaEnCentro, entry) => {
  if (estaEnCentro) {
    ultimaSeccion = seccionDesplazamiento[6]
    if (!menu) {
      gsap.to(seccion, {
        marginTop: seccionDesplazamiento[6],
        duration: 0.5,
      })
    }
  }
});