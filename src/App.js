import { Provider } from "react-redux";
import {Bookmark} from "./components";
import CardContainer from './containers/cardContainer'
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CardContainer />
      </Provider>
    </div>
  );
}

export default App;
