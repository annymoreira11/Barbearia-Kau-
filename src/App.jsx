import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Servicos from "./components/Servicos/Servicos.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./styles/layoute.css";

import "./styles/colors.css";


export default function App() {
return (
<div>
<Header />
<Hero />
 <section className="container">
      <Servicos />
      <Gallery />
    </section>
<Contact />
<Footer />
</div>
);
}