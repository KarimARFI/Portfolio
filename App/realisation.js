//A CONTINUER : BUG AU NIVEAU DES BOUCLES POUR INSERTIONS DES ELEMENTS HTML.
let realisations = [
    {
        image: 'Realisation/CupTea/cupoftea2.png',
        lien: 'Realisation/CupTea/index.html',
        nom: 'Cup of tea',
        info: 'Exercice en html, css, responsive'
    },
    {
        image: 'Realisation/Creasoul/creasoul.png',
        lien: 'Realisation/Creasoul/index.html',
        nom: 'CreaSoul',
        info: 'Exercice en html, css, responsive'
    },
    {
        image: 'Realisation/RealtyGroup/realty.png',
        lien: 'Realisation/RealtyGroup/index.html',
        nom: 'Realty Group',
        info: 'Exercice avec sous-menu en hover'
    },
    {
        image: 'Realisation/WolfGang/wolfgang1.png',
        lien: 'Realisation/WolfGang/index.html',
        nom: 'Wolf Gang',
        info: 'Exercice carousel jQuery, media YouTube, en responsive en flex'
    },
    {
        image: 'Realisation/Yoga/yoga1.png',
        lien: 'Realisation/Yoga/index.html',
        nom: 'Yoga',
        info: 'Exercice responsive en flex, formulaire de contact'
    },
];
/** pointage de l'élément principale du  carousel */
let carouselInner = document.getElementsByClassName('carousel-inner');
console.log(carouselInner);
/** déclaration de l'indice slide pour le numéro du slide et le différencier de l'index de la boucle */
let slide = 0;
/** boucle des éléments du carousel */
for(let i=0; i<realisations.length; i++){
    carouselInner.innerHTML+=`TEST
        <div class="carousel-item active" data-bs-interval="80">
        <img src="${realisations[i].image}" class="d-block w-100" alt="Slide_${slide += 1}_carousel">
        <div class="carousel-caption">
            <a href="${realisations[i].lien}"><h5>${realisations[i].nom}</h5></a>
            <p>${realisations[i].info}.</p>
        </div>
    `;
};
/** Ajout des puces */
let carouselIndicator = document.getElementsByClassName('carousel-indicators');
console.log(carouselIndicator);
/** boucle pour les puces */
for(let i=0; i<realisations.length; i++){
    carouselIndicator.innerHTML+=`
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="${i}" aria-label="Slide ${slide += 1}"></button>
    `;
};
/** ajout des attribut au 1er élément du carousel-indicator */
// carouselIndicator.setAttribute("class", "active");
// carouselIndicator.setAttribute('aria-current','true');

