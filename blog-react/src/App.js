import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home'
import {Routes, Route} from 'react-router-dom'
import AddArticles from './Containers/AddArticles/AddArticles';
import Contact from './Containers/Contact/Contact'
import Articles from './Containers/Articles/Articles'

function App() {
  return (
    <>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/write" element={<AddArticles/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/articles/:slug" element={<Articles/>}></Route>
      </Routes>

      
      {/* <Home/> */}


    </>
  );
}

export default App;
