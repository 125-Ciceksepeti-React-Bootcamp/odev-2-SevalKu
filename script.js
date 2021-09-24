
import Dog from "./models/dogs.js";
import Duck from "./models/ducks.js";




const cardBody = document.querySelector(".card-body");

const dog1 = new Dog("Dost","../img/dog1.jpg", 4, 3);
const dog2 = new Dog("Bıdık","../img/dog2.jpg", 4, 1);
const dog3 = new Dog("Kahve","../img/dog3.jpg", 4, 2);
const duck1 = new Duck("Martı","../img/duck1.jpg", 2, 1);
const duck2 = new Duck("Yeşil","../img/duck2.jpg", 2, 2);
const duck3 = new Duck("Paytak","../img/duck3.jpg", 2, 3);



dog1.add();
dog2.add();
dog3.add();
duck1.add();
duck2.add();
duck3.add();
