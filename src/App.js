import { Provider } from "react-redux";
import Bookmark from "./components/bookmark";
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Bookmark />
      </Provider>
    </div>
  );
}

export default App;
