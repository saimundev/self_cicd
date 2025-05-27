import './App.css'
import {BrowserRouter,Routes,Route} from "react-router"
import Home from './Home'
import About from './About'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
