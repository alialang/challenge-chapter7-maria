class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    this.clear;
    const passenger = document.getElementById('passenger');
    const dateAvailable = document.getElementById('date');
    const hours = document.getElementById('hours');

    const passengerSeat = passenger.value;
    const availableDay = dateAvailable.value;
    const hourDay = hours.value;

    let inputDateTime = Date.parse(availableDay + 'T' + hourDay + 'Z');
    //console.log(inputDateTime);

    const cars = await Binar.listCars();

    //console.log(cars.length)
    const availableCar = cars.filter((car) => {
      return car.capacity >= parseInt(passengerSeat) && car.available === true && (Date.parse(car.availableAt)) > inputDateTime
      //return car.capacity >= passengerSeat && car.available === true && parseInt(Date.parse(car.availableAt));
    });
    Car.init(availableCar);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
