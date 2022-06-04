import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";


function App() {
  return (
    <div className="App">
      <div className="container w-1/2 mx-auto my-10 border">
          <Header />
          <Main />
          <Footer />
      </div>
    </div>
  );
}

export default App;
