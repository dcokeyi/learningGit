
import './App.css';
import HelloWorld from './Components/functional/functional';
import Welcome from './Components/class/classComponent';
import List from './Components/functional/lists';


function App() {
  var userName = "Divine"
  var month = "June"

  return (
    <div className="App">
      <HelloWorld message={userName} />
      <Welcome message={month} />
      <List />
    </div>
  );
}

export default App;
