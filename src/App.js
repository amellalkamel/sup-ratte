import "./App.css";
import Header from "./header/Header";
import Panier from "./panier/Panier";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Sociaux from "./sociaux/Sociaux";
import Contact from "./contact/Contact";
import Maps from "./maps/Maps";
import Publicite from "./publicite/Publicite";
function App() {
  return (
    <div>
      <Header />
      <Panier />
      <Main />
      <Publicite />
      <Footer />
      <Maps />
      <Sociaux />
      <Contact />
    </div>
  );
}

export default App;
