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
                <Fill sectionName="attributes" sectionType="physical" sectionAttributeName="strength" left="50px" top="50px" />
                <Fill sectionName="abilities" sectionType="talents" sectionAttributeName="alertness" left="50px" top="70px" />
            </div>
        )
    }
}

export default Test;
