import logo from './logo.svg';
import './App.css';

function App() {
  function formatUsername(userName) {
    return userName.toUpperCase();
  }
  const name = 'Alex Ofori';
  const output = <h1>Hello {formatUsername(name)} !!!!</h1>;

  return output;
}

export default App;
