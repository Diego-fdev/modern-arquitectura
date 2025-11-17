const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper-about", {
  // Optional parameters
  loop: true,
  autoplay: true,
});

const swiper3 = new Swiper(".swiper-trabajos", {
  // Optional parameters
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
const swiper4 = new Swiper(".swiper-testimonios", {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

/*FILTRO PROYECTOS*/

const slidesProyectos = document.querySelectorAll(".slide-trabajo");
const filtrosProyectos = document.querySelectorAll(".filtro-proyecto");

const filterProyects = (filtro) => {
  filtrosProyectos.forEach((filtroProyecto) => {
    filtroProyecto.style.color = "black";
  });
  filtro.style.color = "#193cb8";
  if (filtro.dataset.tipo === "todos") {
    slidesProyectos.forEach((proyecto) => {
      proyecto.style.display = "flex";
    });
  } else {
    slidesProyectos.forEach((proyecto) => {
      if (proyecto.dataset.tipo === filtro.dataset.tipo) {
        proyecto.style.display = "flex";
      } else {
        proyecto.style.display = "none";
      }
    });
  }
};

filtrosProyectos.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    filterProyects(filtro);
  });
});
