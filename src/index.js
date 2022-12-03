"use strict";
import './assets/styles.css';

class Dish {
    constructor(name, descrip, url) {
        this.name = name;
        this.descrip = descrip;
        this.url = url;
    }
}

let menuAppetizers = [new Dish("Smoked Salmon Canapes", 
                            "Smoked salmon served on cream cheese and rye bread", 
                            "./assets/images/smoked-salmon-canapes.jpeg"),
                  new Dish("Lyonnaise Salad", 
                            "Green salad with seasoned egg", 
                            "./assets/images/lyonnaise-salad.jpeg"),
                ];
let menuEntrees = [new Dish("Foie Gras", 
                        "Extravagant duck liver", 
                        "./assets/images/foie-gras.jpeg"),
               new Dish("Escargot", 
                        "Succulent baked snails", 
                        "./assets/images/escargot.jpeg"),
               new Dish("Salmon Tartare", 
                        "Wild caught Salmon served fresh daily", 
                        "./assets/images/salmon-tartare.jpeg"),
            ];

let menuMain = [new Dish("Duck à l'Orange", 
                     "Free range duck with hints of oranges", 
                     "./assets/images/duck-l-orange.jpg"),
            new Dish("Chicken Dijon", 
                     "Chicken with hints of native mustard", 
                     "./assets/images/chicken-dijon.jpg"),
            new Dish("Bouillabaisse", 
                     "Soup with fresh caught seafood", 
                     "./assets/images/bouillabaisse.jpg"),
            new Dish("Red Snapper with Citrus and Fennel", 
                     "Fresh caught red snapper with herbs", 
                     "./assets/images/red-snapper-with-citrus.jpg"),
        ];

let mainDesserts = [new Dish("Peppermint Meringue", 
                         "Decadent meringue with accents of peppermint", 
                         "./assets/images/peppermint-meringue.jpg"),
                new Dish("Banana Cream Pie", 
                         "Rich pie with bananas and cream", 
                         "./assets/images/banana-cream-pie.jpg"),
            ];

function renderIndex() {
    let body = document.querySelector('body');

    body.innerHTML = `
    <header>
        <p class="rest-name">Plat Élégante</p>
        <div class="container-btn">
            <button class="btn-home">Home</button>
            <button class="btn-menu">Menu</button>
            <button class="btn-contact">Contact</button>
        </div>
    </header>
    <main>
        
    </main>
    <footer>Made by rjava</footer>
    `;

    renderHome();

    let btnHome = document.querySelector('.btn-home');
    let btnMenu = document.querySelector('.btn-menu');
    let btnContact = document.querySelector('.btn-contact');

    btnHome.addEventListener('click', () => {
        let main = document.querySelector('main');
        if (!main.firstElementChild.classList.contains("div-home")) {
            renderHome();
        }
    });

    btnMenu.addEventListener('click', () => {
        let main = document.querySelector('main');
        if (!main.firstElementChild.classList.contains("div-menu")) {
            renderMenu();
        }
    });

    btnContact.addEventListener('click', () => {
        let main = document.querySelector('main');
        if (!main.firstElementChild.classList.contains("div-contact")) {
            renderContact();
        }
    });
}

function renderHome() {
    let mainDiv = document.querySelector('main');

    mainDiv.innerHTML = `
    <div class="div-home">
            <p>Gourmet French Cuisine</p>
            <p>Established in 1956</p>
            <img class="img-chef" src="../images/chef.jpg" alt="image of chef">
            <p>Enjoy breakfast, lunch, and dinner in our ballroom</p>
    </div>
    `
    let chef = require('./assets/images/chef.jpg');
    let chefImg = document.querySelector('.img-chef');
    chefImg.src = chef;
}

function renderMenu() {

}

function renderContact() {

}

console.log("This is a log.");
renderIndex();