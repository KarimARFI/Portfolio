'use strict'; //mode JS plus restrictif au niveau des erreur accepté. Pour appliqué de bonne pratique au développeur
/* #########################################################"" */
// let infoCLick = document.getElementById('infoCLick');
// let info = document.getElementById('info');
// // 
// function dropDown(){
//     if(getComputedStyle(info).display != "none" && getComputedStyle(infoCLick).borderRadius != "2vmin") {
//         info.style.display = "none";
//         infoCLick.style.borderRadius = "2vmin";
//     }
//     else{
//         info.style.display = "block";
//         infoCLick.style.borderRadius = "2vmin 2vmin 0 0";
//     }
// }

// infoCLick.addEventListener('click', dropDown);


//click des accordeon et mise en top 
let accordionTop = document.getElementsByClassName("accordion-button");
// console.log(accordionTop);
accordionTop.forEach(element => {
    element.window.scrollTo(0,0);
});
