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
  { method: 'firstChild', example: '' },
  { method: 'firstElementChild', example: '' },
  { method: 'focus()', example: '' },
  { method: 'getAttribute()', example: '' },
  { method: 'getAttributeNode()', example: '' },
  { method: 'getBoundingClientRect()', example: '' },
  { method: 'getElementsByClassName()', example: '' },
  { method: 'getElementsByTagName()', example: '' },
  { method: 'hasAttribute()', example: '' },
  { method: 'hasAttributes()', example: '' },
  { method: 'hasChildNodes()', example: '' },
  { method: 'id', example: '' },
  { method: 'innerHTML', example: '' },
  { method: 'innerText', example: '' },
  { method: 'insertAdjacentElement()', example: '' },
  { method: 'insertAdjacentHTML()', example: '' },
  { method: 'insertAdjacentText()', example: '' },
  { method: 'insertBefore()', example: '' },
  { method: 'isContentEditable', example: '' },
  { method: 'isDefaultNamespace()', example: '' },
  { method: 'isEqualNode()', example: '' },
  { method: 'isSameNode()', example: '' },
  { method: 'isSupported()', example: '' },
  { method: 'lang', example: '' },
  { method: 'lastChild', example: '' },
  { method: 'lastElementChild', example: '' },
  { method: 'matches()', example: '' },
  { method: 'namespaceURI', example: '' },
  { method: 'nextSibling', example: '' },
  { method: 'nextElementSibling', example: '' },
  { method: 'nodeName', example: '' },
  { method: 'nodeType', example: '' },
  { method: 'nodeValue', example: '' },
  { method: 'normalize()', example: '' },
  { method: 'offsetHeight', example: '' },
  { method: 'offsetWidth', example: '' },
  { method: 'offsetLeft', example: '' },
  { method: 'offsetParent', example: '' },
  { method: 'offsetTop', example: '' },
  { method: 'outerHTML', example: '' },
  { method: 'outerText', example: '' },
  { method: 'ownerDocument', example: '' },
  { method: 'parentNode', example: '' },
  { method: 'parentElement', example: '' },
  { method: 'previousSibling', example: '' },
  { method: 'previousElementSibling', example: '' },
  { method: 'querySelector()', example: '' },
  { method: 'querySelectorAll()', example: '' },
  { method: 'remove()', example: '' },
  { method: 'removeAttribute()', example: '' },
  { method: 'removeAttributeNode()', example: '' },
  { method: 'removeChild()', example: '' },
  { method: 'removeEventListener()', example: '' },
  { method: 'replaceChild()', example: '' },
  { method: 'scrollHeight', example: '' },
  { method: 'scrollIntoView()', example: '' },
  { method: 'scrollLeft', example: '' },
  { method: 'scrollTop', example: '' },
  { method: 'scrollWidth', example: '' },
  { method: 'setAttribute()', example: '' },
  { method: 'setAttributeNode()', example: '' },
  { method: 'style', example: '' },
  { method: 'tabIndex', example: '' },
  { method: 'tagName', example: '' },
  { method: 'textContent', example: '' },
  { method: 'title', example: '' },
  { method: 'toString()', example: '' }
];
