// NAVBAR
const togglenavbar = document.querySelector('.toggle-navbar')
const navbarMenu = document.querySelector('.navbar-menu')

togglenavbar.addEventListener('click', function() {
    navbarMenu.classList.toggle('show')
})







// LESSON
const lessonWrapper = document.querySelector('.lesson-wrapper')
const lesson = document.querySelector('.lesson-wrapper > div')
const scrollLeft = document.querySelector('.scroll-left')
const scrollRight = document.querySelector('.scroll-right')

scrollLeft.addEventListener('click', function() {
    lessonWrapper.scrollLeft -= lesson.offsetWidth
})

scrollRight.addEventListener('click', function() {
    lessonWrapper.scrollLeft += lesson.offsetWidth
})