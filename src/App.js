import React from "react";
import Header from "./components/header/Header";
import Labels from "./components/labels/Labels";
import Attributes from './components/attributes/Attributes';
import Abilities from './components/abilities/Abilities';
import Renown from './components/renown/Renown';
import Energy from './components/energy/Energy';
import Health from './components/health/Health';
import Background from './components/background/Background';
import SheetController from './contexts/SheetController';

import "./App.css";
import logo from './assets/images/wwlogo.svg';

class App extends React.Component {

  render() {
    return (
      <SheetController>
        <div className="App">
          <div className="page_size_complete page_shadow">
            <img src={logo} alt='Logo' className="app_logo" />
            <Header />
            <Labels />
            <Attributes />
            <Abilities />
            <Background />
            <Renown />
            <Energy />
            <Health />
          </div>
        </div>
      </SheetController>
    );
  }
}

export default App;
