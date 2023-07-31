import { Provider } from "react-redux";
import CardContainer from "./containers/cardContainer";
import { TapBar } from "./components";
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CardContainer />
        <TapBar />
      </Provider>
    </div>
  );
}

export default App;
