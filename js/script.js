// Update Price Chart Function

function updatePrice(additionalCostType, option) {
  const priceUpdate = document.getElementById(additionalCostType + "-cost");

  if (option == "defaultOption") {
    priceUpdate.innerText = 0;
  } else if (option == "option20") {
    priceUpdate.innerText = 20;
  } else if (option == "option100") {
    priceUpdate.innerText = 100;
  } else if (option == "option180") {
    priceUpdate.innerText = 180;
  }

  calculateTotal();
}

//calculation all prices

function getCost(additionalCostType) {
  const priceUpdate = document.getElementById(additionalCostType + "-cost");
  const price = parseInt(priceUpdate.innerText);
  return price;
}

function calculateTotal() {
  const memoryCost = getCost("memory");
  const storageCost = getCost("storage");
  const deliveryCost = getCost("delivery");
  const extraCost = storageCost + deliveryCost + memoryCost;

  const baseCost = document.getElementById("base-cost");
  const basePrice = parseInt(baseCost.innerText);

  //update html

  document.getElementById("total-cost").innerText = extraCost + basePrice;
}

//Memory cost event

document.getElementById("btn-memory1").addEventListener("click", function () {
  updatePrice("memory", "defaultOption");
});

document.getElementById("btn-memory2").addEventListener("click", function () {
  updatePrice("memory", "option180");
});

//Storage cost event
document.getElementById("btn-storage1").addEventListener("click", function () {
  updatePrice("storage", "defaultOption");
});
document.getElementById("btn-storage2").addEventListener("click", function () {
  updatePrice("storage", "option100");
});
document.getElementById("btn-storage3").addEventListener("click", function () {
  updatePrice("storage", "option180");
});

//Delivery cost event

document.getElementById("btn-delivery1").addEventListener("click", function () {
  updatePrice("delivery", "defaultOption");
});

document.getElementById("btn-delivery2").addEventListener("click", function () {
  updatePrice("delivery", "option20");
});
