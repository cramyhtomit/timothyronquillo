window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    if (scrolled >= 100){
        this.document.getElementById('arrow').style.opacity = "0";
        this.document.getElementById('arrow').style.transform = "scale(10)";
    }else{
        this.document.getElementById('arrow').style.opacity = "1";
        this.document.getElementById('arrow').style.transform = "scale(1)";
    }

    if (scrolled >= 900){
        this.document.getElementById('imAnIntrovert').style.opacity = "1";
    } 
});