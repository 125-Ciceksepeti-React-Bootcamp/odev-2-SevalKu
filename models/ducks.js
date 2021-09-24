import Animal from "./animal.js";
// DUCKS CHILD CLASS
class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
  add() {
   
    const cardBody = document.querySelector(".card-body");
  const card = `<div class="card">
        <div class="card-image" style="background:url(${this.image}); background-size:cover;"></div>
        <div class="card-text">
          <h3>${this.name}</h3>
          <p>Age: ${this.age}</p>
          <p>${this.numberOfLegs} Legs</p>
        </div>
      </div> `;
  cardBody.innerHTML += card;
}
}
export default Duck;
