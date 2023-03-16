window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    if (scrolled >= 100){
        this.document.getElementById('arrow').style.opacity = "0";
    }else{
        this.document.getElementById('arrow').style.opacity = "1";
    }
});