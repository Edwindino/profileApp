import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
