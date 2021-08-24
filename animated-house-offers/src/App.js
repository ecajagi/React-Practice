import React, {useState} from 'react'
import Dropdown from './components/Dropdown'
import { Navbar } from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import {InfoSection} from './components/InfoSection';
import { InfoData} from './data/InfoData';
import { OffersSection } from './components/OffersSection';
import WorkInProgress from './components/WorkInProgress'
import Footer from "./components/Footer"
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen)
}


  return (
    <Router>
      <GlobalStyle/>
        <Switch>
          <Route path='/homes'>
            <WorkInProgress />
          </Route>

          <Route path='/'>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            <OffersSection/>
            <Footer/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
