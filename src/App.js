import React from 'react';

import './App.css';
import Test from './components/test/Test';
import Sheet from './contexts/Sheet.json';
import SheetContext from './contexts/SheetContext';

class App extends React.Component {
  state = {
    sheet: Sheet,
    updateState: (state) => this.setState(state),
    changeName: this.changeName
  };

  changeName (name) {
    const v = this;
    v.sheet.header.name = name;
    this.updateState(v);
  }


  render() {
  return (
    <div className="App">
      <div>
        <SheetContext.Provider value={this.state}>
          <Test />
        </SheetContext.Provider>
      </div>
    </div>
  );
  }
}

export default App;
