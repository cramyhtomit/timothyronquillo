window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    if (scrolled >= 100){
        document.getElementById('panda').style.transform = 'translateY(100px)';
        document.getElementById('panda').style.opacity = 0;
        document.getElementById('panda').style.transition = 'transform .1s ease, opacity .1s ease';
    }
});


document.getElementById('panda').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(100px)';
    this.style.opacity = 0;
    this.style.transition = 'transform .3s ease, opacity .5s ease';

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


