
document.getElementById('pandaDown').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(100px)';
    this.style.transition = 'transform .5s ease';

    document.getElementById('me').style.opacity = 0;
    document.getElementById('about').style.opacity = 1;

    document.getElementById('imAnIntrovert').style.opacity = 1;
});

document.getElementById('pandaDown').addEventListener('mousedown', function() {
    this.style.transform = 'translateY(100px)';
    this.style.transition = 'transform .5s ease';

    document.getElementById('me').style.opacity = 0;
    document.getElementById('about').style.opacity = 1;

    document.getElementById('imAnIntrovert').style.opacity = 1;
});




var listItem = document.querySelectorAll('li');
var white = "rgb(255, 255, 255)";
var red = "rgb(233, 100, 121";
var blue = "rgb(58, 152, 185)";
for ( i = 0; i < listItem.length; i++){

    listItem[i].addEventListener('mouseover', function() {
        
            if (document.getElementById('about').style.opacity == 1){
                var colorValue = window.getComputedStyle(this).getPropertyValue('color');
                if (colorValue == white){
                    this.style.color = red;
                } else if (colorValue == blue){
                    this.style.color = white;
                } else {
                    this.style.color = blue;
                }
            }
      
    });

}


window.onload = function() {
    setTimeout(function() {
        document.getElementById('pandaDown').style.transform = 'translateY(0px)';               
    }, 2000);
}

var count = 0;
let intervalID = setInterval(function(){     
    document.getElementById('pandaDown').style.transform = 'translateY(0px)';
    count++;
    console.log(count);
    if (count > 3){
        clearInterval(intervalID);
    }
}, Math.floor(Math.random() * 7000) + 4000);   

