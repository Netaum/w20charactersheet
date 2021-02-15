import React from "react";

import "./App.css";
import Test from "./components/test/Test";
import Sheet from "./contexts/Sheet.json";
import SheetContext from "./contexts/SheetContext";

import auspices from './assets/tables/auspices.json';
import breeds from './assets/tables/breeds.json';
import tribes from './assets/tables/tribes.json';

class App extends React.Component {
  state = {
    sheet: Sheet,
    mode: "normal",
    updateState: (state) => this.setState(state),
    changeHeader: this.changeHeader,
    loadSection: this.loadSection,
    changeSection: this.changeSection,
    fillArray: this.fillArray,
    changeValue: this.changeValue,
    getPriority: this.getPriority,
    chageValueNormalMode: this.chageValueNormalMode,
    loadBackgrounds: this.loadBackgrounds,
    changeBackgroundValue: this.changeBackgroundValue,
    loadGifts: this.loadGifts,
    changeFillMode: this.changeFillMode,
    addGift: this.addGift,
    chooseTribe: this.chooseTribe,
    chooseAuspice: this.chooseAuspice,
    chooseBreed: this.chooseBreed
  };

  chooseTribe(tribe) {
    const c_tribe = tribes[tribe];
    console.log(c_tribe);
  }

  chooseAuspice(auspice) {

  }

  chooseBreed(breed) {

  }

  addGift(gift) {
    const sheet = this.sheet;

    const gifts = sheet.advantages.gifts.itens.filter(f => f.name === gift.name);

    if(gifts.length > 0) {
      return;
    }

    if(this.mode === "normal" &&
       sheet.advantages.gifts.control.total[1] >= 3) {
        return;
    }

    sheet.advantages.gifts.itens.push(gift);
    sheet.advantages.gifts.control.total[gift.level] += 1;

    this.updateState(this);
    console.log(sheet.advantages.gifts);
  }

  changeFillMode(fillMode) {
    const v = this;
    const sheet = v.sheet;

    if (v.mode === "normal") {
      let total = 0;
      for (const prop in sheet.attributes) {
        total += sheet.attributes[prop].control.total;
      }
      if(total < 24) {
        console.log('Preencha attributos');
        return;
      }

      total = 0;

      for(const prop in sheet.abilities){
        total += sheet.abilities[prop].control.total;
      }

      if(total < 27) {
        console.log('Preencha habilidades');
        return;
      }

      if(sheet.advantages.backgrounds.control.total < 5) {
        console.log('Preencha antecedentes');
        return;
      }

      if(sheet.advantages.gifts.control.total[1] < 3) {
        console.log('Preencha dons');
        return;
      }
    }

    console.log('yes');
    v.mode = fillMode;
    this.updateState(v);
  }

  getPriority(totalValue, type) {
    if (type === "attributes") {
      if (totalValue <= 6) return 3;

      if (totalValue <= 8) return 5;

      return 7;
    } else {
      if (totalValue <= 5) return 3;

      if (totalValue <= 9) return 5;

      return 7;
    }
  }

  changeHeader(headerName, value) {
    const v = this;
    v.sheet.header[headerName] = value;
    this.updateState(v);
  }

  fillArray(section, value) {
    if (section.fill.length <= 0) section.fill = Array(section.maxValue);
    for (let i = 0; i < section.maxValue; i++) {
      if (i < section.initialValue || i < value) section.fill[i] = true;
      else section.fill[i] = false;
    }
  }

  loadGifts() {
    const v = this;
    let sheetGifts = v.sheet.advantages.gifts.itens;
    let gifts = [];

    sheetGifts.forEach(gift => {
      gift["sectionName"] = "gifts";
      gift["control"] = v.sheet.advantages.gifts.control;
      gifts.push(gift);
    });

    return gifts;
  }

  loadBackgrounds() {
    const v = this;

    let sheetBackgrounds = v.sheet.advantages.backgrounds.itens;
    let backgrounds = [];

    sheetBackgrounds.forEach(bg => {
      this.fillArray(bg, bg.value);
      bg["sectionName"] = "backgrounds";
      bg["control"] = v.sheet.advantages.backgrounds.control;
      backgrounds.push(bg);
    });

    let total = 0;
    backgrounds.forEach(bg => {
      total += bg.value;
    });
    v.sheet.advantages.backgrounds.control.total = total;

    this.updateState(v);
    return backgrounds;
  }

  loadSection(sectionName, sectionType, sectionAttributeName) {
    const v = this;

    let section = v.sheet[sectionName][sectionType][sectionAttributeName];

    section["parent"] = v.sheet[sectionName];
    section["type"] = v.sheet[sectionName][sectionType];
    section["sectionName"] = sectionName;

    this.fillArray(section, section.value);
    this.updateState(v);

    return section;
  }

  changeBackgroundValue(section, selectedValue) {
    const currentValue = section.value;
    let currentTotal = section.control.total;

    if (currentValue === selectedValue) return;

    if (selectedValue < currentValue) {
      const diff = currentValue - selectedValue;
      currentTotal -= diff;

      section.value = selectedValue;
      section.control.total = currentTotal;

      return;
    }

    const diff = selectedValue - section.value;
    currentTotal += diff;

    if(currentTotal > 5 && this.mode === "normal") return;

    section.value = selectedValue;
    section.control.total = currentTotal;

  }

  chageValueNormalMode(section, selectedValue) {
    const startValue = section.startValue ? section.startValue : 0;
    selectedValue = selectedValue >= startValue ? 
                    selectedValue : 
                    startValue;
    
    if(section.sectionName === 'backgrounds'){
      this.changeBackgroundValue(section, selectedValue);
      return;
    }

    const currentValue = section.value;
    let currentTotal = section.type.control.total;

    if (currentValue === selectedValue) return;

    if (selectedValue < currentValue) {
      const diff = currentValue - selectedValue;
      currentTotal -= diff;

      section.type.control.priority = this.getPriority(
        currentTotal,
        section.sectionName
      );

      section.value = selectedValue;
      section.type.control.total = currentTotal;

      return;
    }
    let priorityControl = [];
    for (const prop in section.parent) {
      priorityControl.push(section.parent[prop].control.priority);
    }

    if (section.sectionName !== "attributes" && selectedValue > 3) return;

    const diff = selectedValue - section.value;

    currentTotal += diff;

    const maxValue = section.sectionName === "attributes" ? 10 : 13;

    if (currentTotal > maxValue) return;

    const currentPriority = this.getPriority(currentTotal, section.sectionName);

    if (currentPriority <= section.type.control.priority) {
      section.value = selectedValue;
      section.type.control.priority = currentPriority;
    } else {
      if (
        (currentPriority === 5 &&
          priorityControl.filter((f) => f >= 5).length <= 1) ||
        (currentPriority === 7 &&
          priorityControl.filter((f) => f === 7).length === 0)
      ) {
        section.value = selectedValue;
        section.type.control.priority = currentPriority;
      }
    }

    let totalSection = 0;
    for (const prop in section.type) {
      if (prop === "control") continue;

      totalSection += section.type[prop].value;
    }
    section.type.control.total = totalSection;
  }

  changeValue(section, index) {
    let selectedValue = index + 1;

    if (selectedValue === section.value) selectedValue--;

    if(this.mode === 'normal') {
      this.chageValueNormalMode(section, selectedValue);
    }
  }

  changeSection(section, index) {
    const v = this;
    this.changeValue(section, index);

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
