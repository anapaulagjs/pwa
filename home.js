document.addEventListener('DOMContentLoaded', function() {
    var buyLinks = document.querySelectorAll('.buy-button');
    var cartLogo = document.getElementById('cart-logo');
    var viewAllProductsLink = document.getElementById('view-all-products-link');
  
    // Função para tratar o clique no link "Comprar"
    function buyButtonClick(event) {
      event.preventDefault();
      var productName = this.dataset.productName;
      var productPrice = this.dataset.productPrice;
      console.log('Clicou em "Comprar" para o produto:', productName);
      console.log('Preço do produto:', productPrice);
      // Lógica adicional para adicionar o produto ao carrinho de compras, por exemplo
    }
  
    // Função para tratar o clique no logo do carrinho de compras
    function cartLogoClick(event) {
      event.preventDefault();
      console.log('Clicou no logo do carrinho de compras');
      // Lógica adicional para exibir o carrinho de compras ou redirecionar para a página do carrinho, por exemplo
    }
  
    // Função para tratar o clique no link "VIEW ALL PRODUCTS"
    function viewAllProductsLinkClick(event) {
      event.preventDefault();
      console.log('Clicou em "VIEW ALL PRODUCTS"');
      // Redirecionar para a página desejada
      window.location.href = 'outra_pagina.html';
    }
  
    // Adiciona o evento de clique para cada link "Comprar"
    buyLinks.forEach(function(buyLink) {
      buyLink.addEventListener('click', buyButtonClick);
    });
  
    // Adiciona o evento de clique para o logo do carrinho de compras
    cartLogo.addEventListener('click', cartLogoClick);
  
    // Adiciona o evento de clique para o link "VIEW ALL PRODUCTS"
    viewAllProductsLink.addEventListener('click', viewAllProductsLinkClick);
  });