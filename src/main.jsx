import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store.js";
import { ThemeContextProvider } from "./Context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>
);
