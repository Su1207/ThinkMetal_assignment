import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
