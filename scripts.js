window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    if (scrolled >= 100){
        this.document.getElementById('arrow').style.opacity = "0";
        this.document.getElementById('arrow').style.transform = "scale(5)";
    }else{
        this.document.getElementById('arrow').style.opacity = "1";
        this.document.getElementById('arrow').style.transform = "scale(1)";
    }
    if (scrolled >= 900){
        this.document.getElementById('imAnIntrovert').style.opacity = "1";
    } 
});



var listItem = document.querySelectorAll('li');
var white = "rgb(255, 255, 255)";
var red = "rgb(233, 100, 121";
var blue = "rgb(58, 152, 185)";
for ( i = 0; i < listItem.length; i++){

    listItem[i].addEventListener('mouseover', function() {

        var colorValue = window.getComputedStyle(this).getPropertyValue('color');
        if (colorValue == white){
            this.style.color = red;
        } else if (colorValue == blue){
            this.style.color = white;
        } else {
            this.style.color = blue;
        }

    });

}


