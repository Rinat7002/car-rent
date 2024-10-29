// Sample data
const cars = [
    { name: 'Toyota Corolla', price: 50, image: 'img/toyota.png' },
    { name: 'Ford Mustang', price: 120, image: 'img/mustang.png' },
    { name: 'Tesla Model S', price: 150, image: 'img/tesla.png' },
    { name: 'Chevrolet Camaro', price: 110, image: 'img/camaro.jpg' }
  ];
  
  // Populate car catalog
  const carCatalog = document.getElementById('car-catalog');
  cars.forEach(car => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.name}" style="width:100%">
      <h3>${car.name}</h3>
      <p>Price: $${car.price} / day</p>
      <button onclick="viewCar('${car.name}')">View</button>
    `;
    carCatalog.appendChild(carCard);
  });
  
  // Search and filter functions
  document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.car-card').forEach(card => {
      card.style.display = card.querySelector('h3').textContent.toLowerCase().includes(searchTerm) ? '' : 'none';
    });
  });
  
  document.getElementById('price-filter').addEventListener('change', (e) => {
    const filter = e.target.value;
    document.querySelectorAll('.car-card').forEach(card => {
      const price = parseInt(card.querySelector('p').textContent.replace(/\D/g, ''));
      if ((filter === 'low' && price > 50) || (filter === 'mid' && (price < 50 || price > 100)) || (filter === 'high' && price < 100)) {
        card.style.display = 'none';
      } else {
        card.style.display = '';
      }
    });
  });
  
  function viewCar(name) {
    location.href = `view_car.html?car=${name}`;
  }
  