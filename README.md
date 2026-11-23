# Lab 2: Array Manipulation

A simple interactive shopping list app built with HTML, CSS, and JavaScript to practice array manipulation, duplicate prevention, case-insensitive filtering, and DOM rendering.

## Features
- Add items to `shoppingList` while ignoring empty inputs and case-insensitive duplicates.
- Remove the last item from the list (`removeLastItem`).
- Filter items live as you type in the search input (`filterItems`).
- Render and update the list dynamically in the browser (`renderList`).

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)

## Reflection

### 1. Array Methods (`push()`, `filter()`, etc.)
 .push() added validated items to shoppingList without mutating a new array every time.  .pop() removed the most recent item. .some() checked for existing items before pushin. filter() returned a new subset of matching items without wiping out original shoppingList array.

### 2. Filtering & Search Challenges
Making the search case insensitive with .toLowerCase() was straightforward once combined with .includes(), though Task 3 took extra care to keep the DOM synced with shoppingList such as clearing the <ul> before re-rendering and keeping styling clean when I added CSS.

### 3. Improvements for Efficiency & User Experience
I'd show a visible message on the page when a duplicate item is entered instead of only logging to the console, let users press Enter to add an item.