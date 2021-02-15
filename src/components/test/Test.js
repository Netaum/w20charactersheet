import React from 'react';
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';

class Test extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);

        this.bg = this.context.loadBackgrounds();
        this.phy = [];
        this.phy.push(context.loadSection('attributes','physical','strength'));
        this.phy.push(context.loadSection('attributes','physical','dexterity'));
        this.phy.push(context.loadSection('attributes','physical','stamina'));

        this.soc = [];
        this.soc.push(context.loadSection('attributes','social','charisma'));
        this.soc.push(context.loadSection('attributes','social','manipulation'));
        this.soc.push(context.loadSection('attributes','social','appearance'));
        console.log(this.phy[0]);

        this.men = [];
        this.men.push(context.loadSection('attributes','mental','perception'));
        this.men.push(context.loadSection('attributes','mental','intelligence'));
        this.men.push(context.loadSection('attributes','mental','wits'));

        this.tal = [];
        this.tal.push(context.loadSection('abilities','talents','alertness'));
        this.tal.push(context.loadSection('abilities','talents','athletics'));
        this.tal.push(context.loadSection('abilities','talents','brawl'));
        this.tal.push(context.loadSection('abilities','talents','empathy'));
        this.tal.push(context.loadSection('abilities','talents','expression'));
    }

    handleHeader = (headerName, value) => {
        this.context.changeHeader(headerName, value);
    }

    render () {
        return (
            <div>
                <span>Name:</span>
                <input 
                    type='text'
                    value={this.context.sheet.header.name} 
                    onChange={e => this.handleHeader('name', e.target.value)}
                    />
                <br />
                <span>Player:</span>
                <input 
                    type='text'
                    value={this.context.sheet.header.player} 
                    onChange={e => this.handleHeader('player', e.target.value)}
                    />
                <br />
                <span>{this.context.sheet.header.name}</span>
                <br />
                <span>{this.context.sheet.header.player}</span>
                <br />
                <span>{this.context.sheet.attributes.physical.control.total}</span>
                <br />
                <span>{this.context.sheet.attributes.social.control.total}</span>
                <br />
                <span>{this.context.sheet.attributes.mental.control.total}</span>
                <Fill section={this.phy[0]} left="50px" top="50px" />
                <Fill section={this.phy[1]} left="50px" top="70px" />
                <Fill section={this.phy[2]} left="50px" top="90px" />

                <Fill section={this.soc[0]} left="150px" top="50px" />
                <Fill section={this.soc[1]} left="150px" top="70px" />
                <Fill section={this.soc[2]} left="150px" top="90px" />

                <Fill section={this.men[0]} left="250px" top="50px" />
                <Fill section={this.men[1]} left="250px" top="70px" />
                <Fill section={this.men[2]} left="250px" top="90px" />
             
                <Fill section={this.tal[0]} left="50px" top="130px" />
                <Fill section={this.tal[1]} left="50px" top="150px" />
                <Fill section={this.tal[2]} left="50px" top="170px" />
                <Fill section={this.tal[3]} left="50px" top="190px" />
                <Fill section={this.tal[4]} left="50px" top="210px" />

                <Fill section={this.bg[0]} left="50px" top="250px" />
                <Fill section={this.bg[1]} left="50px" top="270px" />
                <Fill section={this.bg[2]} left="50px" top="290px" />
                <Fill section={this.bg[3]} left="50px" top="310px" />
                <Fill section={this.bg[4]} left="50px" top="330px" />


            </div>
        )
    }
}

export default Test;
