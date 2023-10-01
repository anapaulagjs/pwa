// Selecione todos os botões "Comprar"
const buyButtons = document.querySelectorAll('.buy-button');

// Selecione a lista de itens do carrinho
const cartItemsList = document.getElementById('cart-items');

// Função para adicionar um item ao carrinho
function addItemToCart(itemName) {
  const listItem = document.createElement('li');
  listItem.textContent = itemName;
  cartItemsList.appendChild(listItem);
}

// Adicione um evento de clique a cada botão "Comprar"
buyButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const item = e.target.parentNode.querySelector('.price').textContent;
    addItemToCart(item);
  });
});