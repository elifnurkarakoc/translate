/** Dependencies */
import { Provider } from "react-redux";
import { lazy } from "react";

/** Stores */
import store from "store/store";

/** Stylesheets */
import "./App.scss";

/** Components */
const Content = lazy(() => import("components/Content/Content"));
const Header = lazy(() => import("components/Header/Header"));

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
