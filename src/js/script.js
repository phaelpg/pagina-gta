const btn = document.querySelector(".btn-plataforma")
const plataformas = document.querySelector(".btn-plataforma .plataformas")

btn.addEventListener("click", () => {
  plataformas.classList.toggle("ativo")
})
