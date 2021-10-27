import './App.css';
import Time from './Time';

function App() {
  return (
    <div>
      <Time date={new Date()} />
    </div>
  );
}

export default App;
