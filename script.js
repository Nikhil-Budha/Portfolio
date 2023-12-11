let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
}  )

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Web Designer!', 'Student'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})

