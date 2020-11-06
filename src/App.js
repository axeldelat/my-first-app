// import logo from './logo.svg';
import './App.css';
//Components
// import ConditionalRendering from "./components/ConditionalRendering"
import Form from "./components/Form"
import ActiveMenu from "./components/ActiveMenu"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <ConditionalRendering /> */}
      {/* <Form /> */}
      <ActiveMenu/>
      </header>
    </div>
  );
}

export default App;
