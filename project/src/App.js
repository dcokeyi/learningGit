
import './App.css';
import HelloWorld from './Components/functional/functional';
import Welcome from './Components/class/classComponent';
import List from './Components/lists/list';
import SignInForm from './Components/forms/Form';
import ProductForm from './Components/form/addProduct';


function App() {
  var userName = "Divine"
  var month = "June"

  return (
    <div className="App">
      {/* <HelloWorld message={userName} /> */}
      {/* <Welcome message={month} /> */}
      {/* <List /> */}
      {/* <SignInForm /> */}
      <ProductForm />
    </div>
  );
}

export default App;
