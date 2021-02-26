import React from 'react';
import { withTranslation } from "react-i18next";
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import './Abilities.css';

class Abilities extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.tal = [];
        this.tal.push(context.loadSection('abilities','talents','alertness'));
        this.tal.push(context.loadSection('abilities','talents','athletics'));
        this.tal.push(context.loadSection('abilities','talents','brawl'));
        this.tal.push(context.loadSection('abilities','talents','empathy'));
        this.tal.push(context.loadSection('abilities','talents','expression'));
        this.tal.push(context.loadSection('abilities','talents','intimidation'));
        this.tal.push(context.loadSection('abilities','talents','leadership'));
        this.tal.push(context.loadSection('abilities','talents','primal_urge'));
        this.tal.push(context.loadSection('abilities','talents','streetwise'));
        this.tal.push(context.loadSection('abilities','talents','subterfuge'));

        this.ski = [];
        this.ski.push(context.loadSection('abilities','skills','animal_ken'));
        this.ski.push(context.loadSection('abilities','skills','crafts'));
        this.ski.push(context.loadSection('abilities','skills','drive'));
        this.ski.push(context.loadSection('abilities','skills','etiquette'));
        this.ski.push(context.loadSection('abilities','skills','firearms'));
        this.ski.push(context.loadSection('abilities','skills','larceny'));
        this.ski.push(context.loadSection('abilities','skills','melee'));
        this.ski.push(context.loadSection('abilities','skills','performance'));
        this.ski.push(context.loadSection('abilities','skills','stealth'));
        this.ski.push(context.loadSection('abilities','skills','survival'));

        this.kno = [];
        this.kno.push(context.loadSection('abilities','knowledges','academics'));
        this.kno.push(context.loadSection('abilities','knowledges','computer'));
        this.kno.push(context.loadSection('abilities','knowledges','enigmas'));
        this.kno.push(context.loadSection('abilities','knowledges','investigation'));
        this.kno.push(context.loadSection('abilities','knowledges','law'));
        this.kno.push(context.loadSection('abilities','knowledges','medicine'));
        this.kno.push(context.loadSection('abilities','knowledges','occult'));
        this.kno.push(context.loadSection('abilities','knowledges','rituals'));
        this.kno.push(context.loadSection('abilities','knowledges','science'));
        this.kno.push(context.loadSection('abilities','knowledges','technology'));
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
                <Fill section={this.tal[0]} left="200px" top="401px" size="14px" />
                <Fill section={this.tal[1]} left="200px" top="419px" size="14px" />
                <Fill section={this.tal[2]} left="200px" top="437px" size="14px" />
                <Fill section={this.tal[3]} left="200px" top="455px" size="14px" />
                <Fill section={this.tal[4]} left="200px" top="473px" size="14px" />
                <Fill section={this.tal[5]} left="200px" top="491px" size="14px" />
                <Fill section={this.tal[6]} left="200px" top="509px" size="14px" />
                <Fill section={this.tal[7]} left="200px" top="527px" size="14px" />
                <Fill section={this.tal[8]} left="200px" top="545px" size="14px" />
                <Fill section={this.tal[9]} left="200px" top="563px" size="14px" />
                <span className="ability ability_line1 ability_column1">{this.getText(t("abilities:alertness"))}</span>
                <span className="ability ability_line2 ability_column1">{this.getText(t("abilities:athletics"))}</span>
                <span className="ability ability_line3 ability_column1">{this.getText(t("abilities:brawl"))}</span>
                <span className="ability ability_line4 ability_column1">{this.getText(t("abilities:empathy"))}</span>
                <span className="ability ability_line5 ability_column1">{this.getText(t("abilities:expression"))}</span>
                <span className="ability ability_line6 ability_column1">{this.getText(t("abilities:intimidation"))}</span>
                <span className="ability ability_line7 ability_column1">{this.getText(t("abilities:leadership"))}</span>
                <span className="ability ability_line8 ability_column1">{this.getText(t("abilities:primal_urge"))}</span>
                <span className="ability ability_line9 ability_column1">{this.getText(t("abilities:streetwise"))}</span>
                <span className="ability ability_line10 ability_column1">{this.getText(t("abilities:subterfuge"))}</span>


                <Fill section={this.ski[0]} left="440px" top="401px" size="14px" />
                <Fill section={this.ski[1]} left="440px" top="419px" size="14px" />
                <Fill section={this.ski[2]} left="440px" top="437px" size="14px" />
                <Fill section={this.ski[3]} left="440px" top="455px" size="14px" />
                <Fill section={this.ski[4]} left="440px" top="473px" size="14px" />
                <Fill section={this.ski[5]} left="440px" top="491px" size="14px" />
                <Fill section={this.ski[6]} left="440px" top="509px" size="14px" />
                <Fill section={this.ski[7]} left="440px" top="527px" size="14px" />
                <Fill section={this.ski[8]} left="440px" top="545px" size="14px" />
                <Fill section={this.ski[9]} left="440px" top="563px" size="14px" />
                <span className="ability ability_line1 ability_column2">{this.getText(t("abilities:animal_ken"))}</span>
                <span className="ability ability_line2 ability_column2">{this.getText(t("abilities:craft"))}</span>
                <span className="ability ability_line3 ability_column2">{this.getText(t("abilities:drive"))}</span>
                <span className="ability ability_line4 ability_column2">{this.getText(t("abilities:etiquette"))}</span>
                <span className="ability ability_line5 ability_column2">{this.getText(t("abilities:firearms"))}</span>
                <span className="ability ability_line6 ability_column2">{this.getText(t("abilities:larceny"))}</span>
                <span className="ability ability_line7 ability_column2">{this.getText(t("abilities:melee"))}</span>
                <span className="ability ability_line8 ability_column2">{this.getText(t("abilities:performance"))}</span>
                <span className="ability ability_line9 ability_column2">{this.getText(t("abilities:stealth"))}</span>
                <span className="ability ability_line10 ability_column2">{this.getText(t("abilities:survival"))}</span>

                <Fill section={this.kno[0]} left="680px" top="401px" size="14px" />
                <Fill section={this.kno[1]} left="680px" top="419px" size="14px" />
                <Fill section={this.kno[2]} left="680px" top="437px" size="14px" />
                <Fill section={this.kno[3]} left="680px" top="455px" size="14px" />
                <Fill section={this.kno[4]} left="680px" top="473px" size="14px" />
                <Fill section={this.kno[5]} left="680px" top="491px" size="14px" />
                <Fill section={this.kno[6]} left="680px" top="509px" size="14px" />
                <Fill section={this.kno[7]} left="680px" top="527px" size="14px" />
                <Fill section={this.kno[8]} left="680px" top="545px" size="14px" />
                <Fill section={this.kno[9]} left="680px" top="563px" size="14px" />
                <span className="ability ability_line1 ability_column3">{this.getText(t("abilities:academics"))}</span>
                <span className="ability ability_line2 ability_column3">{this.getText(t("abilities:computer"))}</span>
                <span className="ability ability_line3 ability_column3">{this.getText(t("abilities:enigmas"))}</span>
                <span className="ability ability_line4 ability_column3">{this.getText(t("abilities:investigation"))}</span>
                <span className="ability ability_line5 ability_column3">{this.getText(t("abilities:law"))}</span>
                <span className="ability ability_line6 ability_column3">{this.getText(t("abilities:medicine"))}</span>
                <span className="ability ability_line7 ability_column3">{this.getText(t("abilities:occult"))}</span>
                <span className="ability ability_line8 ability_column3">{this.getText(t("abilities:rituals"))}</span>
                <span className="ability ability_line9 ability_column3">{this.getText(t("abilities:science"))}</span>
                <span className="ability ability_line10 ability_column3">{this.getText(t("abilities:technology"))}</span>

            </div>
        );
    }
}

export default withTranslation()(Abilities);
