import './App.css'
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Code from "./pages/Code/Code"
import Change from "./pages/Change/Change"
import Newpassword from "./pages/Newpassword/Newpassword"
import Home from "./pages/Home/Home"
import Roadmap from "./pages/Roadmap/Roadmap"
import AboutSec from "./pages/aboutSec/aboutSec"
import Policy from "./pages/Policy/Policy"
import SavePass from "./pages/SavePass/SavePass"
import Checkpass from "./pages/Checkpass/Checkpass"
import Generatepass from "./pages/Generatepass/Generatepass"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ProtectedRoutes from './utils/utils'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Signup/>} path='/signup'></Route>
        <Route element={<Change/>} path='/Change'></Route>
        <Route element={<Code/>} path='/Code'></Route>
        <Route element={<Newpassword/>} path='/newpassword/:token' ></Route>
        <Route element={<ProtectedRoutes/>}>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Roadmap/>} path='/Roadmap'></Route>
        <Route element={<AboutSec/>} path='/AboutSec'></Route>
        <Route element={<Policy/>} path='/Policy'></Route>
        <Route element={<SavePass/>} path='/SavePass'></Route>
        <Route element={<Checkpass/>} path='/Checkpass'></Route>
        <Route element={<Generatepass/>} path='/Generatepass'></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
