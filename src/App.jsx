import './App.css';
import './btn.css';
import { Nav } from './components/Nav'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import ScrollButton from './components/ScrollButton';
import './fonts/style.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
        <ScrollButton />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
