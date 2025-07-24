export const jsElementSnippets = [
  { method: 'accessKey', example: `<!DOCTYPE html>
<html>
<head>
  <title>accessKey Example</title>
</head>
<body>
  <button id="myButton">Click Me (Alt + C)</button>

  <script>
    const btn = document.getElementById("myButton");

    // Set the access key to "c" so the user can press Alt + C (Windows) or Control + Option + C (Mac) to focus the button
    btn.accessKey = "c";
  </script>
</body>
</html>
` },
  { method: 'addEventListener()', example: `<!DOCTYPE html>
<html>
<head>
  <title>addEventListener Example</title>
</head>
<body>
  <button id="myButton">Click me</button>

  <script>
    const button = document.getElementById("myButton");

    // Add a click event listener to the button
    button.addEventListener("click", function () {
      alert("Button was clicked!");
    });
  </script>
</body>
</html>
` },
  { method: 'after()', example: `<!DOCTYPE html>
<html>
<head>
  <title>after() Example</title>
</head>
<body>
  <h2 id="myHeading">This is a heading</h2>

  <script>
    const heading = document.getElementById("myHeading");

    // Create a new paragraph element
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This paragraph was inserted after the heading.";

    // Insert the paragraph after the heading
    heading.after(newParagraph);
  </script>
</body>
</html>
` },
  { method: 'append()', example: `<!DOCTYPE html>
<html>
<head>
  <title>append() Example</title>
</head>
<body>
  <div id="container">
    <h2>Fruits:</h2>
  </div>

  <script>
    const container = document.getElementById("container");

    // Create a new span element
    const newSpan = document.createElement("span");
    newSpan.textContent = "🍎 Apple";

    // Append both the span and a text string
    container.append(newSpan, " and 🍌 Banana");
  </script>
</body>
</html>
` },
  { method: 'appendChild()', example: `<!DOCTYPE html>
<html>
<head>
  <title>appendChild Example</title>
</head>
<body>
  <div id="container">
    <h2>My Container</h2>
  </div>

  <script>
    // 1. Create a new paragraph element
    const newParagraph = document.createElement("p");

    // 2. Add some text to the paragraph
    newParagraph.textContent = "This paragraph was added using appendChild.";

    // 3. Find the container div
    const container = document.getElementById("container");

    // 4. Append the paragraph to the container
    container.appendChild(newParagraph);
  </script>
</body>
</html>
` },
  { method: 'attributes', example: `<!DOCTYPE html>
<html>
<head>
  <title>attributes Example</title>
</head>
<body>
  <div id="myDiv" class="box" data-info="example"></div>

  <!-- 
  Output of div.attributes:
  Name: id, Value: myDiv
  Name: class, Value: box
  Name: data-info, Value: example
  -->

  <script>
    const div = document.getElementById("myDiv");
    const attrs = div.attributes;

    for (let i = 0; i < attrs.length; i++) {
      console.log(\`Name: \${attrs[i].name}, Value: \${attrs[i].value}\`);
    }
  </script>
</body>
</html>
` },
  { method: 'before()', example: `<!DOCTYPE html>
<html>
<head>
  <title>before() Example</title>
</head>
<body>
  <h2 id="myHeading">This is a heading</h2>

  <script>
    const heading = document.getElementById("myHeading");

    // Create a new paragraph element
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This paragraph was inserted before the heading.";

    // Insert the paragraph before the heading
    heading.before(newParagraph);
  </script>
</body>
</html>
` },
  { method: 'blur()', example: `<!DOCTYPE html>
<html>
<head>
  <title>blur() Example</title>
</head>
<body>
  <input type="text" id="myInput" placeholder="Type something..." />
  <button id="removeFocusBtn">Remove Focus</button>

  <script>
    const input = document.getElementById("myInput");
    const button = document.getElementById("removeFocusBtn");

    // When the button is clicked, remove focus from the input
    button.addEventListener("click", () => {
      input.blur();
    });

    // Automatically focus the input when the page loads (optional)
    input.focus();
  </script>
</body>
</html>
` },
  { method: 'childElementCount', example: `<!DOCTYPE html>
<html>
<head>
  <title>childElementCount Example</title>
</head>
<body>
  <div id="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <span>Span element</span>
    <!-- A comment and whitespace are ignored -->
  </div>

  <script>
    const container = document.getElementById("container");

    // Get the number of child elements (not including text nodes or comments)
    const count = container.childElementCount;

    console.log("Number of child elements:", count);
  </script>

  <!-- 
  Output of container.childElementCount:
  Number of child elements: 3
  -->
</body>
</html>
` },
  { method: 'childNodes', example: `<!DOCTYPE html>
<html>
<head>
  <title>childNodes Example</title>
</head>
<body>
  <div id="container">
    <!-- This is a comment -->
    <p>Paragraph 1</p>
    Text node here
    <p>Paragraph 2</p>
  </div>

  <script>
    const container = document.getElementById("container");

    // Get all child nodes (elements, text, comments, etc.)
    const nodes = container.childNodes;

    // Log details of each node
    nodes.forEach((node, index) => {
      console.log(\`Node \${index}:\`, node.nodeName, \`(Type: \${node.nodeType})\`);
    });
  </script>

  <!-- 
  Output might be something like:
  Node 0: #comment (Type: 8)
  Node 1: P         (Type: 1)
  Node 2: #text     (Type: 3)
  Node 3: P         (Type: 1)
  -->
</body>
</html>
` },
  { method: 'children', example: `<!DOCTYPE html>
<html>
<head>
  <title>children Example</title>
</head>
<body>
  <div id="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <span>A span element</span>
    Text node here
    <!-- This is a comment -->
  </div>

  <script>
    const container = document.getElementById("container");

    // Get only the child elements (not text nodes or comments)
    const childElements = container.children;

    // Log each child element's tag name
    for (let i = 0; i < childElements.length; i++) {
      console.log(\`Child \${i}:\`, childElements[i].tagName);
    }
  </script>

  <!-- 
  Output in console:
  Child 0: P
  Child 1: P
  Child 2: SPAN
  -->
</body>
</html>
` },
  { method: 'classList', example: `<!DOCTYPE html>
<html>
<head>
  <title>classList Example</title>
  <style>
    .highlight {
      background-color: yellow;
    }
    .bold {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p id="myParagraph" class="highlight bold">This is a paragraph.</p>
  <button id="toggleBtn">Toggle Highlight</button>

  <script>
    const paragraph = document.getElementById("myParagraph");
    const button = document.getElementById("toggleBtn");

    // Access and log all class names
    console.log("Class list:", paragraph.classList);

    // Toggle the 'highlight' class on button click
    button.addEventListener("click", () => {
      paragraph.classList.toggle("highlight");
    });
  </script>

  <!-- 
  Output in console:
  Class list: DOMTokenList ['highlight', 'bold', value: 'highlight bold']
  -->
</body>
</html>
` },
  { method: 'className', example: `<!DOCTYPE html>
<html>
<head>
  <title>className Example</title>
  <style>
    .red {
      color: red;
    }
    .blue {
      color: blue;
    }
  </style>
</head>
<body>
  <p id="myParagraph" class="red">This is a paragraph.</p>
  <button id="changeClassBtn">Change to Blue</button>

  <script>
    const paragraph = document.getElementById("myParagraph");
    const button = document.getElementById("changeClassBtn");

    // Log the current class
    console.log("Before:", paragraph.className); // "red"

    button.addEventListener("click", () => {
      // Change the class
      paragraph.className = "blue";

      // Log the new class
      console.log("After:", paragraph.className); // "blue"
    });
  </script>

  <!-- 
  Console Output:
  Before: red
  After: blue
  -->
</body>
</html>
` },
  { method: 'click()', example: `<!DOCTYPE html>
<html>
<head>
  <title>click() Example</title>
</head>
<body>
  <button id="realButton">Real Button</button>
  <button id="simulateClickBtn">Simulate Click on Real Button</button>

  <script>
    const realButton = document.getElementById("realButton");
    const simulateBtn = document.getElementById("simulateClickBtn");

    // Add a click event to the real button
    realButton.addEventListener("click", () => {
      alert("Real button was clicked!");
    });

    // When simulateClickBtn is clicked, programmatically "click" the real button
    simulateBtn.addEventListener("click", () => {
      realButton.click(); // Simulates a user click
    });
  </script>
</body>
</html>
` },
  { method: 'clientHeight', example: `<!DOCTYPE html>
<html>
<head>
  <title>clientHeight Example</title>
  <style>
    #box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid black;
      margin: 10px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div id="box">Hello!</div>

  <p id="result"></p>

  <script>
    const box = document.getElementById("box");
    const result = document.getElementById("result");

    // Get the height of the element including padding
    const height = box.clientHeight;

    result.textContent = \`clientHeight of #box: \${height}px\`;
  </script>

  <!-- 
  Example Output in browser (depends on CSS):
  clientHeight of #box: 140px

  Explanation:
  100px height + 20px top padding + 20px bottom padding = 140px
  (border and margin are NOT included)
  -->
</body>
</html>
` },
  { method: 'clientLeft', example: `<!DOCTYPE html>
<html>
<head>
  <title>clientLeft Example</title>
  <style>
    #box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border-left: 8px solid black;
      border-right: 4px solid red;
      background-color: lightgray;
    }
  </style>
</head>
<body>
  <div id="box">This is a box</div>
  <p id="output"></p>

  <script>
    const box = document.getElementById("box");
    const output = document.getElementById("output");

    // Get the width of the left border
    const leftBorderWidth = box.clientLeft;

    output.textContent = \`clientLeft (left border width) of #box: \${leftBorderWidth}px\`;
  </script>

  <!-- 
  Example Output:
  clientLeft (left border width) of #box: 8px
  -->
</body>
</html>
` },
  { method: 'clientTop', example: `<!DOCTYPE html>
<html>
<head>
  <title>clientTop Example</title>
  <style>
    #box {
      width: 200px;
      height: 100px;
      padding: 10px;
      border-top: 6px solid green;
      border-bottom: 3px solid blue;
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>
  <div id="box">This is a box</div>
  <p id="output"></p>

  <script>
    const box = document.getElementById("box");
    const output = document.getElementById("output");

    // Get the width of the top border
    const topBorderWidth = box.clientTop;

    output.textContent = \`clientTop (top border width) of #box: \${topBorderWidth}px\`;
  </script>

  <!-- 
  Example Output:
  clientTop (top border width) of #box: 6px
  -->
</body>
</html>
` },
  { method: 'clientWidth', example: `<!DOCTYPE html>
<html>
<head>
  <title>clientWidth Example</title>
  <style>
    #box {
      width: 300px;
      padding: 20px;
      border: 5px solid black;
      margin: 10px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div id="box">This is a box with padding and border.</div>
  <p id="output"></p>

  <script>
    const box = document.getElementById("box");
    const output = document.getElementById("output");

    // Get the width of the box including padding (not border or margin)
    const width = box.clientWidth;

    output.textContent = \`clientWidth of #box: \${width}px\`;
  </script>

  <!-- 
  Example Output:
  clientWidth of #box: 340px

  Explanation:
  300px width + 20px left padding + 20px right padding = 340px
  Border and margin are NOT included in clientWidth.
  -->
</body>
</html>
` },
  { method: 'cloneNode()', example: `<!DOCTYPE html>
<html>
<head>
  <title>cloneNode Example</title>
</head>
<body>
  <p id="original">This is the original paragraph.</p>
  <button id="cloneBtn">Clone Paragraph</button>

  <script>
    const original = document.getElementById("original");
    const button = document.getElementById("cloneBtn");

    button.addEventListener("click", () => {
      // Clone the paragraph (true = deep clone with child nodes)
      const clone = original.cloneNode(true);

      // Optionally change the text or attributes of the clone
      clone.textContent = "This is a cloned paragraph.";

      // Insert the clone after the original
      original.after(clone);
    });
  </script>
</body>
</html>
` },
  { method: 'closest()', example: `<!DOCTYPE html>
<html>
<head>
  <title>closest() Example</title>
  <style>
    .box {
      border: 1px solid #000;
      padding: 10px;
      margin: 20px;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <div class="box highlight">
    <div class="inner-box">
      <button id="checkBtn">Find Closest '.highlight'</button>
    </div>
  </div>

  <script>
    const button = document.getElementById("checkBtn");

    button.addEventListener("click", () => {
      const closestHighlight = button.closest(".highlight");
      closestHighlight.style.border = "3px solid red";
      console.log(closestHighlight);
    });

    // OUTPUT IN CONSOLE WHEN BUTTON IS CLICKED:
    /*
    <div class="box highlight">
      <div class="inner-box">
        <button id="checkBtn">Find Closest '.highlight'</button>
      </div>
    </div>
    */
  </script>
</body>
</html>
` },
  { method: 'compareDocumentPosition()', example: `<!DOCTYPE html>
<html>
<head>
  <title>compareDocumentPosition() Example</title>
</head>
<body>

  <div id="elemA">Element A</div>
  <div id="elemB">Element B</div>

  <script>
    const a = document.getElementById("elemA");
    const b = document.getElementById("elemB");

    const result = a.compareDocumentPosition(b);

    console.log("Bitmask result:", result);

    // Check the meaning of the result using bitwise flags
    const meanings = [];

    if (result & Node.DOCUMENT_POSITION_DISCONNECTED) meanings.push("disconnected");
    if (result & Node.DOCUMENT_POSITION_PRECEDING) meanings.push("preceding");
    if (result & Node.DOCUMENT_POSITION_FOLLOWING) meanings.push("following");
    if (result & Node.DOCUMENT_POSITION_CONTAINS) meanings.push("contains");
    if (result & Node.DOCUMENT_POSITION_CONTAINED_BY) meanings.push("contained by");

    console.log("Meaning:", meanings.join(", "));

    /*
    OUTPUT:
    Bitmask result: 4
    Meaning: following

    Explanation:
    Element B follows Element A in the document.
    */
  </script>

</body>
</html>
` },
  { method: 'contains()', example: `<!DOCTYPE html>
<html>
<head>
  <title>contains() Example</title>
</head>
<body>

  <div id="parent">
    <p id="child">I am a child</p>
  </div>

  <script>
    const parent = document.getElementById("parent");
    const child = document.getElementById("child");

    const result = parent.contains(child);
    console.log(result); // true

    /*
    OUTPUT:
    true

    Explanation:
    The <p> element with id="child" is inside the <div> with id="parent", so parent.contains(child) returns true.
    */
  </script>

</body>
</html>
` },
  { method: 'contentEditable', example: `<!DOCTYPE html>
<html>
<head>
  <title>contentEditable Example</title>
</head>
<body>

  <p id="editable" contentEditable="true">You can edit this text!</p>

  <script>
    const para = document.getElementById("editable");

    // Check if the paragraph is editable
    const isEditable = para.contentEditable;

    console.log(isEditable); // "true"

    /*
    OUTPUT:
    true

    Explanation:
    The <p> element has the attribute contentEditable="true",
    so para.contentEditable returns "true", meaning the content is editable.
    */
  </script>

</body>
</html>
` },
  { method: 'dir', example: `<!DOCTYPE html>
<html>
<head>
  <title>dir Example</title>
</head>
<body>

  <p id="paragraph">This text will be reversed if direction is set to 'rtl'.</p>

  <script>
    const para = document.getElementById("paragraph");

    // Set text direction to right-to-left
    para.dir = "rtl";

    // Get the current text direction
    const direction = para.dir;

    console.log(direction); // "rtl"

    /*
    OUTPUT:
    rtl

    Explanation:
    We set para.dir = "rtl", which means the text flows from right to left.
    para.dir then returns "rtl".
    */
  </script>

</body>
</html>
` },
  { method: 'firstChild', example: `<!DOCTYPE html>
<html>
<head>
  <title>firstChild Example</title>
</head>
<body>

  <div id="container">
    <p>Hello</p>
    <p>World</p>
  </div>

  <script>
    const container = document.getElementById("container");
    const firstChild = container.firstChild;

    console.log(firstChild);

    /*
    OUTPUT:
    #text

    Explanation:
    The firstChild of the container is a text node (often a newline or space between the <div> and the first <p>),
    not the <p> element. Use firstElementChild if you want to skip text nodes and get the first element directly.
    */
  </script>

</body>
</html>
` },
  { method: 'firstElementChild', example: `<!DOCTYPE html>
<html>
<head>
  <title>firstElementChild Example</title>
</head>
<body>

  <div id="container">
    <p>Hello</p>
    <p>World</p>
  </div>

  <script>
    const container = document.getElementById("container");
    const firstElem = container.firstElementChild;

    console.log(firstElem);

    /*
    OUTPUT:
    <p>Hello</p>

    Explanation:
    \`firstElementChild\` skips over text nodes (like whitespace or newlines) and returns the first actual HTML element inside the container.
    In this case, it's the <p>Hello</p> element.
    */
  </script>

</body>
</html>
` },
  { method: 'focus()', example: `<!DOCTYPE html>
<html>
<head>
  <title>focus() Example</title>
</head>
<body>

  <input type="text" id="myInput" placeholder="Click button to focus me" />
  <button onclick="focusInput()">Focus the input</button>

  <script>
    function focusInput() {
      const input = document.getElementById("myInput");
      input.focus();
    }

    /*
    OUTPUT:
    When you click the button, the input field is automatically focused,
    as if you clicked inside it. This is useful for guiding user interaction,
    such as placing the cursor where text input is expected.

    You won't see console output, but you'll notice the blinking cursor inside the input field.
    */
  </script>

</body>
</html>
` },
  { method: 'getAttribute()', example: `<!DOCTYPE html>
<html>
<head>
  <title>getAttribute() Example</title>
</head>
<body>

  <a id="myLink" href="https://example.com" target="_blank">Visit Example.com</a>
  <button onclick="showHref()">Show href attribute</button>

  <p id="output"></p>

  <script>
    function showHref() {
      const link = document.getElementById("myLink");
      const hrefValue = link.getAttribute("href");
      document.getElementById("output").textContent = \`The href is: \${hrefValue}\`;
    }

    /*
    OUTPUT:
    When the button is clicked, it displays:
    "The href is: https://example.com"
    This shows that getAttribute('href') retrieves the value of the href attribute of the <a> element.
    */
  </script>

</body>
</html>
` },
  { method: 'getAttributeNode()', example: `<!DOCTYPE html>
<html>
<head>
  <title>getAttributeNode() Example</title>
</head>
<body>

  <img id="myImage" src="cat.jpg" alt="A cute cat">

  <button onclick="showAltNode()">Show alt attribute node</button>

  <p id="output"></p>

  <script>
    function showAltNode() {
      const img = document.getElementById("myImage");
      const attrNode = img.getAttributeNode("alt");
      document.getElementById("output").textContent = \`Attribute name: \${attrNode.name}, value: \${attrNode.value}\`;
    }

    /*
    OUTPUT:
    When the button is clicked, it displays:
    "Attribute name: alt, value: A cute cat"
    This shows that getAttributeNode("alt") returns an Attr object with name and value.
    */
  </script>

</body>
</html>
` },
  { method: 'getBoundingClientRect()', example: `<!DOCTYPE html>
<html>
<head>
  <title>getBoundingClientRect() Example</title>
  <style>
    #box {
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      margin-top: 150px;
      margin-left: 100px;
    }
  </style>
</head>
<body>

  <div id="box">Hello</div>
  <button onclick="showRect()">Get Position & Size</button>
  <pre id="output"></pre>

  <script>
    function showRect() {
      const box = document.getElementById('box');
      const rect = box.getBoundingClientRect();
      document.getElementById('output').textContent =
        \`Top: \${rect.top}px\nLeft: \${rect.left}px\nWidth: \${rect.width}px\nHeight: \${rect.height}px\`;
    }
  </script>

</body>
</html>
` },
  { method: 'getElementsByClassName()', example: `<!DOCTYPE html>
<html>
<head>
  <title>getElementsByClassName() Example</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>

  <p class="highlight">This is highlighted.</p>
  <p>This is normal.</p>
  <p class="highlight">This is also highlighted.</p>
  <button onclick="highlightAll()">Add Border to Highlighted</button>

  <script>
    function highlightAll() {
      const highlightedElements = document.getElementsByClassName('highlight');
      for (let i = 0; i < highlightedElements.length; i++) {
        highlightedElements[i].style.border = '2px solid red';
      }
    }
  </script>

</body>
</html>
` },
  { method: 'getElementsByTagName()', example: `<!DOCTYPE html>
<html>
<head>
  <title>getElementsByTagName() Example</title>
</head>
<body>

  <h2>Fruits</h2>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
  </ul>

  <button onclick="colorListItems()">Color All List Items</button>

  <script>
    function colorListItems() {
      const listItems = document.getElementsByTagName('li');
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = 'blue';
      }
    }
  </script>

</body>
</html>
` },
  { method: 'hasAttribute()', example: `<!DOCTYPE html>
<html>
<head>
  <title>hasAttribute() Example</title>
</head>
<body>

  <input type="text" id="username" placeholder="Enter username">

  <button onclick="checkAttribute()">Check Attribute</button>

  <script>
    function checkAttribute() {
      const input = document.getElementById('username');
      if (input.hasAttribute('placeholder')) {
        alert('The input has a placeholder attribute.');
      } else {
        alert('The input does NOT have a placeholder attribute.');
      }
    }
  </script>

</body>
</html>
` },
  { method: 'hasAttributes()', example: `<!DOCTYPE html>
<html>
<head>
  <title>hasAttributes() Example</title>
</head>
<body>

  <div id="box" class="container" data-info="example"></div>

  <button onclick="checkAttributes()">Check Attributes</button>

  <script>
    function checkAttributes() {
      const box = document.getElementById('box');
      if (box.hasAttributes()) {
        console.log('The element has attributes.');
      } else {
        console.log('The element has NO attributes.');
      }
    }

    checkAttributes(); // You can also run this immediately
  </script>

</body>
</html>
` },
  { method: 'hasChildNodes()', example: `<!DOCTYPE html>
<html>
<head>
  <title>hasChildNodes() Example</title>
</head>
<body>

  <div id="parent">
    <p>This is a child paragraph.</p>
  </div>

  <button onclick="checkChildren()">Check if element has child nodes</button>

  <script>
    function checkChildren() {
      const parent = document.getElementById('parent');
      if (parent.hasChildNodes()) {
        console.log('The element has child nodes.');
      } else {
        console.log('The element has NO child nodes.');
      }
    }
  </script>

</body>
</html>` },
  { method: 'id', example: `<!DOCTYPE html>
<html>
<head>
  <title>id Example</title>
</head>
<body>

  <div id="originalId">Hello</div>
  <button onclick="changeId()">Change ID</button>

  <script>
    function changeId() {
      const div = document.getElementById('originalId');

      // Lire l'id actuel
      console.log('Old ID:', div.id); // Affiche "originalId"

      // Changer l'id
      div.id = 'newId';
      console.log('New ID:', div.id); // Affiche "newId"
    }
  </script>

</body>
</html>` },
  { method: 'innerHTML', example: `<!DOCTYPE html>
<html>
<head>
  <title>id Example</title>
</head>
<body>

  <div id="originalId">Hello</div>
  <button onclick="changeId()">Change ID</button>

  <script>
    function changeId() {
      const div = document.getElementById('originalId');

      // Lire l'id actuel
      console.log('Old ID:', div.id); // Affiche "originalId"

      // Changer l'id
      div.id = 'newId';
      console.log('New ID:', div.id); // Affiche "newId"
    }
  </script>

</body>
</html>` },
  { method: 'innerText', example: `<!DOCTYPE html>
<html>
<head>
  <title>innerText Example</title>
</head>
<body>

  <div id="message">Bienvenue <strong>utilisateur</strong> !</div>
  <button onclick="changeText()">Changer le texte</button>

  <script>
    function changeText() {
      const div = document.getElementById('message');

      // Lire le texte visible
      console.log('Texte actuel :', div.innerText); // Affiche : Bienvenue utilisateur !

      // Modifier le texte
      div.innerText = 'Texte remplacé par JavaScript.';
    }
  </script>

</body>
</html>` },
  { method: 'insertAdjacentElement()', example: `<!DOCTYPE html>
<html>
<head>
  <title>insertAdjacentElement Example</title>
</head>
<body>

  <div id="reference">Élément de référence</div>

  <script>
    const ref = document.getElementById('reference');

    // Création d'un nouvel élément
    const newEl = document.createElement('p');
    newEl.textContent = 'Paragraphe inséré après l\'élément de référence.';

    // Insertion après l'élément de référence
    ref.insertAdjacentElement('afterend', newEl);
  </script>

</body>
</html>` },
  { method: 'insertAdjacentHTML()', example: `<!DOCTYPE html>
<html>
<head>
  <title>insertAdjacentHTML Example</title>
</head>
<body>

  <div id="container">Contenu existant</div>

  <script>
    const container = document.getElementById('container');

    // Insertion d'un nouveau bouton juste avant la fin de l'élément #container
    container.insertAdjacentHTML('beforeend', '<button>Cliquer ici</button>');
  </script>

</body>
</html>` },
  { method: 'insertAdjacentText()', example: `<!DOCTYPE html>
<html>
<head>
  <title>insertAdjacentText Example</title>
</head>
<body>

  <div id="message">Bonjour</div>

  <script>
    const msg = document.getElementById('message');

    // Ajoute du texte à la fin de l'élément (à l'intérieur)
    msg.insertAdjacentText('beforeend', ', comment ça va ?');
  </script>

</body>
</html>` },
  { method: 'insertBefore()', example: `<!DOCTYPE html>
<html>
<head>
  <title>insertBefore Example</title>
</head>
<body>

  <ul id="list">
    <li>Item 1</li>
    <li id="item2">Item 2</li>
  </ul>

  <script>
    const list = document.getElementById('list');
    const item2 = document.getElementById('item2');

    // Crée un nouvel élément <li>
    const newItem = document.createElement('li');
    newItem.textContent = 'Inserted Item';

    // Insère le nouvel élément avant "Item 2"
    list.insertBefore(newItem, item2);
  </script>

</body>
</html>` },
  { method: 'isContentEditable', example: `<!DOCTYPE html>
<html>
<head>
  <title>isContentEditable Example</title>
</head>
<body>

  <div id="editable" contenteditable="true">You can edit this text.</div>
  <div id="nonEditable">This text is not editable.</div>

  <script>
    const editableDiv = document.getElementById('editable');
    const nonEditableDiv = document.getElementById('nonEditable');

    console.log(editableDiv.isContentEditable);     // true
    console.log(nonEditableDiv.isContentEditable);  // false
  </script>

</body>
</html>` },
  { method: 'isDefaultNamespace()', example: `<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="50" cy="50" r="40" fill="red" />
</svg>

<script>
  const circle = document.getElementById("myCircle");
  const svgNamespace = "http://www.w3.org/2000/svg";

  console.log(circle.isDefaultNamespace(svgNamespace)); // true
  console.log(circle.isDefaultNamespace("http://example.com")); // false
</script>

</body>
</html>` },
  { method: 'isEqualNode()', example: `<!DOCTYPE html>
<html>
<body>

<div id="div1"><p>Hello</p></div>
<div id="div2"><p>Hello</p></div>

<script>
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");

  console.log(div1.isEqualNode(div2)); // true
</script>

</body>
</html>` },
  { method: 'isSameNode()', example: `<!DOCTYPE html>
<html>
<body>

<div id="myDiv">Hello</div>

<script>
  const a = document.getElementById("myDiv");
  const b = document.getElementById("myDiv");
  const c = document.createElement("div");

  console.log(a.isSameNode(b)); // true (même nœud exact)
  console.log(a.isSameNode(c)); // false (nœuds différents)
</script>

</body>
</html>` },
  { method: 'isSupported()', example: `<!DOCTYPE html>
<html>
<body>

<script>
  // Vérifie si la méthode "createElement" est supportée dans le DOM niveau 1
  const isSupported = document.implementation.isSupported("HTML", "1.0");
  console.log(isSupported); // true dans presque tous les navigateurs modernes
</script>

</body>
</html>` },
  { method: 'lang', example: `<!DOCTYPE html>
<html>
<body>

<p id="myParagraph" lang="en">Hello!</p>

<script>
  const paragraph = document.getElementById("myParagraph");

  // 🔍 Lire la langue actuelle
  console.log(paragraph.lang); // "en"

  // ✏️ Modifier la langue
  paragraph.lang = "fr";
  console.log(paragraph.lang); // "fr"
</script>

</body>
</html>
` },
  { method: 'lastChild', example: `<!DOCTYPE html>
<html>
<body>

<div id="container">
  <p>First paragraph</p>
  <p>Last paragraph</p>
</div>

<script>
  const container = document.getElementById("container");

  // Récupère le dernier nœud enfant (peut être un élément, un texte, un commentaire, etc.)
  const lastChild = container.lastChild;

  console.log(lastChild); // Cela peut afficher un élément ou un nœud texte selon le DOM
</script>

</body>
</html>
` },
  { method: 'lastElementChild', example: `<!DOCTYPE html>
<html>
<body>

<div id="container">
  <p>First paragraph</p>
  <p>Last paragraph</p>
</div>

<script>
  const container = document.getElementById("container");

  // Récupère le dernier élément enfant (ignore les nœuds texte/commentaires)
  const lastElement = container.lastElementChild;

  console.log(lastElement.textContent); // Affiche : "Last paragraph"
</script>

</body>
</html>
` },
  { method: 'matches()', example: `<!DOCTYPE html>
<html>
<body>

<div class="box special">This is a box</div>

<script>
  const box = document.querySelector(".box");

  // Vérifie si l'élément correspond au sélecteur ".special"
  if (box.matches(".special")) {
    console.log("L'élément a la classe 'special'.");
  } else {
    console.log("L'élément n'a pas la classe 'special'.");
  }
</script>

</body>
</html>
` },
  { method: 'namespaceURI', example: `<!DOCTYPE html>
<html>
<body>

<svg width="100" height="100" id="mySvg">
  <circle cx="50" cy="50" r="40" stroke="green"
          stroke-width="4" fill="yellow" />
</svg>

<script>
  const svg = document.getElementById("mySvg");
  console.log(svg.namespaceURI); // "http://www.w3.org/2000/svg"
</script>

</body>
</html>
` },
  { method: 'nextSibling', example: `<!DOCTYPE html>
<html>
<body>

<div id="first">Premier</div>
<!-- Un commentaire ou un espace ici est aussi un nœud -->
<div id="second">Deuxième</div>

<script>
  const firstDiv = document.getElementById("first");
  const nextNode = firstDiv.nextSibling;

  console.log(nextNode); // Cela peut afficher un nœud de type texte (espace, saut de ligne, etc.)
</script>

</body>
</html>
` },
  { method: 'nextElementSibling', example: `<!DOCTYPE html>
<html>
<body>

<div id="first">Premier élément</div>
<div id="second">Deuxième élément</div>

<script>
  const firstDiv = document.getElementById("first");
  const nextElement = firstDiv.nextElementSibling;

  console.log(nextElement);         // <div id="second">Deuxième élément</div>
  console.log(nextElement.innerText); // "Deuxième élément"
</script>

</body>
</html>
` },
  { method: 'nodeName', example: `<!DOCTYPE html>
<html>
<body>

<p id="myPara">Bonjour</p>

<script>
  const element = document.getElementById("myPara");
  console.log(element.nodeName); // "P"
</script>

</body>
</html>
` },
  { method: 'nodeType', example: `<!DOCTYPE html>
<html>
<body>

<p id="myPara">Bonjour</p>

<script>
  const element = document.getElementById("myPara");
  console.log(element.nodeType); // 1 (ELEMENT_NODE)
</script>

</body>
</html>
` },
  { method: 'nodeValue', example: `<p id="myPara">Hello world!</p>

<script>
  const para = document.getElementById("myPara");
  const textNode = para.firstChild; // récupère le nœud texte

  console.log(textNode.nodeValue); // "Hello world!"
</script>
` },
  { method: 'normalize()', example: `<div id="myDiv">
  Hello
  <span> </span>
  World
</div>

<script>
  const div = document.getElementById("myDiv");

  // Créons volontairement des nœuds texte adjacents
  div.appendChild(document.createTextNode("!"));
  div.appendChild(document.createTextNode("!!"));

  console.log(div.childNodes.length); // Avant normalize : plusieurs nœuds texte

  div.normalize(); // Fusionne les nœuds texte adjacents

  console.log(div.childNodes.length); // Après normalize : nœuds texte fusionnés
</script>
` },
  { method: 'offsetHeight', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    #box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid black;
      overflow: auto;
    }
  </style>
</head>
<body>

<div id="box">
  Some content inside the box.
</div>

<script>
  const box = document.getElementById("box");
  console.log("Hauteur totale de l'élément :", box.offsetHeight + "px");
</script>

</body>
</html>
` },
  { method: 'offsetWidth', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    #box {
      width: 300px;
      height: 100px;
      padding: 20px;
      border: 5px solid black;
      overflow: auto;
    }
  </style>
</head>
<body>

<div id="box">
  This is a box with some content.
</div>

<script>
  const box = document.getElementById("box");
  console.log("Largeur totale de l'élément :", box.offsetWidth + "px");
</script>

</body>
</html>
` },
  { method: 'offsetLeft', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      padding: 50px;
    }

    #myBox {
      position: absolute;
      left: 100px;
      top: 20px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  </style>
</head>
<body>

<div class="container">
  <div id="myBox">Box</div>
</div>

<script>
  const box = document.getElementById("myBox");
  console.log("Distance depuis le bord gauche du parent :", box.offsetLeft + "px");
</script>

</body>
</html>
` },
  { method: 'offsetParent', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .wrapper {
      position: relative;
      padding: 20px;
      background-color: lightgray;
    }

    .inner {
      position: absolute;
      left: 50px;
      top: 30px;
      background-color: lightcoral;
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>

<div class="wrapper" id="container">
  <div class="inner" id="box">Box</div>
</div>

<script>
  const box = document.getElementById("box");
  const offsetParent = box.offsetParent;

  console.log("offsetParent ID:", offsetParent.id); // "container"
  console.log("offsetLeft:", box.offsetLeft + "px");
  console.log("offsetTop:", box.offsetTop + "px");
</script>

</body>
</html>
` },
  { method: 'offsetTop', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      height: 300px;
      background-color: lightgray;
    }

    .box {
      position: absolute;
      top: 100px;
      left: 50px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  </style>
</head>
<body>

<div class="container">
  <div class="box" id="myBox">Box</div>
</div>

<script>
  const box = document.getElementById("myBox");
  const offsetTop = box.offsetTop;

  console.log("offsetTop:", offsetTop + "px"); // Affiche "100px"
</script>

</body>
</html>
` },
  { method: 'outerHTML', example: `<div id="myDiv">Hello <strong>world</strong>!</div>

<script>
  const div = document.getElementById("myDiv");
  console.log(div.outerHTML);
  // Affiche : <div id="myDiv">Hello <strong>world</strong>!</div>
</script>
` },
  { method: 'outerText', example: `<div id="example">Hello <strong>world</strong>!</div>

<script>
  const div = document.getElementById("example");
  console.log(div.outerText); 
  // Affiche : Hello world
</script>
` },
  { method: 'ownerDocument', example: `<div id="myDiv">Hello</div>

<script>
  const div = document.getElementById("myDiv");

  // Récupérer le document auquel appartient l'élément
  const doc = div.ownerDocument;

  console.log(doc === document); // true
  console.log(doc.title); // Affiche le titre de la page
</script>
` },
  { method: 'parentNode', example: `<div id="parent">
  <p id="child">Bonjour !</p>
</div>

<script>
  const child = document.getElementById("child");

  // Obtenir le parent de l'élément
  const parent = child.parentNode;

  console.log(parent.id); // "parent"
</script>
` },
  { method: 'parentElement', example: `<div id="container">
  <p id="child">Hello!</p>
</div>

<script>
  const child = document.getElementById("child");

  // Obtenir le parent élément de l'élément
  const parent = child.parentElement;

  console.log(parent.id); // "container"
</script>
` },
  { method: 'previousSibling', example: `<div id="container">
  <p id="first">First paragraph</p>
  <!-- A text node (like whitespace) might be here -->
  <p id="second">Second paragraph</p>
</div>

<script>
  const second = document.getElementById("second");

  const previous = second.previousSibling;

  console.log(previous); // Cela peut être un nœud de texte ou un commentaire

  // Pour s'assurer que c'est un élément HTML :
  if (previous.nodeType === 1) {
    console.log("Previous element is:", previous.tagName);
  } else {
    console.log("Previous sibling is not an element:", previous.nodeName);
  }
</script>
` },
  { method: 'previousElementSibling', example: `<div id="container">
  <p id="first">First paragraph</p>
  <p id="second">Second paragraph</p>
</div>

<script>
  const second = document.getElementById("second");

  const previousElement = second.previousElementSibling;

  console.log(previousElement); // <p id="first">First paragraph</p>
  console.log(previousElement.textContent); // "First paragraph"
</script>
` },
  { method: 'querySelector()', example: `<div id="container">
  <p class="message">Hello</p>
  <p class="message">Hi again</p>
</div>

<script>
  const firstMessage = document.querySelector(".message");

  console.log(firstMessage.textContent); // "Hello"
</script>
` },
  { method: 'querySelectorAll()', example: `<div id="container">
  <p class="item">First</p>
  <p class="item">Second</p>
  <p class="item">Third</p>
</div>

<script>
  const items = document.querySelectorAll(".item");

  items.forEach((el) => {
    console.log(el.textContent);
  });

  // Résultat dans la console :
  // First
  // Second
  // Third
</script>
` },
  { method: 'remove()', example: `<div id="to-delete">Ce texte sera supprimé</div>

<script>
  const element = document.getElementById("to-delete");
  element.remove(); // L'élément est supprimé du DOM
</script>
` },
  { method: 'removeAttribute()', example: `<button id="myBtn" disabled>Click Me</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.removeAttribute("disabled"); // Le bouton devient cliquable
</script>
` },
  { method: 'removeAttributeNode()', example: `<div id="myDiv" title="Hello world"></div>

<script>
  const div = document.getElementById("myDiv");

  // Récupérer le nœud d'attribut "title"
  const attr = div.getAttributeNode("title");

  // Supprimer l'attribut en utilisant removeAttributeNode()
  const removedAttr = div.removeAttributeNode(attr);

  console.log(removedAttr); // Affiche : title="Hello world"
</script>
` },
  { method: 'removeChild()', example: `<ul id="myList">
  <li>Item 1</li>
  <li id="itemToRemove">Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById("myList");
  const item = document.getElementById("itemToRemove");

  // Supprime l'élément <li> avec l'id "itemToRemove"
  const removedItem = list.removeChild(item);

  console.log(removedItem); // Affiche : <li id="itemToRemove">Item 2</li>
</script>
` },
  { method: 'removeEventListener()', example: `<button id="myBtn">Click me</button>

<script>
  const button = document.getElementById("myBtn");

  function handleClick() {
    alert("Button clicked!");
  }

  // Ajoute l'événement
  button.addEventListener("click", handleClick);

  // Supprime l'événement après 5 secondes
  setTimeout(() => {
    button.removeEventListener("click", handleClick);
    console.log("Event listener removed.");
  }, 5000);
</script>
` },
  { method: 'replaceChild()', example: `<div id="container">
  <p id="oldPara">This is the old paragraph.</p>
</div>

<script>
  const container = document.getElementById("container");
  const oldParagraph = document.getElementById("oldPara");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is the new paragraph.";

  // Remplace le paragraphe existant par le nouveau
  container.replaceChild(newParagraph, oldParagraph);
</script>
` },
  { method: 'scrollHeight', example: `<div id="content" style="width: 300px; height: 100px; overflow-y: scroll; padding: 10px; border: 1px solid #ccc;">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod augue ut dolor gravida.</p>
</div>

<script>
  const content = document.getElementById("content");
  console.log("scrollHeight:", content.scrollHeight); // Affiche la hauteur totale du contenu, y compris le contenu non visible
</script>
` },
  { method: 'scrollIntoView()', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .spacer {
      height: 1000px;
    }
    #target {
      background-color: lightgreen;
      padding: 20px;
    }
  </style>
</head>
<body>

<div class="spacer">Scroll down...</div>

<div id="target">🎯 Élément cible</div>

<button onclick="scrollToTarget()">Aller à l'élément</button>

<script>
  function scrollToTarget() {
    const target = document.getElementById("target");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
</script>

</body>
</html>
` },
  { method: 'scrollLeft', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    #scrollBox {
      width: 200px;
      height: 100px;
      overflow: auto;
      white-space: nowrap;
      border: 1px solid black;
    }
    .content {
      display: inline-block;
      width: 600px;
      height: 100px;
      background: linear-gradient(to right, red, yellow, green, blue);
    }
  </style>
</head>
<body>

<div id="scrollBox">
  <div class="content"></div>
</div>

<button onclick="logScroll()">Afficher scrollLeft</button>
<button onclick="scrollRight()">Faire défiler à droite</button>

<script>
  const scrollBox = document.getElementById("scrollBox");

  function logScroll() {
    console.log("scrollLeft:", scrollBox.scrollLeft);
  }

  function scrollRight() {
    scrollBox.scrollLeft += 100; // Fait défiler de 100 pixels vers la droite
  }
</script>

</body>
</html>
` },
  { method: 'scrollTop', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    #scrollBox {
      width: 300px;
      height: 150px;
      overflow-y: auto;
      border: 1px solid black;
    }

    .content {
      height: 600px;
      background: linear-gradient(white, lightblue);
    }
  </style>
</head>
<body>

<div id="scrollBox">
  <div class="content"></div>
</div>

<button onclick="logScroll()">Afficher scrollTop</button>
<button onclick="scrollDown()">Faire défiler vers le bas</button>

<script>
  const scrollBox = document.getElementById("scrollBox");

  function logScroll() {
    console.log("scrollTop:", scrollBox.scrollTop);
  }

  function scrollDown() {
    scrollBox.scrollTop += 50; // Fait défiler de 50 pixels vers le bas
  }
</script>

</body>
</html>
` },
  { method: 'scrollWidth', example: `<!DOCTYPE html>
<html>
<head>
  <style>
    #scrollBox {
      width: 200px;
      overflow-x: auto;
      border: 1px solid black;
    }

    .content {
      width: 800px;
      height: 100px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>

<div id="scrollBox">
  <div class="content"></div>
</div>

<button onclick="showScrollWidth()">Afficher scrollWidth</button>

<script>
  function showScrollWidth() {
    const box = document.getElementById("scrollBox");
    console.log("scrollWidth:", box.scrollWidth); // Affiche 800
  }
</script>

</body>
</html>
` },
  { method: 'setAttribute()', example: `<!DOCTYPE html>
<html>
<head>
  <title>Exemple setAttribute</title>
</head>
<body>

<img id="myImage" src="placeholder.jpg" alt="Image par défaut">

<button onclick="changeImage()">Changer l'image</button>

<script>
  function changeImage() {
    const img = document.getElementById("myImage");
    img.setAttribute("src", "https://via.placeholder.com/300x150");
    img.setAttribute("alt", "Nouvelle image");
  }
</script>

</body>
</html>
` },
  { method: 'setAttributeNode()', example: `<!DOCTYPE html>
<html>
<head>
  <title>Exemple setAttributeNode</title>
</head>
<body>

<p id="myParagraph">Paragraphe exemple</p>
<button onclick="addClassAttribute()">Ajouter un attribut</button>

<script>
  function addClassAttribute() {
    const para = document.getElementById("myParagraph");

    // Crée un attribut "class"
    const attr = document.createAttribute("class");
    attr.value = "highlighted";

    // Ajoute le nœud d'attribut au paragraphe
    para.setAttributeNode(attr);
  }
</script>

<style>
  .highlighted {
    color: red;
    font-weight: bold;
  }
</style>

</body>
</html>
` },
  { method: 'style', example: `<!DOCTYPE html>
<html>
<head>
  <title>Exemple style</title>
</head>
<body>

<p id="text">Ceci est un paragraphe</p>
<button onclick="changerStyle()">Changer le style</button>

<script>
  function changerStyle() {
    const element = document.getElementById("text");
    element.style.color = "blue";
    element.style.fontSize = "20px";
    element.style.backgroundColor = "lightgray";
  }
</script>

</body>
</html>
` },
  { method: 'tabIndex', example: `<!DOCTYPE html>
<html>
<head>
  <title>Exemple tabIndex</title>
</head>
<body>

<p id="para" tabindex="2">Paragraphe 1 (tabIndex 2)</p>
<button id="btn1" tabindex="1">Bouton 1 (tabIndex 1)</button>
<button id="btn2">Bouton 2 (tabIndex par défaut)</button>

<script>
  // Modifier dynamiquement le tabIndex
  const para = document.getElementById("para");
  console.log(para.tabIndex); // Affiche 2

  // Changer dynamiquement l'ordre de tabulation
  para.tabIndex = 3;
</script>

</body>
</html>
` },
  { method: 'tagName', example: `<!DOCTYPE html>
<html>
<body>

<div id="myDiv">Bonjour</div>
<p id="myPara">Ceci est un paragraphe.</p>

<script>
  const divElement = document.getElementById("myDiv");
  const paraElement = document.getElementById("myPara");

  console.log(divElement.tagName); // Affiche "DIV"
  console.log(paraElement.tagName); // Affiche "P"
</script>

</body>
</html>
` },
  { method: 'textContent', example: `<!DOCTYPE html>
<html>
<body>

<div id="myDiv">
  <p>Hello <strong>world</strong>!</p>
</div>

<script>
  const div = document.getElementById("myDiv");

  // Lire le texte brut (sans balises HTML)
  console.log(div.textContent); // Affiche : "Hello world!"

  // Modifier le contenu textuel
  div.textContent = "Nouveau contenu texte.";
</script>

</body>
</html>
` },
  { method: 'title', example: `<!DOCTYPE html>
<html>
<body>

<button id="myBtn">Passe ta souris ici</button>

<script>
  const btn = document.getElementById("myBtn");

  // Définir un titre (info-bulle au survol)
  btn.title = "Clique ici pour exécuter une action";

  // Lire la valeur du titre
  console.log(btn.title); // Affiche : "Clique ici pour exécuter une action"
</script>

</body>
</html>
` },
  { method: 'toString()', example: `<!DOCTYPE html>
<html>
<body>

<div id="myDiv">Bonjour</div>

<script>
  const div = document.getElementById("myDiv");

  // Utilisation de toString()
  console.log(div.toString()); // Affiche : "[object HTMLDivElement]"
</script>

</body>
</html>
` }
];
