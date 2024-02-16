const menuOptions = [
  { name: 'X-Salada', price: 30, vegan: false, src: './assets/xsalada.jpeg' },
  { name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.png' },
  {
    name: 'X-Bacon Egg',
    price: 39,
    vegan: false,
    src: './assets/bacon-egg.png',
  },
  {
    name: 'Monstruoso',
    price: 50,
    vegan: false,
    src: './assets/monstruoso.png',
  },
  { name: 'Big Vegano', price: 55, vegan: true, src: './assets/xvegan.png' },
  {
    name: 'X-Vegan',
    price: 45,
    vegan: true,
    src: './assets/monstruoso-vegan.png',
  },
];
const cardapio = document.querySelector('.cardapio');
const preco = document.querySelector('.preco');
const vegano = document.querySelector('.vegano');
const total = document.querySelector('.total');
const list = document.querySelector('.list');

function formatCurrency(value) {
  const priceCurrency = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return priceCurrency;
}

function handleCardapio(newArray) {
  let myList = '';
  newArray.forEach((product) => {
    myList += `<li>
  <img class="img1" src=${product.src} alt="">

  <p class="name-burger">${product.name}</p>
  <p class="price">R$${formatCurrency(product.price)}</p>

</li>`;
  });
  list.innerHTML = myList;
}

function handleDesconto() {
  const desconto = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  handleCardapio(desconto);
}

function handleVegan() {
  const filterVegan = menuOptions.filter((product) => product.vegan);
  handleCardapio(filterVegan);
}

function handleTotal() {
  const sumTotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  list.innerHTML = `<li>
  <p class="price">O valor total do pedido foi:R$${formatCurrency(sumTotal)}</p>
  </li>`;
}

cardapio.addEventListener('click', () => handleCardapio(menuOptions));
preco.addEventListener('click', handleDesconto);
vegano.addEventListener('click', handleVegan);
total.addEventListener('click', handleTotal);
