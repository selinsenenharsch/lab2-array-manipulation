const shoppingList = [];

const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const searchInput = document.getElementById("searchInput");
const listElement = document.getElementById("shoppingListDisplay");

function addItem(item) {
  const trimmedItem = item.trim();
  if (!trimmedItem) return;

  const isDuplicate = shoppingList.some(
    (existingItem) => existingItem.toLowerCase() === trimmedItem.toLowerCase()
  );

  if (!isDuplicate) {
    shoppingList.push(trimmedItem);
  } else {
    console.log("Item already in list");
  }
}

function removeLastItem() {
  return shoppingList.pop();
}

function displayList() {
  for (const item of shoppingList) {
    console.log(item);
  }
}

function filterItems(searchTerm) {
  return shoppingList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function renderList(itemsToRender = shoppingList) {
  listElement.innerHTML = "";

  for (const item of itemsToRender) {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  }
}

addItemBtn.addEventListener("click", () => {
  addItem(itemInput.value);
  itemInput.value = "";
  searchInput.value = "";
  renderList();
});

removeLastBtn.addEventListener("click", () => {
  removeLastItem();
  searchInput.value = "";
  renderList();
});

searchInput.addEventListener("input", () => {
  const filtered = filterItems(searchInput.value);
  renderList(filtered);
});
