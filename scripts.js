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



// var listItem = document.querySelectorAll('li');
// for ( i = 0; i < listItem.length; i++){

//     var colorValue = window.getComputedStyle(listItem[i]).getPropertyValue('color');

//     // if (colorValue == "rgb(58, 152, 185)"){
//     //     listItem[i].addEventListener('mouseover', function() {
//     //         this.style.color = "rgb(242, 76, 76)";
//     //     });

//     // }

//     // if (colorValue == "rgb(255, 255, 255)"){
//     //     listItem[i].addEventListener('mouseover', function() {
//     //         this.style.color = "rgb(58, 152, 185)";
//     //     })
//     // }

//     listItem[i].addEventListener('mouseover', function() {
//         if (colorValue == "rgb(58, 152, 185)"){
//             this.style.color = "rgb(242, 76, 76)";
//         } else if (colorValue == "rgb(242, 76, 76)"){
//             this.style.color = "rgb(255, 255, 255)";
//         } else {
//             this.style.color = "rgb(58, 152, 185)";
//         }
//     });


    
// }



window.addEventListener('mouseover', function() {

    console.log(window.getComputedStyle(this).getPropertyValue('color'));

});