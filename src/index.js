"use strict";

class Dish {
    constructor(name, descrip, url) {
        this.name = name;
        this.descrip = descrip;
        this.url = url;
    }
}

menuAppetizers = [new Dish("Smoked Salmon Canapes", 
                            "Smoked salmon served on cream cheese and rye bread", 
                            "./assets/images/smoked-salmon-canapes.jpeg"),
                  new Dish("Lyonnaise Salad", 
                            "Green salad with seasoned egg", 
                            "./assets/images/lyonnaise-salad.jpeg"),
                ];
menuEntrees = [new Dish("Foie Gras", 
                        "Extravagant duck liver", 
                        "./assets/images/foie-gras.jpeg"),
               new Dish("Escargot", 
                        "Succulent baked snails", 
                        "./assets/images/escargot.jpeg"),
               new Dish("Salmon Tartare", 
                        "Wild caught Salmon served fresh daily", 
                        "./assets/images/salmon-tartare.jpeg"),
            ];

menuMain = [new Dish("Duck à l'Orange", 
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

mainDesserts = [new Dish("Peppermint Meringue", 
                         "Decadent meringue with accents of peppermint", 
                         "./assets/images/peppermint-meringue.jpg"),
                new Dish("Banana Cream Pie", 
                         "Rich pie with bananas and cream", 
                         "./assets/images/banana-cream-pie.jpg"),
            ];

console.log("This is a log.");