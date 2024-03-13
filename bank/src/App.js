import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{'display':'flex'}}>
      <Sidebar/>
      <Content/>

      </div>
    </div>
  );
}

export default App;
