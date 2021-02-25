import React from 'react';
import { withTranslation } from "react-i18next";
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import './Attributes.css';

class Attributes extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.phy = [];
        this.phy.push(context.loadSection('attributes','physical','strength'));
        this.phy.push(context.loadSection('attributes','physical','dexterity'));
        this.phy.push(context.loadSection('attributes','physical','stamina'));

        this.soc = [];
        this.soc.push(context.loadSection('attributes','social','charisma'));
        this.soc.push(context.loadSection('attributes','social','manipulation'));
        this.soc.push(context.loadSection('attributes','social','appearance'));

        this.men = [];
        this.men.push(context.loadSection('attributes','mental','perception'));
        this.men.push(context.loadSection('attributes','mental','intelligence'));
        this.men.push(context.loadSection('attributes','mental','wits'));
    }

    getText(text) {
        const l = text.length;
        const r = 24 - l;
        return `${text}${'_'.repeat(r)}`;
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <Fill section={this.phy[0]} left="200px" top="277px" size="14px" />
                <Fill section={this.phy[1]} left="200px" top="295px" size="14px" />
                <Fill section={this.phy[2]} left="200px" top="313px" size="14px" />
                <span className="attribute attribute_line1 attribute_column1">{this.getText(t("attributes:strength"))}</span>
                <span className="attribute attribute_line2 attribute_column1">{this.getText(t("attributes:dexterity"))}</span>
                <span className="attribute attribute_line3 attribute_column1">{this.getText(t("attributes:stamina"))}</span>

                <Fill section={this.soc[0]} left="440px" top="277px" size="14px" />
                <Fill section={this.soc[1]} left="440px" top="295px" size="14px" />
                <Fill section={this.soc[2]} left="440px" top="313px" size="14px" />
                <span className="attribute attribute_line1 attribute_column2">{this.getText(t("attributes:charisma"))}</span>
                <span className="attribute attribute_line2 attribute_column2">{this.getText(t("attributes:manipulation"))}</span>
                <span className="attribute attribute_line3 attribute_column2">{this.getText(t("attributes:appearance"))}</span>

                <Fill section={this.men[0]} left="680px" top="277px" size="14px" />
                <Fill section={this.men[1]} left="680px" top="295px" size="14px" />
                <Fill section={this.men[2]} left="680px" top="313px" size="14px" />
                <span className="attribute attribute_line1 attribute_column3">{this.getText(t("attributes:perception"))}</span>
                <span className="attribute attribute_line2 attribute_column3">{this.getText(t("attributes:intelligence"))}</span>
                <span className="attribute attribute_line3 attribute_column3">{this.getText(t("attributes:wits"))}</span>
            </div>
        );
    }
}

export default withTranslation()(Attributes);