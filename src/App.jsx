
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route , Routes} from "react-router-dom"
import Home from "./components/Home"
import Academic from './components/Academic';
import Blogs from "./components/Blogs"
import CareerDev from "./components/CareerDev"
import IRelaions from "./components/IRelaions"
import Portals from "./components/Portals"
import Contacts from "./components/Contacts"
import Research from "./components/Research"
import InterestGroups from "./components/InterestGroups"



function App() {
  return (
    <div className="App">
<>
<Navbar />
<Routes>
<Route exact path='/' Component={Home}></Route>
<Route path='/academic'Component={Academic}></Route>
<Route path='/blogs' Component={Blogs}></Route>
<Route path='/careerdev' Component={CareerDev}></Route>
<Route path='/inrelations' Component={IRelaions}></Route>
<Route path='/portals' Component={Portals}></Route>
<Route path='/contacts' Component={Contacts}></Route>
<Route path='/research' Component={Research} ></Route>
<Route path='/intergroups' Component={InterestGroups}></Route>
</Routes>
</>  
    </div>
  );
}

export default App;
