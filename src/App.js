import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Sociaux from "./sociaux/Sociaux";
import Contact from "./contact/Contact";
import Maps from "./maps/Maps";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Maps />
      <Sociaux />
      <Contact />
    </div>
  );
}

export default App;
