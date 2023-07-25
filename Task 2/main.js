let car = {
    producer: "BMW",
    model: "i4 M50",
    productionYear: 2021,
    averageSpeed: 100,

    //1
    showInfo() {
        alert(`Car: ${this.producer} ${this.model}, production year - ${this.productionYear}, average speed - ${this.averageSpeed}`);
    },

    //2
    calculateDrivingTime(distance) {
        let drivingTime = distance / this.averageSpeed;
        return drivingTime + Math.floor(drivingTime / 4);
    }
}

//1
car.showInfo();

//2
let distance = +prompt("Enter distance to calculate driving time");
if (Number.isFinite(distance))
    alert(`The car needs ${car.calculateDrivingTime(distance)} hours to drive ${distance} km`);
else
    alert("Invalid distance");