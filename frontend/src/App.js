import HarajLogo from './assets/haraj_petroly.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* New logo */}
        <img src={HarajLogo} className="App-logo" alt="Haraj Petroly Logo" />
        <h1>Welcome to Haraj Petroly</h1>
        <p>
          Your university marketplace app.
        </p>
      </header>
    </div>
  );
}

export default App;
