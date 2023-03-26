'use strict';

/* ######################################################### */
/* DATE */ 
/* ######################################################### */
// création des tableaux.
let jour   = new Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');
let mois = new Array('Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juill', 'Juin,', 'Août', 'Sep', 'Oct', 'Nov', 'Déc');
// Création d'une instance de la classe "Date".
let today = new Date();

/* Affichage du contenu d'une partie du tableau directement dans la page HTML.
La méthode getDay() = renvoi un chiffre pour le jour de la semaine commence par 0 = dimanche.
La méthode getMonth() renvoi un chiffre pour le nom du mois commence par 0 = janvier. 
Selon les besoins on appel un des tableau avec la fonction native renvoyant un nombre en indice. ou simplement la fonction native de Date*/
document.getElementById("calendar").innerHTML=' '+jour[today.getDay()] +' '+today.getDate()+' '+mois[today.getMonth()]+' '+today.getFullYear();

/* ######################################################### */
/* POPOVER BOOSTRAP*/
/* ######################################################### */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* ######################################################### */
/* TOAST BOOSTRAP*/
/* ######################################################### */
const toastTrigger = document.getElementById('ToastBtn')
const ToastDiv = document.getElementById('ToastDiv')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(ToastDiv)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

/* ######################################################### */
/* CONTROL DU FORMULAIRE DE CONTACT */
/* ######################################################### */
/* regex des texte caractére alphanumérique, minus, maj, accent (fr, es, pt), espace de 3 à 20 caractères */
/*Si accent uniquement français : À-ÖØ-öø-ÿ */
let regexText = /^[\wÀ-ÿ\s]{3,20}$/;
/* telephone commence par 0 suivi d'un chiffre de 1 jusqu'a 7 sans 8 ni 9 suivi de groupe de 2 chiffres 4 fois*/
let regexTel = /^0[1234567](?:\d{2}){4}$/;
/* regex mail */ 
let regexMail = /^[\w_.-]+@[\w.-]+\.[a-z]{2,}$/i;


/* regex message */
let regexMess = /^[.\s]{30,200}$/;

// const formValue = document.forms[0];
// for (let i = 0; i < formValue.length; i++) {
//   console.log( formValue.elements[i].name + "<br>");
//   if (condition) {
    
//   } else {
    
//   }
// }