import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);
