import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
