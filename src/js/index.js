console.log('mostrar  a dffdfdfeefefefeo document', document);

console.log(document.querySelector(".btn-trailer"));

const btnTrailer = document.querySelector(".btn-trailer");

btnTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
});

const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
});




