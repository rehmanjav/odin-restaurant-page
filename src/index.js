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
                            "smoked-salmon-canapes.jpeg"),
                  new Dish("Lyonnaise Salad", 
                            "Green salad with seasoned egg", 
                            "lyonnaise-salad.jpeg"),
                ];
let menuEntrees = [new Dish("Foie Gras", 
                        "Extravagant duck liver", 
                        "foie-gras.jpeg"),
               new Dish("Escargot", 
                        "Succulent baked snails", 
                        "escargot.jpeg"),
               new Dish("Salmon Tartare", 
                        "Wild caught Salmon served fresh daily", 
                        "salmon-tartare.jpeg"),
            ];

let menuMain = [new Dish("Duck à l'Orange", 
                     "Free range duck with hints of oranges", 
                     "duck-l-orange.jpg"),
            new Dish("Chicken Dijon", 
                     "Chicken with hints of native mustard", 
                     "chicken-dijon.jpg"),
            new Dish("Bouillabaisse", 
                     "Soup with fresh caught seafood", 
                     "bouillabaisse.jpg"),
            new Dish("Red Snapper with Citrus and Fennel", 
                     "Fresh caught red snapper with herbs", 
                     "red-snapper-with-citrus.jpg"),
        ];

let menuDesserts = [new Dish("Peppermint Meringue", 
                         "Decadent meringue with accents of peppermint", 
                         "peppermint-meringue.jpg"),
                new Dish("Banana Cream Pie", 
                         "Rich pie with bananas and cream", 
                         "banana-cream-pie.jpg"),
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

    btnHome.classList.add("btn-border");

    btnHome.addEventListener('click', () => {
        let main = document.querySelector('main');
        if (!main.firstElementChild.classList.contains("div-home")) {
            renderHome();
            btnHome.classList.add("btn-border");
            btnMenu.classList.remove("btn-border");
            btnContact.classList.remove("btn-border");
        }
    });

    btnMenu.addEventListener('click', () => {
        let main = document.querySelector('main');
        if (!main.firstElementChild.classList.contains("div-menu")) {
            renderMenu();
            btnHome.classList.remove("btn-border");
            btnMenu.classList.add("btn-border");
            btnContact.classList.remove("btn-border");
        }
    });

    btnContact.addEventListener('click', () => {
        let main = document.querySelector('main');
        if (!main.firstElementChild.classList.contains("div-contact")) {
            renderContact();
            btnHome.classList.remove("btn-border");
            btnMenu.classList.remove("btn-border");
            btnContact.classList.add("btn-border");
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
    let mainDiv = document.querySelector('main');

    mainDiv.innerHTML = `
    <div class="div-menu">
        <div class="btn-container">
            <button class="btn-appetizers">Appetizers</button>
            <button class="btn-entrees">Entrées</button>
            <button class="btn-main">Main</button>
            <button class="btn-desserts">Desserts</button>
        </div>
        <div class="card-container">
            <div class="div-appetizers">
            
            </div>
        </div>
    </div>
    `

    renderAppetizers();

    let btnAppetizers = document.querySelector('.btn-appetizers');
    let btnEntrees = document.querySelector('.btn-entrees');
    let btnMain = document.querySelector('.btn-main');
    let btnDesserts = document.querySelector('.btn-desserts');

    btnAppetizers.classList.add("btn-border");

    btnAppetizers.addEventListener('click', () => {
        let cardContainer = document.querySelector('.card-container');
        if (!cardContainer.firstElementChild.classList.contains("div-appetizers")) {
            renderAppetizers();
            btnAppetizers.classList.add("btn-border");
            btnEntrees.classList.remove("btn-border");
            btnMain.classList.remove("btn-border");
            btnDesserts.classList.remove("btn-border");
        }
    });

    btnEntrees.addEventListener('click', () => {
        let cardContainer = document.querySelector('.card-container');
        if (!cardContainer.firstElementChild.classList.contains("div-entrees")) {
            renderEntrees();
            btnAppetizers.classList.remove("btn-border");
            btnEntrees.classList.add("btn-border");
            btnMain.classList.remove("btn-border");
            btnDesserts.classList.remove("btn-border");
        }
    });

    btnMain.addEventListener('click', () => {
        let cardContainer = document.querySelector('.card-container');
        if (!cardContainer.firstElementChild.classList.contains("div-main")) {
            renderMain();
            btnAppetizers.classList.remove("btn-border");
            btnEntrees.classList.remove("btn-border");
            btnMain.classList.add("btn-border");
            btnDesserts.classList.remove("btn-border");
        }
    });

    btnDesserts.addEventListener('click', () => {
        let cardContainer = document.querySelector('.card-container');
        if (!cardContainer.firstElementChild.classList.contains("div-desserts")) {
            renderDesserts();
            btnAppetizers.classList.remove("btn-border");
            btnEntrees.classList.remove("btn-border");
            btnMain.classList.remove("btn-border");
            btnDesserts.classList.add("btn-border");
        }
    });

}

function renderContact() {
    let mainDiv = document.querySelector('main');

    mainDiv.innerHTML = `
    <div class="div-contact">
            <div class="contact-details">
                <p>Telephone: XXX-XXX-XXXX</p>
                <p>Hours of Operation</p>
                <p>7 days a week</p>
                <p>Brekfast: 6am - 9am</p>
                <p>Lunch: 12:00pm - 2pm</p>
                <p>Dinner: 6pm - 10pm</p>
            </div>
            <div>
                <img class="img-location" src="../images/location.png" alt="map">
            </div>
        </div>
    `
    let map = require('./assets/images/location.png');
    let mapImg = document.querySelector('.img-location');
    mapImg.src = map;

}

function renderAppetizers() {
    let cardContainer = document.querySelector(".card-container");

    cardContainer.innerHTML = `
    <div class="div-appetizers">
    
    </div>
    `;

    let divAppetizers = document.querySelector(".div-appetizers");

    for (let dish of menuAppetizers) {
        divAppetizers.append(generateCard(dish));
    }
}

function renderEntrees() {
    let cardContainer = document.querySelector(".card-container");

    cardContainer.innerHTML = `
    <div class="div-entrees">
    
    </div>
    `;

    let divEntrees = document.querySelector(".div-entrees");

    for (let dish of menuEntrees) {
        divEntrees.append(generateCard(dish));
    }
}

function renderMain() {
    let cardContainer = document.querySelector(".card-container");

    cardContainer.innerHTML = `
    <div class="div-main">
    
    </div>
    `;

    let divMain = document.querySelector(".div-main");

    for (let dish of menuMain) {
        divMain.append(generateCard(dish));
    }
}

function renderDesserts() {
    let cardContainer = document.querySelector(".card-container");

    cardContainer.innerHTML = `
    <div class="div-desserts">
    
    </div>
    `;

    let divDesserts = document.querySelector(".div-desserts");

    for (let dish of menuDesserts) {
        divDesserts.append(generateCard(dish));
    }
}

function generateCard(dish) {
    let div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
    <img class="img-menu" src="${images[dish.url]}" alt="menu image">
    <p>${dish.descrip}</p>
    `;

    return div;
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

// START

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));
renderIndex();