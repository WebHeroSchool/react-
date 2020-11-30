import logo from './logo.svg';
import './App.css';

const tenar = false;
const boolean = true;
const number = 22;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{
          color: 'pink'
        }}>Hello World!</h1>
        <p>{number}</p>
        <p>{10 + 10}</p>
        <p>{33}</p>
        <p>{boolean && 'boolean is true'}</p>
        <p>
          {undefined}
          {false}
          {null}
          {true}
        </p>
        <p>
          {tenar ? 'tenar is true' : 'tenar is false'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
