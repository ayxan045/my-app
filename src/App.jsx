import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import MyRouters from "./config/MyRouters";

function App() {
  return (
    <div className="App">
      <Header />
      <MyRouters />
      <Footer />
    </div>
  );
}

export default App;
