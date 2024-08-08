import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import data from './data';
import './App.css';


function App() {

return (
          <div>
              <Navbar />
              <Hero />
              <CardList data={data}/>
          </div>
      )
}

export default App;
