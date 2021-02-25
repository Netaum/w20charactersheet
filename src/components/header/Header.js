import React from "react";
import { withTranslation } from "react-i18next";
import "./Header.css";
import SheetContext from "../../contexts/SheetContext";
import breeds from "../../assets/tables/breeds.json";
import auspices from "../../assets/tables/auspices.json";
import tribes from "../../assets/tables/tribes.json";

class Header extends React.Component {
  static contextType = SheetContext;

  handleHeader = (headerName, value, event) => {
    let key = null;
    if (event !== null) {
      for (let node of event.target.children) {
        if (node.value === value) {
          key = node.getAttribute("data-key");
          break;
        }
      }
    }
    this.context.changeHeader(headerName, value, key);
  };

  breeds() {
    const { t } = this.props;
    const itens = [];
    itens.push(<option key="none" data-key="none"></option>);
    Object.keys(breeds).forEach((f) =>
      itens.push(
        <option key={f} data-key={f}>
          {t(`breeds:${f}`)}
        </option>
      )
    );
    return (
      <select onChange={(e) => this.handleHeader("breed", e.target.value, e)}>
        {itens}
      </select>
    );
  }

  auspices() {
    const { t } = this.props;
    const itens = [];
    itens.push(<option key="none" data-key="none"></option>);
    Object.keys(auspices).forEach((f) =>
      itens.push(<option key={f} data-key={f}>{t(`auspices:${f}`)}</option>)
    );
    return (
      <select onChange={(e) => this.handleHeader("auspice", e.target.value, e)}>
        {itens}
      </select>
    );
  }

  tribes() {
    const { t } = this.props;
    const itens = [];
    itens.push(<option key="none" data-key='none'></option>);
    Object.keys(tribes).forEach((f) =>
      itens.push(<option key={f} data-key={f}>{t(`tribes:${f}`)}</option>)
    );
    return (
      <select onChange={(e) => this.handleHeader("tribe", e.target.value, e)}>
        {itens}
      </select>
    );
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div>
          <div className="header column1 line1">
            <span>{t("header:name")}: </span>
            <input
              type="text"
              value={this.context.sheet.header.name}
              onChange={(e) => this.handleHeader("name", e.target.value)}
            />
          </div>
          <div className="header column1 line2">
            <span>{t("header:player")}: </span>
            <input
              type="text"
              value={this.context.sheet.header.player}
              onChange={(e) => this.handleHeader("player", e.target.value)}
            />
          </div>
          <div className="header column1 line3">
            <span>{t("header:chronicle")}: </span>
            <input
              type="text"
              value={this.context.sheet.header.chronicle}
              onChange={(e) => this.handleHeader("chronicle", e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="header column2 line1">
            <span>{t("header:breed")}: </span>
            {this.breeds()}
          </div>
          <div className="header column2 line2">
            <span>{t("header:auspice")}: </span>
            {this.auspices()}
          </div>
          <div className="header column2 line3">
            <span>{t("header:tribe")}: </span>
            {this.tribes()}
          </div>
        </div>
        <div>
          <div className="header column3 line1">
            <span>{t("header:pack_name")}: </span>
            <input
              type="text"
              style={{ width: "135px" }}
              value={this.context.sheet.header.pack_name}
              onChange={(e) => this.handleHeader("pack_name", e.target.value)}
            />
          </div>
          <div className="header column3 line2">
            <span>{t("header:pack_totem")}: </span>
            <input
              type="text"
              style={{ width: "130px" }}
              value={this.context.sheet.header.pack_totem}
              onChange={(e) => this.handleHeader("pack_totem", e.target.value)}
            />
          </div>
          <div className="header column3 line3">
            <span>{t("header:concept")}: </span>
            <input
              type="text"
              style={{ width: "135px" }}
              value={this.context.sheet.header.concept}
              onChange={(e) => this.handleHeader("concept", e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Header);
