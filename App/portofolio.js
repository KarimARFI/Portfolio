'use strict';

/* ######################################################### */
/* ### DATE ### */ 
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
/* CONTROL DU FORMULAIRE DE CONTACT BOOTSTRAP uniquement */
/* ######################################################### */
(function() {
    /** Ecoute au chargement de la page*/
    window.addEventListener('load', function() {
        /** capture de toutes les classes des éléments dans le formulaire "needs-validation" */
        var forms = document.getElementsByClassName('needs-validation');
        /** création d'un tableau des classes capturé précédement avec filtre */
        var validation = Array.prototype.filter.call(forms, function(form){
            console.log(forms);
            console.log(form);
            form.addEventListener('submit', function(event){
                console.log(form);
                if (form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

/* ######################################################### */
/* POPOVER BOOSTRAP*/
/* ######################################################### */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))