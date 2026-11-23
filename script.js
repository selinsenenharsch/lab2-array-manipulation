const shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeLastItem() {
  return shoppingList.pop();
}

function displayList() {
  for (const item of shoppingList) {
    console.log(item);
  }
}

addItem("Apples")
addItem("Bread")
displayList()
removeLastItem()
displayList()