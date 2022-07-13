/** Dependencies */
import { Provider } from "react-redux";

/** Stores */
import store from "store/store";

/** Components */
import { Header } from "components";

/** Stylesheets */
import "./App.scss";
import Content from "components/Content/Content";

function App() {
  return (
    <div className="appHolder">
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
