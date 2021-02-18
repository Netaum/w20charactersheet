import React from 'react';
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

        this.ski = [];
        this.ski.push(context.loadSection('abilities','skills','animal_ken'));
        this.ski.push(context.loadSection('abilities','skills','crafts'));
        this.ski.push(context.loadSection('abilities','skills','drive'));
        this.ski.push(context.loadSection('abilities','skills','etiquette'));
        this.ski.push(context.loadSection('abilities','skills','firearms'));

        this.kno = [];
        this.kno.push(context.loadSection('abilities','knowledges','academics'));
        this.kno.push(context.loadSection('abilities','knowledges','computer'));
        this.kno.push(context.loadSection('abilities','knowledges','enigmas'));
        this.kno.push(context.loadSection('abilities','knowledges','investigation'));
        this.kno.push(context.loadSection('abilities','knowledges','law'));
        this.kno.push(context.loadSection('abilities','knowledges','medicine'));

        this.giftName = "Falling touch";

        this.options = [
            { value: 'Blue', label:'Blue', style: { color: 'red'} },
            { value: 'Red', label:'Red', style: { color: 'blue'} },
            { value: 'Black', label:'Black', style: { color: 'yellow'} },
        ]
    }

    handleHeader = (headerName, value) => {

    }

    removeGift = (event) => {
        console.log(event.target.id);
    }

    loadGifts() {
        let gifts = this.context.loadGifts();
        var lineGifts = [];
        let i = 0;
        gifts.forEach(g => {
            lineGifts.push(<div key={i++}><span id={g.name} onClick={(e) => this.removeGift(e)}>{i} {g.name} (level {g.level})</span></div>);
        });
        return (
            <div>
                {lineGifts}
            </div>
        );
    }

    handleGift = (name) => {
        this.giftName = name;
    }

    addGift(giftName) {
        const gift = {
            "name": giftName,
            "level": 1,
            "xp": 0,
            "bonus": 0
        };
        this.context.addGift(gift);
    }

    addTribe() {
        this.context.chooseTribe('black_furies');
    }

    onSelect = (event) => {

    }

    render () {
        const test_style = {
            position: 'absolute',
            left: '150px',
            top: '250px',
            width: '200px'

        };
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

                <Fill section={this.ski[0]} left="150px" top="130px" />
                <Fill section={this.ski[1]} left="150px" top="150px" />
                <Fill section={this.ski[2]} left="150px" top="170px" />
                <Fill section={this.ski[3]} left="150px" top="190px" />
                <Fill section={this.ski[4]} left="150px" top="210px" />

                <Fill section={this.kno[0]} left="250px" top="130px" />
                <Fill section={this.kno[1]} left="250px" top="150px" />
                <Fill section={this.kno[2]} left="250px" top="170px" />
                <Fill section={this.kno[3]} left="250px" top="190px" />
                <Fill section={this.kno[4]} left="250px" top="210px" />

                <Fill section={this.bg[0]} left="50px" top="250px" />
                <Fill section={this.bg[1]} left="50px" top="270px" />
                <Fill section={this.bg[2]} left="50px" top="290px" />
                <Fill section={this.bg[3]} left="50px" top="310px" />
                <Fill section={this.bg[4]} left="50px" top="330px" />
    
                {this.loadGifts()}
                <button onClick={() => this.context.changeFillMode('bonus')}>BONUS</button>
                <input 
                    type='text'
                    onChange={e => this.handleGift(e.target.value)}
                    defaultValue={this.giftName}
                    />
                <button onClick={() => this.addGift(this.giftName)} >Add Gift</button>
                <button onClick={() => this.addTribe()}>Tribe</button>
                <br/>
                <div style={test_style}>
                    <Dropdown options={this.options} onChange={ e => this.onSelect(e)} placeholder='Select a color' />
                </div>
            </div>
        )
    }
}

export default Test;
