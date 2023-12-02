import "../assets/sass/shop.scss";
import { setupMemberUI } from "./memberName.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMemberUI();
});

////////////////商品呈現//////////////////
document.addEventListener("DOMContentLoaded", () => {
  const items = new Map();

  function updateTotal() {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    document.querySelector(".total").textContent = total;
  }

  function updateList() {
    const itemList = document.querySelector(".itemsList");
    itemList.innerHTML = "";

    items.forEach((item, name) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item p-2 d-flex justify-content-between align-items-center";

      li.innerHTML = `
          <div class="w-50 fw-bold text-center">
            ${name} <br />
            <small>NT$ ${item.price}</small>
          </div>
          <button type="button" class="btn btn-outline-primary border minusButton text-center px-0">
            -
          </button>
          <div type="button" class="border btn quantity px-0">${
            item.quantity
          }</div>
          <button type="button" class="btn btn-outline-primary border plusButton text-center px-0">
            +
          </button>
          <div class="border-success w-25 text-end pe-2">NT$ <p class="d-inline">${
            item.price * item.quantity
          }</p></div>
        `;

      itemList.appendChild(li);

      const plusButton = li.querySelector(".plusButton");
      plusButton.addEventListener("click", () => {
        item.quantity++;
        updateList();
        updateTotal();
      });

      const minusButton = li.querySelector(".minusButton");
      minusButton.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          items.delete(name);
        }
        updateList();
        updateTotal();
      });
    });
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseInt(button.getAttribute("data-price"), 10);

      if (items.has(name)) {
        items.get(name).quantity++;
      } else {
        items.set(name, { price: price, quantity: 1 });
      }
      updateList();
      updateTotal();
    });
  });
});
