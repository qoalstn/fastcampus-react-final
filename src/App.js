import { Provider } from "react-redux";
import CardContainer from "./containers/CardContainer";
import TopContainer from "./containers/TopContainer";
import { TapBar } from "./components";
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TopContainer />
        <CardContainer />
        <TapBar />
      </Provider>
    </div>
  );
}

export default App;
