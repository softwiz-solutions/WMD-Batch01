//  // Select the div element with 'app' id
//  const app = document.getElementById('app');

//  // Create a new H1 element
//  const header = document.createElement('h1');

//  // Create a new text node for the H1 element
//  const text = 'Develop. Preview. Ship.';
//  const headerContent = document.createTextNode(text);

//  // Append the text to the H1 element
//  header.appendChild(headerContent);

//  // Place the H1 element inside the div
//  app.appendChild(header);

// const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
function Form() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
      </form>
    </div>
  );
}
function Header() {
  return (
    <div>
      <h1>Hello react component</h1>
      <Form />
      <button>Submit</button>
    </div>
  );
}

// root.render(<h1>Develop. Preview. Ship.</h1>);
root.render(<Header />);
