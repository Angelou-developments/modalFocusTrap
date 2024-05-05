<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

  <h1>Modal Focus Trap Component</h1>

  <p>This component provides a simple and efficient way to manage focus within modal popups on web pages. It ensures that keyboard focus stays within the modal while it is open, enhancing accessibility and user experience.</p>

  <h2>Installation</h2>

  <p>To use this component in your project, follow these steps:</p>

  <ol>
    <li>Install via npm:</li>
  </ol>

  <pre><code>npm install modal-focus-trap</code></pre>

  <ol start="2">
    <li>Import the <code>ModalFocusTrap</code> class into your TypeScript or JavaScript file:</li>
  </ol>

  <pre><code>import ModalFocusTrap from 'modal-focus-trap';</code></pre>

  <h2>Usage</h2>

  <ol>
    <li>Add the necessary HTML structure for your modal popup, ensuring it has a unique <code>data-modal</code> attribute.</li>
    <li>Add the <code>js-popup-modal</code> class to your modal container.</li>
    <li>Add the <code>js-modal-toggle</code> class to elements that toggle the modal.</li>
    <li>Initialize the <code>ModalFocusTrap</code> class with your modal container element:</li>
  </ol>

  <pre><code>const ModalContainers = document.querySelectorAll('.js-popup-modal');

ModalContainers.forEach((ModalContainer: HTMLElement) => {
  new ModalFocusTrap(ModalContainer);
});</code></pre>

  <h2>Features</h2>

  <ul>
    <li>Ensures keyboard focus remains within the modal while it is open.</li>
    <li>Supports toggling the modal with multiple trigger elements.</li>
    <li>Automatically focuses on the first focusable element within the modal when opened.</li>
    <li>Allows closing the modal by pressing the "Escape" key.</li>
  </ul>

  <h2>Example</h2>

  <pre><code>&lt;div class="js-popup-modal" data-modal="example-modal"&gt;
  <!-- Modal content here -->
  &lt;button class="js-modal-toggle" data-modal-toggler="example-modal"&gt;Open Modal&lt;/button&gt;
&lt;/div&gt;</code></pre>

  <h2>Contributing</h2>

  <p>Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>

  <h2>License</h2>

  <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>

</html>
