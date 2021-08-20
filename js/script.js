// Update Price Chart Function

function updatePrice() {
  const delivery = document.getElementById("delivery-cost");

  delivery.innerText = 1;
}

document.getElementById("btn-delivery1").addEventListener("click", function () {
  updatePrice();
});

document.getElementById("btn-delivery2").addEventListener("click", function () {
  const delivery = document.getElementById("delivery-cost");

  delivery.innerText = 20;
});
