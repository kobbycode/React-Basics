import './App.css';

function App() {
  function formatUsername(userName) {
    return userName.toUpperCase();
  }
  function Greetings(userName) {
    if (userName) {
      return <h1>Hello {formatUsername(userName)} !</h1>;
    } else {
      return <h2>Hi This is a wrong user!</h2>;
    }
  }
  const profilePicture = '/logo512.png';
  const image = <img src={profilePicture} alt="logo" />;

  const name = 'Alex Ofori';
  const outputEl = (
    <div>
      <h1>Hello {name}</h1>
      <p>I am glad to have you !</p>
    </div>
  );
  return outputEl;
}

export default App;
