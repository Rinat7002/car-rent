// Данные автомобилей с типами на русском
const cars = [
  { name: 'Toyota Corolla', price: 5000, image: 'img/toyota.png', type: 'седан', color: 'белый' },
  { name: 'Ford Mustang', price: 12000, image: 'img/mustang.png', type: 'кроссовер', color: 'красный' },
  { name: 'Tesla Model S', price: 15000, image: 'img/tesla.png', type: 'седан', color: 'черный' },
  { name: 'Chevrolet Camaro', price: 11000, image: 'img/camaro.jpg', type: 'внедорожник', color: 'красный' }
];

// Заполнение каталога автомобилей
const carCatalog = document.getElementById('car-catalog');
cars.forEach(car => {
  const carCard = document.createElement('div');
  carCard.classList.add('car-card');
  carCard.innerHTML = `
    <img src="${car.image}" alt="${car.name}" style="width:100%">
    <h3>${car.name}</h3>
    <p>Цена: ${car.price} ₽ / день</p>
    <p>Тип: ${car.type}</p>
    <p>Цвет: ${car.color}</p>
    <button onclick="viewCar('${car.name}')">Просмотр</button>
  `;
  carCatalog.appendChild(carCard);
});

// Фильтры и поиск
function filterCars() {
  const minPrice = parseInt(document.getElementById('price-min').value) || 0;
  const maxPrice = parseInt(document.getElementById('price-max').value) || Infinity;
  const selectedType = document.getElementById('type-filter').value;
  const selectedColor = document.getElementById('color-filter').value;

  document.querySelectorAll('.car-card').forEach(card => {
    const price = parseInt(card.querySelector('p').textContent.replace(/\D/g, ''));
    const type = card.querySelector('p:nth-child(4)').textContent.toLowerCase();
    const color = card.querySelector('p:nth-child(5)').textContent.toLowerCase();

    card.style.display = (price >= minPrice && price <= maxPrice) &&
                         (selectedType === 'all' || type.includes(selectedType)) &&
                         (selectedColor === 'all' || color.includes(selectedColor))
                         ? '' : 'none';
  });
}

// Переход на страницу автомобиля
function viewCar(name) {
  const carSlug = name.toLowerCase().replace(/\s+/g, '-');
  location.href = `view_car_${carSlug}.html`;
}
