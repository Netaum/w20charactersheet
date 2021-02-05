import React from "react";

import "./App.css";
import Test from "./components/test/Test";
import Sheet from "./contexts/Sheet.json";
import SheetContext from "./contexts/SheetContext";

class App extends React.Component {
  state = {
    sheet: Sheet,
    updateState: (state) => this.setState(state),
    changeHeader: this.changeHeader,
    loadSection: this.loadSection,
    changeSection: this.changeSection,
    fillArray: this.fillArray
  };

  changeHeader(headerName, value) {
    const v = this;
    v.sheet.header[headerName] = value;
    this.updateState(v);
  }

  fillArray(section, value) {
    if (section.fill.length <= 0) section.fill = Array(section.maxValue);
    for (let i = 0; i < section.maxValue; i++) {
      if (i < section.initialValue || i < value) 
        section.fill[i] = true;
      else section.fill[i] = false;
    }
  }

  loadSection(sectionName, sectionType, sectionAttributeName) {
    const v = this;
    let section = v.sheet[sectionName][sectionType][sectionAttributeName];
    this.fillArray(section, section.value);
    this.updateState(v);
    return section;
  }

  changeSection(section, index) {

    const v = this;
    console.log("index: ", index, " value: ", section.value, " array : ", section.fill);

    if(index === section.value - 1)
      index--;

    const newValue = index + 1;
    section.value = newValue >= section.startValue ? newValue : section.startValue;

    this.fillArray(section, section.value);

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
