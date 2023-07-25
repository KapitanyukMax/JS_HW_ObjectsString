let car = {
    producer: "BMW",
    model: "i4 M50",
    productionYear: 2021,
    averageSpeed: 100
};

//1
showInfo(car);

//2
let distance = +prompt("Enter distance to calculate driving time");
if (Number.isFinite(distance))
    alert(`The car needs ${calculateDrivingTime(car, distance)} hours to drive ${distance} km`);
else
    alert("Invalid distance");

//1
function showInfo(car) {
    alert(`Car: ${car.producer} ${car.model}, production year - ${car.productionYear}, average speed - ${car.averageSpeed}`);
}

//2
function calculateDrivingTime(car, distance) {
    let drivingTime = distance / car.averageSpeed;
    return drivingTime + Math.floor(drivingTime / 4);
}