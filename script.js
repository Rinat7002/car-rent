const cars = [
    { name: "Toyota Corolla", price: 80, img: "img/toyota.png" },
    { name: "Ford Mustang", price: 150, img: "img/mustang.png" },
    { name: "Tesla Model S", price: 200, img: "img/tesla.png" },
    { name: "Chevrolet Camaro", price: 120, img: "img/camaro.jpg" },
];

function loadCars() {
    const carList = document.getElementById("car-list");
    carList.innerHTML = ""; 
    cars.forEach(car => {
        const carElement = document.createElement("div");
        carElement.classList.add("car");
        carElement.innerHTML = `
            <img src="${car.img}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: $${car.price} / day</p>
            <button class="rent-button">Rent Now</button>
        `;
        carList.appendChild(carElement);
    });
}

function filterCars() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const priceFilter = document.getElementById("priceFilter").value;
    const filteredCars = cars.filter(car => {
        const matchesName = car.name.toLowerCase().includes(searchInput);
        const matchesPrice = priceFilter === "all" || car.price <= parseInt(priceFilter);
        return matchesName && matchesPrice;
    });
    displayCars(filteredCars);
}

function sortCars() {
    cars.sort((a, b) => a.price - b.price);
    loadCars();
}

function displayCars(carsToDisplay) {
    const carList = document.getElementById("car-list");
    carList.innerHTML = "";
    carsToDisplay.forEach(car => {
        const carElement = document.createElement("div");
        carElement.classList.add("car");
        carElement.innerHTML = `
            <img src="${car.img}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: $${car.price} / day</p>
            <button class="rent-button">Rent Now</button>
        `;
        carList.appendChild(carElement);
    });
}

document.addEventListener("DOMContentLoaded", loadCars);
