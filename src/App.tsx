import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width:"100%", marginLeft:"80px" }}>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
