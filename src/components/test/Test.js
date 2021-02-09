import React from 'react';
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';

class Test extends React.Component {
    static contextType = SheetContext;

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
                <Fill sectionName="attributes" sectionType="physical" sectionAttributeName="strength" left="50px" top="50px" />
                <Fill sectionName="attributes" sectionType="physical" sectionAttributeName="dexterity" left="50px" top="70px" />
                <Fill sectionName="attributes" sectionType="physical" sectionAttributeName="stamina" left="50px" top="90px" />

                <Fill sectionName="attributes" sectionType="social" sectionAttributeName="charisma" left="150px" top="50px" />
                <Fill sectionName="attributes" sectionType="social" sectionAttributeName="manipulation" left="150px" top="70px" />
                <Fill sectionName="attributes" sectionType="social" sectionAttributeName="appearance" left="150px" top="90px" />

                <Fill sectionName="attributes" sectionType="mental" sectionAttributeName="perception" left="250px" top="50px" />
                <Fill sectionName="attributes" sectionType="mental" sectionAttributeName="intelligence" left="250px" top="70px" />
                <Fill sectionName="attributes" sectionType="mental" sectionAttributeName="wits" left="250px" top="90px" />

                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="alertness" left="50px" top="130px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="athletics" left="50px" top="150px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="brawl" left="50px" top="170px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="empathy" left="50px" top="190px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="expression" left="50px" top="210px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="intimidation" left="50px" top="230px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="leadership" left="50px" top="250px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="primal-urge" left="50px" top="270px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="streetwise" left="50px" top="290px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="subterfuge" left="50px" top="310px" />

                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="animal_ken" left="150px" top="130px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="crafts" left="150px" top="150px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="drive" left="150px" top="170px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="etiquette" left="150px" top="190px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="firearms" left="150px" top="210px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="larceny" left="150px" top="230px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="melee" left="150px" top="250px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="performance" left="150px" top="270px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="stealth" left="150px" top="290px" />
                <Fill sectionName="abilities" sectionType="skills" sectionAttributeName="survival" left="150px" top="310px" />

                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="academics" left="250px" top="130px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="computer" left="250px" top="150px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="enigmas" left="250px" top="170px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="investigation" left="250px" top="190px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="law" left="250px" top="210px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="medicine" left="250px" top="230px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="occult" left="250px" top="250px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="rituals" left="250px" top="270px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="science" left="250px" top="290px" />
                <Fill sectionName="abilities" sectionType="knowledges" sectionAttributeName="technology" left="250px" top="310px" />


            </div>
        )
    }
}

export default Test;
