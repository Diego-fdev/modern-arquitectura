const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "fade",
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper-about", {
  // Optional parameters
  loop: true,
  autoplay: {
    enabled: true,
    delay: 3000,
  },
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
  pagination: {
    el: ".swiper-pagination",
  },
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

const swiper5 = new Swiper(".swiper-clientes", {
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});
const swiper6 = new Swiper(".swiper-post-blog", {
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
const swiper7 = new Swiper(".swiper-post-relacionados", {
  spaceBetween: 10,
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

/*MENU MOBILE */

const menuMobile = document.querySelector(".modal-mobile");
const linksMenuMobile = document.querySelectorAll(".link-nav-mobile");
const btnCloseMenuMobile = document.querySelector(".btn-close-mobile-nav");
const btnOpenMenuMobile = document.querySelector(".btn-mobile-nav");

const toggleMenuMobile = (accion) => {
  if (accion === "abrir") {
    menuMobile.classList.add("visible", "pointer-events-auto", "opacity-100");
    menuMobile.classList.remove(
      "invisible",
      "pointer-events-none",
      "opacity-0"
    );
  } else {
    menuMobile.classList.remove(
      "visible",
      "pointer-events-auto",
      "opacity-100"
    );
    menuMobile.classList.add("invisible", "pointer-events-none", "opacity-0");
  }
};

btnOpenMenuMobile.addEventListener("click", () => {
  toggleMenuMobile("abrir");
});
btnCloseMenuMobile.addEventListener("click", () => {
  toggleMenuMobile("cerrar");
});

linksMenuMobile.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenuMobile("cerrar");
  });
});
