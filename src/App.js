import './App.css';
import  Banner  from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import  Projects  from './components/Projects/Projects';
import  Skills  from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}


export default App;
