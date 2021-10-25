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
  return image;
}

export default App;
