const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 18,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let hideCard = document.querySelector(".blogs__hide-card")
let blogsButton = document.querySelector(".blogs__btn-bottom")
blogsButton.addEventListener('click', function () {
    hideCard.style.display = 'flex', blogsButton.style.display = 'none'
})
let burger = document.querySelector('.burger')
let list = document.querySelector('.header__list')
let body = document.querySelector('body')
let Interiorbutton = document.querySelector('.interior__btn')
burger.onclick = function () {
    burger.classList.toggle('burger_active')
    list.classList.toggle('header__list_active')
    body.classList.toggle('hidden')
    Interiorbutton.style.display = 'none'
}
let contact = document.querySelector(".contact__content")
let JoinButton = document.querySelector(".join__btn")
JoinButton.onclick = function () {
    contact.classList.toggle('contact__active')
}
