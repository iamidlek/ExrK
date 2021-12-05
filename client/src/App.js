import "bootstrap/dist/css/bootstrap.css";
import SimpleBoard from "./components/SimpleBoard";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <SimpleBoard />
    </Provider>
  );
}

export default App;
