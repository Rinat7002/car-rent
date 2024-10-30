// Данные автомобилей с типами на русском
const cars = [
  { name: 'Toyota Corolla', price: 5000, image: 'img/toyota.png', type: 'седан', color: 'черный' },
  { name: 'Ford Mustang', price: 12000, image: 'img/mustang.png', type: 'кроссовер', color: 'черный' },
  { name: 'Tesla Model S', price: 15000, image: 'img/tesla.png', type: 'седан', color: 'белый' },
  { name: 'Chevrolet Camaro', price: 11000, image: 'img/camaro.jpg', type: 'внедорожник', color: 'красный' }
];

// Заполнение каталога автомобилей
function updateCarDisplay(filteredCars) {
  const carCatalog = document.getElementById('car-catalog');
  carCatalog.innerHTML = ''; // Очистить каталог перед добавлением отфильтрованных автомобилей

  filteredCars.forEach(car => {
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
}

// Инициализация отображения всех автомобилей
updateCarDisplay(cars);

// Функция фильтрации автомобилей
function filterCars() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  const minPrice = parseInt(document.getElementById('price-min').value) || 0;
  const maxPrice = parseInt(document.getElementById('price-max').value) || Infinity;
  const selectedType = document.getElementById('type-filter').value;
  const selectedColor = document.getElementById('color-filter').value;

  const filteredCars = cars.filter(car => {
    const matchesName = car.name.toLowerCase().includes(searchTerm);
    const matchesPrice = car.price >= minPrice && car.price <= maxPrice;
    const matchesType = selectedType === 'all' || car.type === selectedType;
    const matchesColor = selectedColor === 'all' || car.color === selectedColor;
    return matchesName && matchesPrice && matchesType && matchesColor;
  });

  updateCarDisplay(filteredCars);
}

// Добавление слушателей на фильтры и поиск
document.getElementById('search-bar').addEventListener('input', filterCars);
document.getElementById('price-min').addEventListener('input', filterCars);
document.getElementById('price-max').addEventListener('input', filterCars);
document.getElementById('type-filter').addEventListener('change', filterCars);
document.getElementById('color-filter').addEventListener('change', filterCars);

// Переход на страницу автомобиля
function viewCar(name) {
  const carSlug = name.toLowerCase().replace(/\s+/g, '-');
  location.href = `view_car_${carSlug}.html`;
}
