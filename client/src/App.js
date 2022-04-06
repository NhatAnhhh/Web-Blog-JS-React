import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import React, { useContext } from "react";
import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  return (
    
        <Router>
          <Topbar/>
            
            <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/register' element={user ?<Home/>:<Register />} />
            <Route path='/login' element={user ?<Home/>:<Login />} />
            <Route path='/write' element={user ?<Write/>:<Write />} />
            <Route path='/setting' element={user ?<Settings/>:<Settings />} />
            <Route path='/post/:postId' element={<Single />} />
            <Route path='/about' element= {user ?<user/>:<user.username/>} />
                
             
            </Routes>
        </Router>
        
  );
}

export default App;
