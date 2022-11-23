import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import Header from "./component/Home/Header";
import Home from "./component/Home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
