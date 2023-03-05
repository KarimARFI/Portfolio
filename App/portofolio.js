'use strict';
/* ######################################################### */

/* ### DATE ### */ 
var dayNames;
var monthNames;
// tableaux vides à deux variables.
dayNames   = new Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');
monthNames = new Array('Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juill', 'Juin,', 'Août', 'Sep', 'Oct', 'Nov', 'Déc');
// Création d'une instance de la classe "Date".
var today;
today = new Date();

/* Affichage du contenu d'une partie du tableau directement dans la page HTML.
La méthode getDay() = renvoi un chiffre pour le jour de la semaine commence par 0 = dimanche.
La méthode getMonth() renvoi un chiffre pour le nom du mois commence par 0 = janvier. */
document.getElementById("calendar").innerHTML=' '+dayNames[today.getDay()] +' '+today.getDate()+' '+monthNames[today.getMonth()]+' '+today.getFullYear();
