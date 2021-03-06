import { Component } from "react";
import Sheet from "./Sheet.json";
import SheetContext from "./SheetContext";

import auspices from "../assets/tables/auspices.json";
import breeds from "../assets/tables/breeds.json";
import tribes from "../assets/tables/tribes.json";
import values from '../assets/tables/values.json';

class SheetController extends Component {
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
    chooseBreed: this.chooseBreed,
    getBackgroundList: this.getBackgroundList,
    getBackground: this.getBackground,
    clearBackgrounds: this.clearBackgrounds,
    changeBackground: this.changeBackground,
  };

  changeBackground(name, index) {
    const bg = this.sheet.advantages.backgrounds.itens.filter(
      (f) => f.name === name
    );
    if (bg.length > 0) {
      return;
    }
    this.sheet.advantages.backgrounds.itens[index - 1].name = name;
    this.updateState(this);
  }

  clearBackgrounds(sheet) {
    sheet.advantages.backgrounds.itens.forEach((f) => {
      f.name = "";
      f.value = 0;
      f.fill = [false, false, false, false, false];
      f.bonus = [];
      f.xp = [];
    });
    sheet.advantages.backgrounds.control.total = 0;
  }

  getBackgroundList() {
    const sheet = this.sheet;

    let bgList = values.backgrounds;

    if (!sheet.background_restrictions) return bgList;

    return bgList.filter((f) => !sheet.background_restrictions.includes(f));
  }

  getBackground(index) {
    const sheet = this.sheet;
    return sheet.advantages.backgrounds.itens[index - 1];
  }

  chooseTribe(tribe) {
    const sheet = this.sheet;
    const s_tribe = tribes[tribe];
    if (!("beginning_gifts" in sheet)) sheet["beginning_gifts"] = {};
    sheet["beginning_gifts"]["tribe"] = s_tribe.beginning_gifts;
    sheet["background_restrictions"] = s_tribe.background_restrictions;

    this.clearBackgrounds(sheet);

    if ("background_requisites" in s_tribe) {
      s_tribe.background_requisites.forEach((b, i) => {
        let back = sheet.advantages.backgrounds.itens[i];
        back.name = b.name;
        back.value = b.min_value;
        sheet.advantages.backgrounds.control.total += b.min_value;
        this.fillArray(back, b.min_value);
      });
    }
    sheet.willpower.value = s_tribe.initial_willpower;
    this.fillArray(sheet.willpower, s_tribe.initial_willpower);
    this.updateState(this);
  }

  chooseAuspice(auspice) {
    const sheet = this.sheet;
    const s_auspice = auspices[auspice];
    if (!("beginning_gifts" in sheet)) sheet["beginning_gifts"] = {};
    sheet["beginning_gifts"]["auspice"] = s_auspice.beginning_gifts;

    this.fillArray(sheet.rage, s_auspice.initial_rage);
    sheet.rage.value = s_auspice.initial_rage;

    s_auspice.initial_renown.forEach((r) => {
      sheet.renown[r.name].permanent.value = r.value;
      this.fillArray(sheet.renown[r.name].permanent, r.value);
      this.fillArray(sheet.renown[r.name].temporary, 0);
    });
  }

  chooseBreed(breed) {
    const sheet = this.sheet;
    const s_breed = breeds[breed];
    if (!("beginning_gifts" in sheet)) sheet["beginning_gifts"] = {};
    sheet["beginning_gifts"]["breed"] = s_breed.beginning_gifts;

    this.fillArray(sheet.gnosis, s_breed.initial_gnosis);
    sheet.gnosis.value = s_breed.initial_gnosis;
  }

  addGift(gift) {
    const sheet = this.sheet;

    const gifts = sheet.advantages.gifts.itens.filter(
      (f) => f.name === gift.name
    );

    if (gifts.length > 0) {
      return;
    }

    if (
      this.mode === "normal" &&
      sheet.advantages.gifts.control.total[1] >= 3
    ) {
      return;
    }

    sheet.advantages.gifts.itens.push(gift);
    sheet.advantages.gifts.control.total[gift.level] += 1;

    this.updateState(this);
  }

  changeFillMode(fillMode) {
    const v = this;
    const sheet = v.sheet;

    if (v.mode === "normal") {
      let total = 0;
      for (const prop in sheet.attributes) {
        total += sheet.attributes[prop].control.total;
      }
      if (total < 24) {
        console.log("Preencha attributos");
        return;
      }

      total = 0;

      for (const prop in sheet.abilities) {
        total += sheet.abilities[prop].control.total;
      }

      if (total < 27) {
        console.log("Preencha habilidades");
        return;
      }

      if (sheet.advantages.backgrounds.control.total < 5) {
        console.log("Preencha antecedentes");
        return;
      }

      if (sheet.advantages.gifts.control.total[1] < 3) {
        console.log("Preencha dons");
        return;
      }
    }

    console.log("yes");
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

  changeHeader(headerName, value, key) {
    const v = this;
    v.sheet.header[headerName] = value;
    if (this.mode === "normal" && headerName === "tribe") this.chooseTribe(key);
    if (this.mode === "normal" && headerName === "auspice")
      this.chooseAuspice(key);
    if (this.mode === "normal" && headerName === "breed") this.chooseBreed(key);
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

    sheetGifts.forEach((gift) => {
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

    sheetBackgrounds.forEach((bg) => {
      this.fillArray(bg, bg.value);
      bg["sectionName"] = "backgrounds";
      bg["control"] = v.sheet.advantages.backgrounds.control;
      backgrounds.push(bg);
    });

    let total = 0;
    backgrounds.forEach((bg) => {
      total += bg.value;
    });
    v.sheet.advantages.backgrounds.control.total = total;

    this.updateState(v);
    return backgrounds;
  }

  loadSection(sectionName, sectionType = null, sectionAttributeName = null) {
    const v = this;

    let section = null;

    if (sectionType !== null) {
      section = v.sheet[sectionName][sectionType][sectionAttributeName];
      section["parent"] = v.sheet[sectionName];
      section["type"] = v.sheet[sectionName][sectionType];
      section["sectionName"] = sectionName;
    } else {
      section = v.sheet[sectionName];
      section["sectionName"] = sectionName;
    }

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

    if (currentTotal > 5 && this.mode === "normal") return;

    section.value = selectedValue;
    section.control.total = currentTotal;
  }

  chageValueNormalMode(section, selectedValue) {
    const noChangeNormalMode = ["renown", "rage", "gnosis", "willpower"];
    if (noChangeNormalMode.includes(section.sectionName)) return;

    const startValue = section.startValue ? section.startValue : 0;
    selectedValue = selectedValue >= startValue ? selectedValue : startValue;

    if (section.sectionName === "backgrounds") {
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

    if (this.mode === "normal") {
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
      <SheetContext.Provider value={this.state}>
        {this.props.children}
      </SheetContext.Provider>
    );
  }
}

export default SheetController;
