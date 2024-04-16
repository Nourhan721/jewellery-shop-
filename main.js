//the date in the footer
const date = document.getElementById('date')
date.innerHTML=new Date().getFullYear()

//the nav
const navbar =document.getElementById('nav')
// for the up button
//const upLink= document.getElementsByClassName('uplink')
window.addEventListener('scroll',function(){
       const scrollHeight =window.scrollY
       const navHeight = navbar.getBoundingClientRect().height
       if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
       }else{
        navbar.classList.remove('fixed-nav')

        //for the button
       /* if(scrollHeight > 300){
            upLink.classList.add('show-up')
        }else{
            upLink.classList.remove('show-up')
        }*/
    }
})

//scroll behavior
const scrollLinks = document.querySelectorAll('.scrol')
scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()
        //navigate to the part
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element=document.getElementById(id)
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
          position = position - navHeight;
        }

        window.scrollTo({
          left: 0,
          top: position,
        })
      });
    });
