import './App.css';
import Gallery from './Components/Gallery/Gallery';
import {Routes, Route} from 'react-router-dom'
import Detail from './Components/Detail/Detail';
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Gallery/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='*' element={<Error/>} />
      </Routes>

    </div>
  );
}

export default App;
