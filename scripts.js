
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



document.getElementById('pandaUp').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-100px)';
    this.style.transition = 'transform .5s ease';

});

document.getElementById('pandaUp').addEventListener('mousedown', function() {
    this.style.transform = 'translateY(-100px)';
    this.style.transition = 'transform .5s ease';

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
        document.getElementById('pokeMe').style.visibility = 'visible';
    }, 2000);

    var count = 0;
    let intervalID = setInterval(function(){     
        randomKulit();
        count++;
        console.log(count);
    }, Math.floor(Math.random() * 3000) + 1000);   


}



function randomKulit(){
    var pandaSwitch = Math.floor(Math.random() * 2) * 1;
    if (pandaSwitch == 1){
        document.getElementById('pandaDown').style.transform = 'translateY(0px)';
    } else {
        document.getElementById('pandaUp').style.transform = 'translateY(0px)';
    }
}