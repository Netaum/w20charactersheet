import './App.css';
import wwlogo from './images/wwlogo.svg';
import wwborder from './images/wwborder.svg';

function App() {
  return (
    <div className="App">
      <div className="page">
        <img src={wwborder} alt='border' className='WW-Border' />
        <img src={wwlogo} alt='logo' className='WW-Logo' />

      </div>
    </div>
  );
}

export default App;
