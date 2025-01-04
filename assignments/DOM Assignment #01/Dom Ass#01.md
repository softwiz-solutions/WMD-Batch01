# Assignment: Exploring the DOM (Document Object Model)

## Instructions

### Create an HTML File
1. Create an HTML file with the following structure:
   - A `div` element with an ID of `main-container`.
   - Inside the `div`, include:
     - An `h1` heading with a title of your choice.
     - A `ul` (unordered list) with at least 3 `li` items.
     - A `p` (paragraph) with a short description.
     - At least 2 `img` tags with random images and unique `alt` attributes.
     - A `button` with the text "Click Me".

2. Use JavaScript to manipulate the DOM and complete the tasks listed below.

---

## Tasks

### 1. Accessing Child Nodes
- Write a JavaScript function that:
  - Logs all the child nodes of `main-container` to the console.
  - Changes the text content of the first `li` in the list to `"First Item Updated!"`.

### 2. Accessing Parent Nodes
- Write a function that:
  - Logs the parent node of the `ul` element to the console.
  - Adds a new `class` to the parent element.

### 3. Targeting Elements in Multiple Ways
- Write a function that:
  - Logs the `nodeName`, `nodeType`, and `nodeValue` of the `h1` element to the console.
  - Changes the `nodeValue` of the paragraph to `"New Description Added!"`.

### 4. Counting Specific Nodes
- Write a function that:
  - Counts how many `img` tags are present in the `main-container`.
  - Logs the total number of `img` tags to the console.

  *(Hint: Use `nodeList` and iterate through it to count elements with `nodeName === 'IMG'`.)*

### 5. Manipulating Attributes
- Add a custom attribute `data-status="active"` to the button in your HTML.
- Write a function to:
  - Log the value of the `data-status` attribute to the console.
  - Change the value of `data-status` to `"clicked"` when the button is clicked.

### 6. Adding and Deleting Elements
- Write a function to:
  - Add a new `li` item to the `ul` list with the text `"New Item Added!"`.
  - Remove the last `li` item from the `ul` when another button is clicked.

### 7. Bonus Challenge
- Write a function that:
  - Changes the `src` of all `img` tags to a new image URL.
  - Logs a message each time an image’s `src` is updated.

### 8. Advanced Question (Reference-Based)
- Write a function that:
  - Counts how many child nodes in the `main-container` have the `nodeName` as `"IMG"`.
  - Logs the count to the console, similar to the logic shown in the provided reference.

---

## Example HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Assignment</title>
</head>
<body>
  <div id="main-container">
    <h1>DOM Assignment</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <p>This is a sample paragraph.</p>
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <button id="main-button">Click Me</button>
    <button id="delete-button">Delete Last Item</button>
  </div>
  <script>
    // Add your JavaScript code here
  </script>
</body>
</html>
