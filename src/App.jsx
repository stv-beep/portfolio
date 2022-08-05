import './App.css';
import { Nav } from './components/Nav'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <About/>        
      </header>
      <Footer/>
    </div>
  );
}

export default App;
