import React from 'react';
import SheetContext from '../../contexts/SheetContext';

class Test extends React.Component {
    static contextType = SheetContext;

    changeName(name) {
        this.context.changeName(name);
    }

    handleChange = (ev) => {
        this.context.changeName(ev.target.value);
    }

    render () {
        return (
            <div>
                <input 
                    type='Text'
                    value={this.context.sheet.header.name} 
                    onChange={this.handleChange}
                    />
                <br />
                <span>{this.context.sheet.header.name}</span>
            </div>
        )
    }
}

export default Test;
