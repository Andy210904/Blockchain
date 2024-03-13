import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
