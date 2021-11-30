import './App.css';
import FBAuthentication from './components/FBAuthentication'
import GoogleAuthen from './components/GoogleAuthen';

function App() {
  return (
    <div className="App">
      <FBAuthentication/>
      <GoogleAuthen/>
    </div>
  );
}

export default App;
