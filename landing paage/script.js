const navMenu =document.getElementById('nav-menu'),

navToggle = document.getElementById('nav-toggle'),

navClose = document.getElementById('nav-close')



if (navToggle) {

    navToggle.addEventListener('click', () => {

        navMenu.classList.add("show-menu")

    })

}

/* Menu hidden */

if (navClose) {

    navClose.addEventListener('click', () => {

        navMenu.classList.remove('show-menu')

})

}
const navLink=document.querySelectorAll('.nav__link')
const LinkAction=()=>
{
const navMenu=document.getElementById('nav__menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))
const scrollHeader=()=>
{
const blurHeader=document.getElementById('header')
this.scroolY>=50? header.classList.add('blur-header'):header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

const scrollUp = () =>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >= 350?scrollUp.classList.add('show-scroll')
                                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {

const scrollDown = window.scrollY

sections.forEach(current => {

const sectionHeight = current.offsetHeight,

sectionTop = current.offsetTop - 58,

sectionId = current. getAttribute('id'), 
sectionsClass = document.querySelector('.nav__menu a[href=' + sectionId+']')

if(scrollDown > sectionTop && scrollDown <=  sectionTop + sectionHeight)
{

sectionsClass.classList.add('active-link')

}

else{
    sectionsClass.classList.remove('active-link')
}
}
)
}

window.addEventListener('scroll', scrollActive)


