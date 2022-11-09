function showCategories() {
  const container = document.querySelector('.categories');

  for (let i = 0; i < data.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = data[i].name;
    elem.setAttribute('data-category', i);
    elem.addEventListener('click', showProducts);
    container.appendChild(elem);
  }
}

// handler of click on categories
function showProducts(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const products = data[categoryIndex].products;
  const container = document.querySelector('.products');
  container.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = products[i].name;
    elem.setAttribute('data-product', i);
    elem.setAttribute('data-category', categoryIndex);
    elem.addEventListener('click', showDetails);
    container.appendChild(elem);
  }
}

function showDetails(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const productIndex = event.target.getAttribute('data-product');
  const container = document.querySelector('.details');
  container.innerHTML = '';
  const elemPrice = document.createElement('div');
  const elemDescr = document.createElement('div');
  const buttonFinish = document.createElement('button');
  elemPrice.textContent = data[categoryIndex].products[productIndex].price;
  elemDescr.textContent = data[categoryIndex].products[productIndex].description;
  container.appendChild(elemPrice);
  container.appendChild(elemDescr);
  container.appendChild(buttonFinish);
  buttonFinish.textContent = 'Buy';
  buttonFinish.getAttribute("id", "button")
  buttonFinish.addEventListener('click', showConfirm);
}

function showConfirm(event) {
  const container = document.querySelector('.products');
  const containerDetail = document.querySelector('.details');
  alert("Congratulations!!!");
  container.innerHTML = '';
  containerDetail.innerHTML = '';
}
showCategories();