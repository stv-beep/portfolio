import './App.css';
import './btn.css';
import { Nav } from './components/Nav'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <About/>
      </header>
        
        
        <Skills/>     
        
        {/* <Projects/> */}  
        <Footer/>
    </div>
  );
}

export default App;
