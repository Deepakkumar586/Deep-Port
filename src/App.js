
// import './App.css';
import Header from './component/header/Header.js'
import Nav from './component/nav/Nav';
import About from './component/about/About.js'
import Portfolio from './component/portfolio/Portfolio.js';
import Experience from './component/experience/Experience.js'
import Services from './component/services/Services.js'
import Testimonials from './component/testimonials/Testimonials.js'
import Contact from './component/contact/Contact.js'
import Footer from './component/footer/Footer.js'
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
